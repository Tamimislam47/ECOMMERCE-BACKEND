const { Pool } = require("pg");

// Create a new pool instance for connecting to PostgreSQL
const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, // Make sure to set the port, typically 5432 for PostgreSQL
});

// Check if the connection is working
db.connect((err, client, release) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err.stack);
    return;
  }
  console.log("Connected to PostgreSQL...");
  release();
});

// Function to find a user by email
const findByEmail = async (email) => {
  const query = "SELECT * FROM UserDetails WHERE email = $1"; // Use $1 for parameterized queries
  try {
    const res = await db.query(query, [email]);
    return res.rows[0]; // Return the first resultcd
  } catch (error) {
    throw new Error("User not found");
  }
};

// Function to update the password by email
const updatePasswordByEmail = async (hashedPassword, email) => {
  const query = "UPDATE UserDetails SET password = $1 WHERE email = $2";
  try {
    const result = await db.query(query, [hashedPassword, email]);
    return result;
  } catch (error) {
    throw new Error("Something went wrong while updating the password");
  }
};

module.exports = { db, findByEmail, updatePasswordByEmail };
