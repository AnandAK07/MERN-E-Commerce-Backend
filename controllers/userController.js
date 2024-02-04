const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const signup=async(req,res)=>{
    const { name, email, password } = req.body
    console.log({ name, email, password })
    if (!name||!email||!password){
        return res.status(400).send('Missing required information');
    }
    bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
            console.log("Error during password hashing",err)
            return res.status(500).send('Error during password hashing')
        }
        try {
            const user = new userModel({ name, email, password: hash })
            console.log(user)
            user.save();
            return res.status(201).send("Signup successfull")
        } catch (error) {
            console.log(error)
            return res.status(500).send("Internal server error")
        }
    });
}

const login=async(req,res)=>{

        const { email, password } = req.body
        console.log({ email, password })
        const user = await userModel.findOne({ email: email });
        console.log(user)
        // const userId = user._id.toString()
        // console.log(userId)
        // const hash = user.password
        // console.log(hash)

        // bcrypt.compare(password, hash, function (err, result) {
        //     if (err) {
        //         console.log('Error during comparion:', err)
        //         return res.status(500).send({ message: 'An error occured while verifying the password.' })
        //     }
        //     if (result) {
        //         const token = jwt.sign({ userId: userId }, process.env.SECRETE_KEY);
        //         console.log('Token generated:', token)
        //         return res.status(200).send({ token: token })
        //     } else {
        //         return res.status(401).send({ message: 'Authentication failed. Invalid password.' })
        //     }
        // });
        res.send('login')
}

module.exports = { signup, login }