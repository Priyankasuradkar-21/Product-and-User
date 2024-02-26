const express = require('express');
const { createProduct, getSpecificProduct, getAllProduct, updateProduct, sortingProduct } = require('../controller/productController');
const userValidation = require('../middleware/userValidation');
const router = express.Router();


router.post('/product/create', userValidation, createProduct)
router.get('/product/get/:id', userValidation,getSpecificProduct);
router.get('/product/getAll/?', userValidation,getAllProduct);
router.patch('/product/update', userValidation,updateProduct);
router.get('/product/sort/?', userValidation, sortingProduct);
module.exports = router;