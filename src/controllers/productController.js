const multer = require("multer");
const path = require("path");
const Product = require("../models/Product");
const fs = require("fs")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png/;
    const extname = fileType.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileType.test(file.mimetype);

    console.log(
      "File extension:",
      path.extname(file.originalname).toLowerCase()
    );
    console.log("MIME type:", file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
}).single("image");

exports.addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }
    try {
      const { title, description, category, industry } = req.body;
      const newProduct = new Product({
        title: title,
        description: description,
        image: req.file.path,
        category : category,
        industry : industry
      });

      const data = await newProduct.save();
      res.status(200).json({
        result: "true",
        message: "product added successfully",
        data: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    }
  });
};

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find({ isDeleted: false })
    res.status(200).json({
      result: "true",
      message: "fatching product successfully",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {

    if (!req.body.product_id) {
      return res.status(400).json({
        result: false,
        message: "product_id is required",
      });
    }

    const product = await Product.findOne({ _id : req.body.product_id });
    if (!product) {
      return res.status(400).json({
        result: false,
        message: "Product not Found",
      });
    }

      res.status(200).json({
        result: true,
        message: "fatching product successfully",
        product: product,
      })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.updateProductById = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }

    try {
      const { title, description, product_id,category, industry } = req.body;

      if (!product_id) {
        return res.status(400).json({
          result: false,
          message: "product_id is required",
        });
      }

      const updateData = {
        title: title,
        description: description,
        category : category,
        industry : industry
      };

      if (req.file) {
        updateData.image = req.file.path;
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        product_id,
        updateData,
        { new: true } // Return the updated document
      );

      if (!updatedProduct) {
        return res.status(404).json({
          result: false,
          message: "Product not found",
        });
      }

      res.status(200).json({
        result: true,
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    }
  });
};

exports.deleteProductById = async (req, res) => {
  try {
    const { product_id } = req.body;

    if (!product_id) {
      return res.status(400).json({
        result: false,
        message: "product_id is required",
      });
    }

    const product = await Product.findByIdAndDelete(product_id);

    if (!product) {
      return res.status(404).json({
        result: false,
        message: "Product not found",
      });
    }

    if (product.image) {
      fs.unlink(product.image, (err) => {
        if (err) {
          console.error("Error deleting image:", err);
        } else {
          console.log("Image deleted successfully");
        }
      });
    }

    res.status(200).json({
      result: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.softDeleteById = async (req, res) => {
  try {
    const { product_id } = req.body;

    if (!product_id) {
      return res.status(400).json({
        result: false,
        message: "product_id is required",
      });
    }

    const product = await Product.findByIdAndUpdate(
      product_id,
      { isDeleted: true },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        result: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      result: true,
      message: "Product soft deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
}
