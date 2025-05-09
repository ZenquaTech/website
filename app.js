require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/utils/dbConnection");
const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require('./src/routes/userRoutes')
const feedbackRoutes=require('./src/routes/enquiryFeedbackRoutes')
const categoryRoutes=require('./src/routes/categoryRoute')
const path = require("path");

const PORT = process.env.PORT || 8040;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

app.use("/api/product", productRoutes);
app.use('/user', userRoutes)
app.use('/api/feedback',feedbackRoutes)
app.use('/api/category',categoryRoutes)
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
