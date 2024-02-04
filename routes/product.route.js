const express = require('express');
const product=express.Router();
const { getAllProducts, addSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');


product.get('/', getAllProducts)
product.post('/create', addSingleProduct)
product.patch('/edit/:id',updateProduct)
product.delete('/delete/:id', deleteProduct)

module.exports=product