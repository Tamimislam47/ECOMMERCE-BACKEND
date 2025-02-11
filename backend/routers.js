const middleware = require("./middlewares/authenticateToken.js");
const { upload } = require("./middlewares/multer.js");
const ProductsControllers = require("./controllers/Products.js");
const { user } = require("./controllers/user.js");
const express = require("express");
const router = express.Router();
const {
  productValidator,
  registerValidator,
} = require("./validators/expressValidator.js");
const sendByMail = require("./controllers/Mail.js");

router.post("/signup", registerValidator, user.signup);
router.post("/signin", user.signin);
router.post("/signout", middleware.authenticateToken, user.signout);
router.post("/passwordchange", user.passwordChange);

// Handle image upload
router.post(
  "/upload",
  middleware.authenticateToken,
  upload.array("avater", 2),
  user.uploadImages
);

router.post("/refreshTokenGen", middleware.newRefreshAccessToken);

//Products APiI
router.get(
  "/products/all",
  middleware.authenticateToken,
  ProductsControllers.getProducts
);
router.post(
  "/products/insert",
  productValidator,
  ProductsControllers.insertProducts
);
router.delete("/products/delete", ProductsControllers.deleteProduct);
// router.post("/products/update", ProductsControllers.updateProduct);

module.exports = router;
