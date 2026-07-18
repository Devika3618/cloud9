const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Success", "Failed"],
        default: "Pending"
    },
    paymentMethod: {
        type: String,
        default: "Razorpay"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);