const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const paymentRoutes = require("./routes/paymentRoutes");
const userRoutes = require("./routes/userRoutes");
const protect = require("./middleware/authMiddleware");


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/api/profile", protect, (req, res) => {
    res.json({
        message: "Welcome! This is a protected route.",
        user: req.user
    });
});

app.get("/", (req, res) => {
    res.send("Cloud9 Ecommerce API Running");
});

app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});