const express = require('express')
const router = express.Router()
const Product = require('../models/productSchema')

router.get('/',(req, res) =>{
    res.status(200)
        .json({
            msg: "the menu router is working"
        })
}
)

router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}) 

router.get("/getAll", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/getByShop/:shop', async (req, res) => {
    try {
        const products = await Product.find({
            shop: req.params.shop
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/getByName/:name', async (req, res) => {
    try {
        const products = await Product.find({
            name: req.params.name
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/getByCategory/:category', async (req, res) => {
    try {
        const products = await Product.find({
            category: req.params.category
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/getProductByMaxCost/:upper', async (req, res) => {
    try {
        const upper = parseInt(req.params.upper);

        const products = await Product.find({
            price: {
                $lte: upper
            }
        })

        res.status(200).json({
            products
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});

router.get('/getProductByAsc', async (req, res) => {
    try {
        const products = await Product.find().sort({ price: 1 });

        res.status(200).json({
            products
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.get('/getProductByDsc', async (req, res) => {
    try {
        const products = await Product.find().sort({ price: -1 });

        res.status(200).json({
            products
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router;