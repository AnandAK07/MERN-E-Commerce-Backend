const express = require('express');
const product=express.Router();
const { getAllProducts, addSingleProduct, updateProduct } = require('../controllers/productController');


product.get('/', getAllProducts)
product.post('/create', addSingleProduct)
product.post('/edit/:id',updateProduct)

module.exports=product