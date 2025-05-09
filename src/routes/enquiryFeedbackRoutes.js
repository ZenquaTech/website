const express = require('express');
const feedBackEnquiryController = require('../controllers/enquiryFeedbackController')

const router = express.Router();

router.post('/submit', feedBackEnquiryController.createEnquiryFeedback)
router.get('/getfeedbackenquiry', feedBackEnquiryController.getEnquiryFeedbacks)
router.delete('/deletefeedbackenquiry/:id', feedBackEnquiryController.deleteEnquiryFeedback)

module.exports = router