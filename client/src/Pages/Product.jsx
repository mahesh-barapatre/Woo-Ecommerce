import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ReviewForm from "../components/ReviewForm";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { totalAdded, add } from "../store/cartSlice";
import serverUrl from "../config";

function Product() {

  const dispatch = useDispatch();

  
  const params = useParams();
  const addToCart = () => {
    // console.log(id)
    dispatch(
      add({
        id: params.id,
        name: details.name,
        category: details.category,
        price: details.price,
        images: details.images,
      }),
    );

    dispatch(totalAdded());

    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [details, setDetails] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [reviewImages, setReviewImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  // console.log(details.images.length)

  useEffect(() => {
    const getDetils = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/product/product/${params.id}`,
          {
            withCredentials: true,
          },
        );
        // console.log("product data is",response.data)
        setProductImages(response.data.images);
        // console.log(typeof response.data.images)
        // console.log(typeof response.data.images.length)
        // console.log(response.data.images.length)
        setDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetils();
  }, []);

  useEffect(() => {
    const getReview = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/user/getReview/${params.id}`,
          {
            withCredentials: true,
          },
        );
        console.log(response.data);
        console.log(response.data.reviews);
        // console.log(response.data.reviews.images)
        // setReviewImages(response.data.reviews.images)
        setReviews(response.data.reviews);

        response.data.reviews.forEach((review) => {
          setOverallRating(
            (overallRating + review.rating + 0) / response.data.reviews.length,
          );
        });
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, []);

  const img = [
    "https://img.freepik.com/free-vector/couple-winning-prize-man-woman-holding-gift-box-flat-vector-illustration-lottery-present-birthday-party_74855-8307.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/give-away-contest-banner-social-media-post-template_368797-832.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/you-win-game-banner-level-complete-badge-screen-casino-jackpot-with-golden-stars-crown-trumpets_88138-1474.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/creative-giveaway-winner-announcement-social-media-post-instagram-template-premium-psd_148733-137.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/man-paying-online-receiving-cashback-wallet_88138-692.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
  ];

  return (
    <div className="flex flex-col sm:flex-row p-3 py-10 min-h-full bg-slate-100">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full sm:w-2/5 shadow-lg mt-5 h-fit">
        <Carousel images={productImages} />
      </div>
      <div className="w-full sm:w-2/5 flex flex-col items-center">
        <div className="max-w-md w-full bg-white mt-5 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{details.name}</h2>

          {/* <!-- Product Information --> */}
          <div className="mb-4">
            <p className="text-gray-600 text-sm">
              Category:{" "}
              <span className="text-blue-500">{details.category}</span>
            </p>
            <p className="text-gray-600 text-sm">
              Shop: <span className="text-blue-500">{details.shop}</span>
            </p>
          </div>

          {/* <!-- Product Description --> */}
          <p className="text-gray-700 mb-4">{details.description}</p>

          {/* <!-- Product Price --> */}
          <p className="text-2xl text-blue-500 font-bold mb-4">
            ${details.price}
          </p>

          {/* <!-- Buy Now Button --> */}
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Add to cart
          </button>
        </div>

        {/* review-section */}
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mt-5">
          {/* <!-- Overall Rating --> */}
          <div class="mb-4">
            <h2 class="text-2xl font-bold mb-2">Overall Rating</h2>
            <div className="flex text-yellow-300">
              <Icon icon="ion:star-sharp" width="36" />
              <p class="text-3xl font-bold">{overallRating}</p>
            </div>
          </div>

          {/* <!-- Individual Reviews --> */}
          <div>
            <h2 class="text-2xl font-bold mb-4">Customer Reviews</h2>

            {/* <!-- Single Review (Repeat this block for each review) --> */}

            {reviews.length > 0 &&
              reviews.map((review, index) => {
                // setReviewImages(review.images);
                return (
                  <div key={index} class="mb-4">
                    <div class="flex items-center mb-2">
                      <p class="text-gray-600 text-sm">
                        Rating:{" "}
                        <span class="text-blue-500">{review.rating}</span>
                      </p>
                      <p class="ml-4 text-gray-600 text-sm">
                        By: <span class="text-blue-500">{review.user}</span>
                      </p>
                    </div>
                    <p class="text-gray-700">{review.comment}</p>
                    <Carousel images={review.images} />
                  </div>
                );
              })}

            {/* <!-- Repeat the above block for additional reviews --> */}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/5 mt-5">
        <ReviewForm id={details._id} />
      </div>
    </div>
  );
}

export default Product;
