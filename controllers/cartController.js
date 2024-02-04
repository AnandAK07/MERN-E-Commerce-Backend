// const express = require('express');
// const router = express.Router();
// const userModel = require('../models/cart.model');


// router.get('/', async (req, res) => {
//     const product = await userModel.find()
//     res.send(product)
// })


// router.post('/create', async (req, res) => {
//     const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body;
//     console.log({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images })

//     const product = await userModel.create({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images })

//     res.send(product)
// })

// router.patch('/edit/:id', async (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     const product = await userModel.findByIdAndUpdate({ _id: id }, req.body)
//     // res.send(product)
//     res.send(product)
// })


// router.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     const product = await userModel.findByIdAndDelete(id)
//     // res.send(product)
//     res.send(product)
// })



// module.exports = router