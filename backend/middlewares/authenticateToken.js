const jwt = require("jsonwebtoken");
const { findByEmail, db } = require("../db.js");
const authToken = require("../controllers/authToken.js");

const middleware = {
  authenticateToken: async (req, res, next) => {
    try {
      // Retrieve token from cookies or authorization header
      const token =
        req.cookies?.accessToken ||
        req.headers["authorization"]?.replace("Bearer", "").trim();

      // If no token, return 401 response
      if (!token) {
        return res.status(401).json({ message: "Access Denied" });
      }

      // Verify JWT token and extract user data
      const user = await jwt.verify(token, process.env.SECRETKEYJWT);

      // Look for user by email
      const validUser = await findByEmail(user.email);

      // If user not found, return 401 response
      if (!validUser) {
        return res.status(401).json({ message: "Access Denied" });
      }

      // Attach the user data to the request object
      res.user = validUser;
      req.access = true;

      next();
    } catch (error) {
      console.error(error);
      return res
        .status(401)
        .json({ message: "Invalid User", error: error.message });
    }
  },

  authorizeUser: (role) => {
    return (req, res, next) => {
      if (res.user.role != role) {
        return res
          .status(403)
          .json({ message: "Not Allow To Access This Route" });
      }

      next();
    };
  },

  newRefreshAccessToken: async (req, res, next) => {
    const incomingrefreshToken = req.cookies?.refreshToken;

    if (!incomingrefreshToken) {
      return res.status(401).json({ message: "Access Denied" });
    }

    try {
      const decode = jwt.verify(
        incomingrefreshToken,
        process.env.SECRETREFRESHTOKEN
      );

      const queryText =
        "SELECT email, refreshtoken FROM UserDetails WHERE email = $1";
      const { rows } = await db.query(queryText, [decode.email]);
      const user = rows[0];

      if (!user || !user.refreshtoken || user.refreshtoken === "NULL") {
        return res.status(401).json({ message: "Refresh Token Expired" });
      }

      // Generate new access and refresh tokens
      const auth = await authToken.generateJwtTokenAndRefreshToken(user);
      console.log(auth);

      // Set new tokens as cookies
      res.cookie("newAccessToken", auth.newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 600000, // 10 minutes
      });

      res.cookie("newRefreshToken", auth.newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 86400000, // 1 day
      });

      // Update refresh token in the database
      const updateQuery =
        "UPDATE UserDetails SET refreshtoken = $1 WHERE email = $2";
      await db.query(updateQuery, [auth.newRefreshToken, decode.email]);

      console.log("Refresh token updated successfully");
      next();
    } catch (err) {
      console.error("Error refreshing token:", err);
      res.clearCookie("refreshToken");
      return res
        .status(401)
        .json({ message: "Invalid or expired refresh token" });
    }
  },
};

module.exports = middleware;
