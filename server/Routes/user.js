const express = require("express");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();
const User = require("../models/userModel"); 
const Product = require("../models/productSchema");
const Review = require("../models/reviewSchema");

router.post("/wishlist", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.user._id,
    }); 

    const wishlistIds = user.wishlist;

    const wishlist = await Promise.all(
      wishlistIds.map(async (id) => {
        // Use try-catch to handle potential errors for each product
        try {
          const product = await Product.findById(id);
          return product; // Add the product to the wishlist array
        } catch (error) {
          // Handle error if the product is not found
          console.error(
            `Error fetching product with ID ${id}: ${error.message}`,
          );
          return null; // or some default value indicating the product couldn't be fetched
        }
      }),
    );

    res.status(200).json({
      user,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/addToWishlist/:product_id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.user._id,
    });
    const product = await Product.findById(req.params.product_id);
    if (user.wishlist.includes(req.params.product_id)) {
      return res.status(400).json({ msg: "Product already in wishlist" });
    }
    user.wishlist.push(req.params.product_id);
    await user.save();
    res.status(200).json({
      user,
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post(
  "/removeFromWishlist/:product_id",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findOne({
        _id: req.user._id,
      });
      const product = await Product.findById(req.params.product_id);
      if (!user.wishlist.includes(req.params.product_id)) {
        return res.status(400).json({ msg: "Product not in wishlist" });
      }
      user.wishlist.pull(req.params.product_id);
      await user.save();
      res.status(200).json({
        user,
        product,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
);

router.get("/getReview/:product_id", async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.product_id });
    res.status(200).json({
      reviews,
    }); 
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/review/:product_id", authMiddleware, async (req, res) => {
  try {
    const { comment, rating, images } = req.body;
    const user = await User.findOne({
      _id: req.user._id,
    });

    const review = new Review({
      product: req.params.product_id,
      user: user.name,
      comment: comment,
      rating: rating,
      images: images,
    });

    await review.save();

    res.status(200).json({
      review,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
