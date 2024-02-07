const express = require('express');
const user = express.Router();
const { signup, login, addAllProduct } = require('../controllers/userController');


user.get('/',(req,res)=>{
    res.send('Users...')
})

user.post('/add', addAllProduct)
user.post('/signup',signup);
user.post('/login',login);

module.exports=user;