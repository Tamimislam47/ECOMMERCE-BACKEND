const jwt = require("jsonwebtoken");
const { findByEmail, db, updateByEmail } = require("../db.js");
const authToken = require("../controllers/authToken.js");
const { options } = require("../controllers/UserControllers.js");

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

      // Proceed to the next middleware
      next();
    } catch (error) {
      // Return error response if verification fails
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

  newRefreshAccessToken: async (req, res) => {
    const incomingrefreshToken = req.cookies?.refreshToken;

    if (!incomingrefreshToken) {
      return res.status(401).json({ message: "Access Denied" });
    }

    const decode = jwt.verify(
      incomingrefreshToken,
      process.env.SECRETREFRESHTOKEN
    );

    if (!decode) {
      return res.status(401).json({ message: "Access dfsdfDenied" });
    }

    const user = await findByEmail(decode.email);

    if (!user.refreshToken || user.refreshToken === "NULL") {
      return res.status(401).json({ message: "RefreshToken Expired" });
    }

    const auth = await authToken.generateJwtTokenAndRefreshToken(user);
    res
      .cookie("newAccessToken", auth.newAccessToken, options)
      .cookie("newRefreshToken", auth.newRefreshToken, options)
      .status(200)
      .json({
        message: "Login Successful",
        newAccessToken: auth.newAccessToken,
        newRefreshToken: auth.newRefreshToken,
      });

    const query = "UPDATE UserDetails SET refreshToken = ? WHERE email = ?";
    db.query(query, [auth.newRefreshToken, decode.email], (err, result) => {
      if (err) {
        console.error("Error updating refresh token:", err);
      } else {
        console.log("Refresh token updated:", result);
      }
    });
  },
};

module.exports = middleware;
