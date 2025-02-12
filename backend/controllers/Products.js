const { db } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

//TODO: update feature up coming

const ProductsControllers = {
  getProducts: async (req, res) => {
    const query = "SELECT * FROM Products";

    try {
      // Using promise-based query for PostgreSQL
      const result = await db.query(query);

      res.status(200).json({
        status: "success",
        data: result.rows, // PostgreSQL returns rows in 'rows' field
      });
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  insertProducts: async (req, res) => {
    try {
      const productId = uuidv4(); // Generate UUID
      const imagesJson = JSON.stringify(req.body.images); // Assuming images are in req.body.images

      const sql = `
      INSERT INTO Products (productId, price, images, description, quantity, size, sku, vendor, categories, subCategories, onSale)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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

      // Using async/await with PostgreSQL
      const result = await db.query(sql, values);

      res.status(201).json({
        message: "Product added successfully!",
        productId: productId,
      });
    } catch (error) {
      console.error("Unexpected Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteProduct: async (req, res) => {
    const { productId } = req.body;

    const sql = "DELETE FROM Products WHERE productId = $1"; // Use $1 for parameterized queries
    try {
      const result = await db.query(sql, [productId]); // Pass the productId as an array
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully!" });
    } catch (err) {
      console.error("Database Delete Error:", err);
      return res
        .status(500)
        .json({ error: "Database error", details: err.message });
    }
  },

  //! UPDATE PRODUCT FUTERE FEATURE . THIS FUNCION EXPECT USER SELECTED UPDATEFIELDS FROM FRONTEND
  // updateProduct: async (req, res) => {
  //   const { productId } = req.body;

  //   const sql = "UPDATE Products SET ? WHERE productId = ?";
  //   db.query(sql, productId, (err, result) => {
  //     if (err) {
  //       console.error("Database Delete Error:", err);
  //       return res
  //         .status(500)
  //         .json({ error: "Database error", details: err.message });
  //     }
  //     res.status(200).json({ message: "Product deleted successfully!" });
  //   });
  // },
};

module.exports = ProductsControllers;
