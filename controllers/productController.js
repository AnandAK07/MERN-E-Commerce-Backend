const productModel = require('../models/product.model');


const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find()
        res.status(200).json(product)
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const addSingleProduct = async (req, res) => {
    const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body;
    if (!title || !description || !price || !discountPercentage || !rating || !stock || !brand || !category || !thumbnail || !images) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        const product = await productModel.create({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images })
        res.status(201).json(product)
    } catch (error) {
        console.log('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const product = await productModel.findByIdAndUpdate({ _id: id }, req.body)
    res.send(product)
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findByIdAndDelete(id)
        res.status(200).json(product)
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// router.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     try {
//         const product = await Product.findByIdAndDelete(id)
//         // res.send(product)
//         res.status(200).json(product)
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })



module.exports = { getAllProducts, addSingleProduct, updateProduct, deleteProduct }