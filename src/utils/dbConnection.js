// db.js
const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = process.env.MONGO_URI; // Your MongoDB connection string

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;