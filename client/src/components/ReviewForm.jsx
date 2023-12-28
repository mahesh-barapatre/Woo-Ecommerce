import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import serverUrl from "../config";

function ReviewForm({id}) {
  const [imagesList, setImagesList] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const addImgIp = (e) => {
    e.preventDefault();
    setImagesList([...imagesList, imgUrl]);
    setImgUrl("");
  };

  const submitReview = async () => {
    try {
      
      const response = await axios.post(
        `${serverUrl}/user/review/${id}`,
        { comment, rating, imagesList },
        {
          withCredentials: true,
        },
      );
      console.log(response)
    } catch (error) {
      console.log(error.message);
      toast.error("Login or register first!", {
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

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
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
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>

      {/* <!-- Review Form --> */}

      {/* <!-- Comment Input --> */}
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-600"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          rows="4"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* <!-- Rating Input --> */}
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-600"
        >
          Rating
        </label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          name="rating"
          min="1"
          max="5"
          className="mt-1 p-2 w-16 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-600"
        >
          Image
        </label>
        {imagesList.map((img, index) => (
          <input
            key={index}
            type="text"
            name="images"
            value={img}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        ))}

        <input
          type="text"
          name="images"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={addImgIp}
          className="bg-blue-500 text-white p-1 mt-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          <Icon icon="mingcute:add-fill" width="20" />
        </button>
      </div>

      {/* <!-- Submit Button --> */}
      <button
        onClick={submitReview}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit Review
      </button>
    </div>
  );
}

export default ReviewForm;
