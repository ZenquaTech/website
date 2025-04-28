const express = require('express');
const feedBackEnquiryController = require('../controllers/enquiryFeedbackController')

const router = express.Router();


router.post('/api/feedback/submit', feedBackEnquiryController.createEnquiryFeedback)
router.get('/getfeedbackenquiry', feedBackEnquiryController.getEnquiryFeedbacks)