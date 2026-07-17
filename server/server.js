const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const protect = require("./middleware/authMiddleware");

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

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});