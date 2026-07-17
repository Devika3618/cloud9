const express = require("express");
const router = express.Router();

let orders = [];

// Place order
router.post("/", (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ message: "Order placed", order });
});

// Get orders
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;