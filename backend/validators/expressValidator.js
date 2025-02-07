// validators/expressValidator.js
const { body } = require("express-validator");


const productValidator = [
  body("price").isFloat({ min: 0 }).withMessage("Price must be a valid number"),
  body("images").isArray().withMessage("Images must be an array"),
  body("description").notEmpty().withMessage("Description cannot be empty"),
  body("quantity")
    .isInt({ min: 0 })
    .withMessage("Quantity must be a positive integer"),
  body("size").optional().isString().withMessage("Size must be a string"),
  body("sku")
    .isLength({ min: 1 })
    .withMessage("SKU cannot be empty")
    .notEmpty()
    .withMessage("SKU cannot be empty"), // This ensures it is not just whitespace
  body("vendor").optional().isString(),
  body("categories").optional().isString(),
  body("subCategories").optional().isString(),
  body("onSale").isBoolean().withMessage("onSale must be a boolean value"),
];



module.exports = {
  productValidator,
};
