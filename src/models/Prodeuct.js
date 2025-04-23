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
    isDeleted: { 
        type: Boolean, 
        default: false 
    }
}, {
    timestamps: true 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;