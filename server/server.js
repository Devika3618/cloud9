const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// use routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});