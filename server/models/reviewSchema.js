const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "product is required!"]
    },
    user: {
        type: String,
        required: [true, "user is required!"]
    },
    comment: {
        type: String,
        required: [true, "review is required!"]
    },
    rating: {
        type: Number,
        required: [true, "rating is required!"],
        min: 1,
        max: 5
    },
    images: [
        {
            type: String,
        }
    ]
});

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review