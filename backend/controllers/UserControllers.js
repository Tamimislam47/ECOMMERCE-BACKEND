const bcrypt = require("bcrypt");
const { db, findByEmail, updatePasswordByEmail } = require("../db.js");
const authToken = require("./authToken.js");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const sendByMail = require("./Mail.js");

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const options = {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
};

const user = {
  signup: async (req, res) => {
    const { email, password } = req.body;

    // Validate email
    if (!email || !emailValidator.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate password
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
    }

    try {
      // Hash the password
      const hashPass = await bcrypt.hash(
        password,
        parseInt(process.env.SALTROUND)
      );

      // Insert user into PostgreSQL
      const query = `
      INSERT INTO UserDetails (userId, email, password,)
      VALUES ($1, $2, $3)
    `;
      const values = [uuidv4(), email, hashPass];

      // Send confirmation email
      await sendByMail();

      // Execute the query
      await db.query(query, values);

      return res.status(201).json({ message: "Record inserted successfully" });
    } catch (err) {
      console.error("Error inserting record:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

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

  signout: async (_, res) => {
    const { user } = res;
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .status(200)
      .json({
        message: "LogOut Successfully",
      });
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

  passwordChange: async (req, res) => {
    try {
      const { email, oldPassword, newPassword } = req.body;

      const validUser = await findByEmail(email);
      if (!validUser) {
        return res.status(400).json({ message: "User not found" });
      }

      const match = await bcrypt.compare(oldPassword, validUser.password);
      console.log(match);

      if (!match) {
        return res.status(400).json({ message: "Old password is incorrect" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      const updated = await updatePasswordByEmail(
        hashedPassword,
        validUser.email
      );

      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = { user, options };
