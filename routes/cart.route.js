const express = require('express');
const cart =express.Router();
const { addProduct, getAllProducts, removeProduct, updateQuantity }=require('../controllers/cartController')

cart.get('/',getAllProducts)
cart.post('/add',addProduct)
cart.patch('/update',updateQuantity)
cart.delete('/remove',removeProduct)

module.exports=cart;