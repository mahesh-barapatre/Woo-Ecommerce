const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "dish name is required!"],
        // unique: [true, "dish name must be unique!"]
    },
    description: {
        type: String,
        required: [true, "email is required!"],
    },
    images: [
        {
            type: String,
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    price: {
        type: Number,
        required: [true, "price is required!"],
        min:1
    },
    category: {
        type: String,
        required: [true, "category is required!"]
    },
    shop: {
        type: String,
        required: [true, "shop is required!"]
    }
        
    
});

const Product = mongoose.model('Product', productSchema)
module.exports = Product;