const Category = require("../models/category");
const Product = require("../models/Product"); 

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        result: false,
        message: "All fields are required",
      });
    }

    // Check for duplicate category name (case-insensitive)
    const existingCategory = await Category.findOne({ name: { $regex: new RegExp("^" + name + "$", "i") } });

    if (existingCategory) {
      return res.status(409).json({
        result: false,
        message: "Category with this name already exists",
      });
    }

    const newEntry = new Category({ name });
    const savedEntry = await newEntry.save();

    res.status(201).json({
      result: true,
      message: "Submitted successfully",
      data: savedEntry,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};


exports.getCategory = async (req, res) => {
  try {
    const entries = await Category.find().sort({ createdAt: -1 });
    res.status(200).json({
      result: true,
      message: "Fetched all entries successfully",
      data: entries,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};


exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;  // Extract category ID from the URL parameters
    const { name } = req.body;  // Get the new name from the request body

    if (!name) {
      return res.status(400).json({
        result: false,
        message: "Name is required to update the category",
      });
    }

    // Check if a category with the same name already exists
    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    // If the category already exists and it's not the same category being updated
    if (existingCategory && existingCategory._id.toString() !== id) {
      return res.status(409).json({
        result: false,
        message: "Category with this name already exists",
      });
    }

    // Update the category with the new name
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },  // Update the category name
      { new: true }  // Return the updated category
    );

    if (!updatedCategory) {
      return res.status(404).json({
        result: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      result: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};


exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Check if any product is using this category
    const productUsingCategory = await Product.findOne({ category: id });

    if (productUsingCategory) {
      return res.status(400).json({
        result: false,
        message: "Cannot delete category. It is assigned to one or more products.",
      });
    }

    // Step 2: Attempt to delete the category
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({
        result: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      result: true,
      message: "Category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};