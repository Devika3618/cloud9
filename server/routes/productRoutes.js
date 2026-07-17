const express = require("express");
const router = express.Router();

// Sample products (temporary)
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;