
const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();

router.post('/add_product', productController.addProduct)
router.get('/get_products', productController.getProduct)
router.post('/get_product_by_id', productController.getProductById)
router.put('/update_product' , productController.updateProductById)
router.post('/delete_product', productController.deleteProductById)
router.post('/soft_delete_product', productController.softDeleteById)


module.exports = router;


