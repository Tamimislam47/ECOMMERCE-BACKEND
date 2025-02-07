const middleware = require("./middlewares/authenticateToken.js");
const { upload } = require("./middlewares/multer.js");
const ProductsController = require("./controllers/Products.js");
const { user } = require("./controllers/user.js");
const express = require("express");
const router = express.Router();
const { productValidator } = require("./validators/expressValidator.js");

router.post("/signup", user.signup);
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
router.get("/products/all", ProductsController.getProducts);
router.post(
  "/products/insert",
  productValidator,
  ProductsController.insertProducts
);
router.delete("/products/delete", ProductsController.deleteProduct);

module.exports = router;
