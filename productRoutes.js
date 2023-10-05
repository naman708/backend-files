// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
router.get('/products', productController.getProducts);

module.exports = router;