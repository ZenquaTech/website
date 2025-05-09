const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id:{
      type:String,
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});


const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
