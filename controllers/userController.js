const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
const productModel=require('../models/product.model')



const addAllProduct = async (req, res) => {
    try {
        
    
    const data = [
        {
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            "image1": "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/1/4.jpg"

        },
        {

            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",

            "image1": "https://cdn.dummyjson.com/product-images/2/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/2/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/2/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",

        },
        {

            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
            "image1": "https://cdn.dummyjson.com/product-images/3/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/3/1.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/3/1.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/3/1.jpg"
        },
        {
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
            "image1": "https://cdn.dummyjson.com/product-images/4/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/4/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/4/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/4/4.jpg"
        },
        {
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
            "image1":"https://cdn.dummyjson.com/product-images/5/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/5/1.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/5/2.jpg"
        },
        {

            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
            "image1": "https://cdn.dummyjson.com/product-images/6/1.png",
            "image2": "https://cdn.dummyjson.com/product-images/6/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/6/3.png",
            "image4": "https://cdn.dummyjson.com/product-images/6/4.jpg"
        },
        {
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
            "image1": "https://cdn.dummyjson.com/product-images/7/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/7/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/7/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"

        },
        {

            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
            "image1":"https://cdn.dummyjson.com/product-images/8/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/8/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/8/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/8/4.jpg",
        },
        {

            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
            "image1": "https://cdn.dummyjson.com/product-images/9/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/9/2.png",
            "image3": "https://cdn.dummyjson.com/product-images/9/3.png",
            "image4": "https://cdn.dummyjson.com/product-images/9/4.jpg"
        },
        {
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 89,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
            "image1": "https://cdn.dummyjson.com/product-images/10/1.jpg",
            "image2": "https://cdn.dummyjson.com/product-images/10/2.jpg",
            "image3": "https://cdn.dummyjson.com/product-images/10/3.jpg",
            "image4": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
        }
    ]

    data.map((currentProduct) => {
        const product = new productModel(currentProduct);
        product.save();
    })
    return res.send('donnn')
    } catch (error) {

        return res.send('done...')
    }
    res.send('nanana')
}

const signup = async (req, res) => {
    const { name, email, password } = req.body
    console.log({ name, email, password })
    if (!name || !email || !password) {
        return res.status(400).send('Missing required information');
    }
    bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
            console.log("Error during password hashing", err)
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

const login = async (req, res) => {

    try {
        const { email, password } = req.body
        // console.log({ email, password })
        const user = await userModel.findOne({ email: email });
        // const user=users[0]
        // console.log(user)
        const userId = user._id.toString()
        // console.log(userId)
        const hash = user.password
        // console.log(hash)

        bcrypt.compare(password, hash, function (err, result) {
            if (err) {
                console.log('Error during comparion:', err)
                return res.status(500).send({ message: 'An error occured while verifying the password.' })
            }
            if (result) {
                const token = jwt.sign({ userId: userId }, process.env.SECRETE_KEY);
                console.log('Token generated:', token)
                return res.status(200).send({ token: token })
            } else {
                return res.status(401).send({ message: 'Authentication failed. Invalid password.' })
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).send({ message: 'Internal server error.' });
    }
    // res.send('login')
}

module.exports = { signup, login, addAllProduct }