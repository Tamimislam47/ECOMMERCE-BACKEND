const express = require("express");
const adminRouter = express.Router();
const middleware = require("./middlewares/authenticateToken.js");
const ProductsControllers = require("./controllers/Products.js");
const { admin } = require("./controllers/AdminControllers.js");
const {
  productValidator,
  registerValidator,
} = require("./validators/expressValidator.js");
const authToken = require("./controllers/authToken.js");

adminRouter.post("/signin", registerValidator, admin.signin);

adminRouter.get(
  "/products/all",
  middleware.authenticateToken,
  middleware.authorizeUser("user"),
  ProductsControllers.getProducts
);

adminRouter.post(
  "/products/insert",
  productValidator,
  middleware.authenticateToken,
  middleware.authorizeUser("admin"),
  ProductsControllers.insertProducts
);

adminRouter.delete(
  "/products/delete",
  middleware.authenticateToken,
  middleware.authorizeUser("user"),
  ProductsControllers.deleteProduct
);

module.exports = adminRouter;
