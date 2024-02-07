const { getAddress, addAddress, editAddress, deleteAddress } = require('../controllers/addressController');
const express=require('express')
const address=express.Router();


address.get('/', getAddress);
address.post('/create', addAddress);
address.patch('/edit/:id', editAddress);
address.delete('/delete/:id',deleteAddress);

module.exports = address