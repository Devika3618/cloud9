const express = require("express");
const router = express.Router();

console.log("Auth routes loaded"); 

let users = [];

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const user = { id: Date.now(), name, email, password };
  users.push(user);

  res.json({ message: "User registered", user });
});

// Login
router.post("/login", (req, res) => {
    console.log("BODY RECEIVED:", req.body);
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
  
});

module.exports = router;