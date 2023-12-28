import { Icon } from '@iconify/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { add, totalAdded, remove } from '../store/cartSlice.js'
import { addInTotal } from '../store/paymentSlice.js'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import serverUrl from '../config.js';

const Card = ({ active = "home", id, name, category, price, images, setUpdate }) => {

  const addToWishlist = async () => {
    try {
      const response = await axios.post(`${serverUrl}/user/addToWishlist/${id}`,
        {},
        { withCredentials: true }
      );
      // console.log(response);
      toast.success("Added to Wishlist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("already in wishlist or Not Login!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const removeFromWishlist = async () => {
    try {
      toast.success("Removed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const response = await axios.post(`${serverUrl}/user/removeFromWishlist/${id}`,
        {},
        { withCredentials: true }
      );
      setUpdate(prev=>!prev)
      // console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Error occured!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
    

  

  const dispatch = useDispatch();

  const addToCart = () => {
    // console.log(id)

    dispatch(addInTotal(
      price
    ));

    dispatch(
      add(
       {
        id: id,
        name: name,
        category: category,
        price: price,
        images: images
        }
      )
    )

    dispatch(
      totalAdded()
    );

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

  }

  return (
    <>
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
      <div className="w-60 bg-white overflow-hidden shadow-md sm:m-3 mx-auto my-3">
        <Icon
          icon="majesticons:box"
          className="inline text-purple-500"
          width="15"
        />
        <span className="text-purple-500 font-semibold">{category}</span>
        <Link to={`/product/${id}`}>
          <div className="p-4 h-36 bg-blue-100 rounded">
            <img
              className="w-full h-full object-cover"
              src={images[0]} // Replace with your product image URL
              alt="Product Image"
            />
          </div>
        </Link>
        <div className="p-4">
          <div className="flex items-baseline">
            <span className="bg-purple-200 text-purple-500 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="text-gray-600 text-xs uppercase ml-2">In Stock</div>
          </div>
          <h2 className="mt-1 text-lg text-gray-800">{name}</h2>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-purple-500 font-semibold">${price}</span>
            {active === "cart" ? (
              <button
                onClick={() => dispatch(remove(id))}
                className="gradient px-3 py-1 text-white"
              >
                <Icon icon="ic:twotone-delete" width="30" />
              </button>
            ) : (
              <button
                className="gradient px-4 py-2 text-white rounded-full"
                onClick={addToCart}
              >
                ADD
              </button>
            )}
          </div>

          <button
            className=" text-gray-900 px-2 py-1 font-semibold text-sm rounded-full border-2 border-purple-500"
            onClick={active === 'wishlist' ? removeFromWishlist : addToWishlist }
          >
            <Icon
              icon="ion:star-sharp"
              className="text-purple-500 inline-block pr-1"
              width="20"
            />
            {active === "wishlist" ? "Remove" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
