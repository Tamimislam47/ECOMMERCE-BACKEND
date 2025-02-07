const { db } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

//TODO: update feature up coming

const ProductsController = {
  getProducts: async (req, res) => {
    const query = "Select * from Products";
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json({
        status: "success",
        data: result,
      });
    });
  },
  
  insertProducts: async (req, res) => {
    try {
      const productId = uuidv4(); // Generate UUID
      const imagesJson = JSON.stringify(req.body.images); // Assuming images are in req.body.images

      const sql = `
        INSERT INTO Products (productId, price, images, description, quantity, size, sku, vendor, categories, subCategories, onSale)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        productId,
        req.body.price,
        imagesJson,
        req.body.description,
        req.body.quantity,
        req.body.size,
        req.body.sku,
        req.body.vendor,
        req.body.categories,
        req.body.subCategories,
        req.body.onSale,
      ];

      db.query(sql, values, (err, result) => {
        if (err) {
          console.error("Database Insert Error:", err);
          return res
            .status(500)
            .json({ error: "Database error", details: err.message });
        }

        res.status(201).json({
          message: "Product added successfully!",
          productId: productId,
        });
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteProduct: async (req, res) => {
    const { productId } = req.body;

    const sql = "DELETE FROM Products WHERE productId = ?";
    db.query(sql, productId, (err, result) => {
      if (err) {
        console.error("Database Delete Error:", err);
        return res
          .status(500)
          .json({ error: "Database error", details: err.message });
      }
      res.status(200).json({ message: "Product deleted successfully!" });
    });
  },
};

module.exports = ProductsController;
