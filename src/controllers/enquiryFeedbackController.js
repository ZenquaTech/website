const EnquiryFeedback = require("../models/EnquiryFeedback");

exports.createEnquiryFeedback = async (req, res) => {
  try {
    const { fullName, email, type, message } = req.body;

    if (!fullName || !email || !type || !message) {
      return res.status(400).json({
        result: false,
        message: "All fields are required",
      });
    }

    const newEntry = new EnquiryFeedback({ fullName, email, type, message });
    const savedEntry = await newEntry.save();

    res.status(201).json({
      result: true,
      message: `${type} submitted successfully`,
      data: savedEntry,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};


exports.getEnquiryFeedbacks = async (req, res) => {
  try {
    const entries = await EnquiryFeedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      result: true,
      message: "Fetched all entries successfully",
      data: entries,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};

