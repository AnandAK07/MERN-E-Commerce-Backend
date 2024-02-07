const userModel = require('../models/user.model');

const addAllProduct = async (req, res) => {
    res.send('done...')
}

const addProduct = async (req, res) => {
    const { userId, productId } = req.body;
    // console.log(userId, productId, "cart");
    if (!productId) {
        return res.status(400).json({ error: 'ProductId is missing from the request body' });
    }

    try {
        const user = await userModel.findById(userId);

        const cartProduct = user.cart.find(
            (item) => item.productId == productId
        )
        // console.log(cartProduct,'qu')

        if (cartProduct) {
            cartProduct.quantity += 1;
        } else {
            user.cart.push({ productId, quantity: 1 })
        }
        // console.log(cartProduct.quantity)
        await user.save();
        res.status(200).json({ message: 'Product added to cart successfully' })
    } catch (error) {
        console.log('Error adding product to cart:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}


const getAllProducts = async (req, res) => {
    const { userId } = req.body;
    console.log(userId, 'cartIdUser')
    // const userId=req.body.userId
    try {
        const user = await userModel.findById(userId).populate('cart.productId')
        console.log(user, 'get')

        if (user) {
            const cartItems = user.cart.map(item => {
                return {
                    productId: item.productId._id,
                    title: item.productId.title,
                    description: item.productId.description,
                    price: item.productId.price,
                    discountPercentage: item.productId.discountPercentage,
                    rating: item.productId.rating,
                    stock: item.productId.stock,
                    brand: item.productId.brand,
                    category: item.productId.category,
                    thumbnail: item.productId.thumbnail,
                    images: item.productId.images,
                    quantity: item.quantity
                }
            })
            console.log(cartItems)
            res.status(200).json(cartItems);
        }
    } catch (error) {
        console.log('Error fetching cart items:', error);
        res.status(500).json({ message: 'Error fetching cart items' });
    }
}

const updateQuantity = async (req, res) => {
    try {
        const { userId, productId, update } = req.body;

        const user = await userModel.findById(userId);

        const cartItem = user.cart.find(
            (item) => {
                if (item.productId == productId) {
                    return true;
                }
            }
        )

        if (cartItem) {
            if (update ==- 1) {
                if (cartItem.quantity >= 1) {
                    cartItem.quantity -= 1;
                }
            } else {
                cartItem.quantity += 1;
            }
            console.log(cartItem.quantity)
            await user.save();
            res.status(200).json({ message: 'Cart updated successfully' })
        } else {
            res.status(404).json({ error: 'Product not found in cart' })
        }
    } catch (error) {
        console.log('Error updating cart:', error)
        res.status(500).json({ error: 'An error occurred' })
    }
}

const removeProduct = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const user = await userModel.findById(userId);

        const productIndex = user.cart.findIndex(
            (item) => item.productId.toString() == productId.toString()
        )

        if (productIndex !== -1) {
            user.cart.splice(productIndex, 1);
            await user.save();
            res.status(200).json({ message: 'Product removed from cart' });
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.log('Error removing product from cart:', error);
        res.status(500).json({ error: 'An error occured' })
    }
}

module.exports = { addProduct, getAllProducts, removeProduct, updateQuantity }