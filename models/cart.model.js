const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const cartSchema = mongoose.Schema({
});


const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;