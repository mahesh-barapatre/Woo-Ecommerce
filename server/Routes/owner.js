const express = require('express')
const router = express.Router()
const Product = require('../models/productSchema')
const User = require('../models/userModel')
const authMiddleware = require('../middlewares/auth')

router.get('/',(req, res) =>{  
    res.status(200) 
        .json({
            msg: "the dish router is working"
        })
}
)

router.post('/addProduct', authMiddleware, async (req, res) => {

    try {
        
        const { name, description, images, price, category } = req.body;
        const dish = new Product({
            owner: req.user._id,
            name: name,
            description: description,
            images: images,
            shop: req.user.shop,
            price: price,
            category: category,
        })
        await dish.save();
        res.status(201).json({
            msg: "product added successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
})

// router.get('/selling', authMiddleware, async (req, res) => {
//     try {
//         const products = await Product.find({
//             owner: req.user._id
//         })
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({
//             error: error
//         })
//     }
// })

router.delete('/delete/:id', async (req, res) => {
    try {
        const dishId = req.params.id;

        const product = await Product.findOneAndDelete({
            _id: dishId
        })
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
});

router.post('/getProducts', authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.user._id
        })
      const products = await Product.find({
        shop: req.user.shop,
      });
        res.status(200).json({
            products,
            user
        });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
})

module.exports = router