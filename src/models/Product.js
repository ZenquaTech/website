const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    priceType: {
        type: String,
        enum: ["free", "paid"],
        default: "free",
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;