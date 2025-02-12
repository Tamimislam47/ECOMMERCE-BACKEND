const bcrypt = require("bcrypt");
const { db, findByEmail, updatePasswordByEmail } = require("../db.js");
const authToken = require("./authToken.js");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const options = {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
};

const admin = {
  signin: async (req, res) => {
    const { email, password: pass } = req.body;

    // Validate email
    if (!email || !emailValidator.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate password
    if (!pass || pass.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    try {
      // Find user by email
      const user = await findByEmail(email);

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      // Compare the provided password with the hashed password in the database
      const matchWithHash = await bcrypt.compare(pass, user.password);
      if (!matchWithHash) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate JWT and refresh tokens
      const refreshToken = await authToken.generateRefreshToken(user);
      const accessToken = await authToken.generateJwtToken(user);

      // Set cookies and send the login response
      const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set secure flag in production
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      };

      res
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .status(200)
        .json({
          message: "Login Successful",
          accessToken,
          refreshToken,
        });

      // Update the refresh token in the database asynchronously
      const query = `
      UPDATE UserDetails 
      SET refreshToken = $1 
      WHERE email = $2
    `;
      const values = [refreshToken, email];

      db.query(query, values)
        .then(() => console.log("Refresh token updated successfully"))
        .catch((err) => console.error("Error updating refresh token:", err));
    } catch (err) {
      console.error("Error during signin:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  uploadImages: async (req, res) => {
    try {
      for (const file of req.files) {
        if (!fs.existsSync(file.path)) {
          return res
            .status(400)
            .json({ message: `File not found: ${file.path}` });
        }

        console.log("Uploading file:", file.path);
        const result = await cloudinary.uploader.upload(file.path);
      }

      res.status(200).json({
        message: "Files uploaded successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Upload failed", error: error.message });
    }
  },
};

module.exports = { admin, options };
