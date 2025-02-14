const middleware = require("./middlewares/authenticateToken.js");
const { upload } = require("./middlewares/multer.js");
const ProductsControllers = require("./controllers/Products.js");
const { user } = require("./controllers/UserControllers.js");
const express = require("express");
const userComments = require("./controllers/UserComments.js");
const router = express.Router();
const { registerValidator } = require("./validators/expressValidator.js");

//User Routes
router.post("/signup", registerValidator, user.signup);
router.post("/signin", registerValidator, user.signin);
router.get("/signout", middleware.authenticateToken, user.signout);
router.post(
  "/passwordchange",
  middleware.authenticateToken,
  user.passwordChange
);
router.get(
  "/user/comments/all",
  middleware.authenticateToken,
  userComments.getAllComments
);
router.post(
  "/user/comments/insert",
  middleware.authenticateToken,
  userComments.insertComment
);
router.delete(
  "/user/comments/delete",
  middleware.authenticateToken,
  userComments.deleteComment
);

router.patch(
  "/user/comments/update",
  middleware.authenticateToken,
  userComments.updateComment
);

// Handle image upload
router.post(
  "/upload-img",
  middleware.authenticateToken,
  upload.array("avater", 2),
  user.uploadImages
);

router.get(
  "/protected-route",
  middleware.newRefreshAccessToken,
  (req, res) => {
    // This handler will run after newRefreshAccessToken if it calls next()
    res.status(200).json({ message: "You accessed the protected route!" });
  }
);

module.exports = router;
