const express = require('express');
const categoryController = require('../controllers/categoryController')

const router = express.Router();

router.post('/add_category', categoryController.createCategory)
router.get('/getCategory', categoryController.getCategory)
router.delete("/deleteCategory/:id", categoryController.deleteCategory);
router.put('/update_category/:id', categoryController.updateCategory);

module.exports = router