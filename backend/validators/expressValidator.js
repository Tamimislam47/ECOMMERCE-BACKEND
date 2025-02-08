// validators/expressValidator.js
const { body } = require("express-validator");

const productValidator = [
  body("price").isFloat({ min: 0 }).withMessage("Price must be a valid number"),
  body("images").optional().isArray().withMessage("Images must be an array"),
  body("description").notEmpty().withMessage("Description cannot be empty"),
  body("quantity")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a positive integer"),
  body("size").optional().isString().withMessage("Size must be a string"),
  body("sku")
    .isLength({ min: 1 })
    .withMessage("SKU cannot be empty")
    .notEmpty()
    .withMessage("SKU cannot be empty"),
  body("vendor").optional().isString(),
  body("subCategories").optional().isString(),
  body("categories").optional().isString(),
  body("onSale").isBoolean().withMessage("onSale must be a boolean value"),
];

const registerValidator = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please provide a valid email."),
  body("password")
    .notEmpty()
    .isInt()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
];

module.exports = {
  productValidator,
  registerValidator,
};
