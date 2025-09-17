
const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.post('/add_product', productController.addProduct)
router.get('/get_products', productController.getProduct)
router.post('/get_product_by_id', productController.getProductById)
router.put('/update_product' , productController.updateProductById)
router.post('/delete_product', productController.deleteProductById)
router.post('/soft_delete_product', productController.softDeleteById)

// Admin route to get all products (no isDeleted filter)
router.get('/get_all_products', productController.getAllProductsForAdmin);


module.exports = router;


