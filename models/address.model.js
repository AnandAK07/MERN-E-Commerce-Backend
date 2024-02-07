const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const addressSchema=mongoose.Schema({
    Country:{type:String}
})