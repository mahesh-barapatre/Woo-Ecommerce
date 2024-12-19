import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const CustomItemReq = () => {
  const role = useSelector((state) => state.role.role);

  const [customDetails, setCustomDetails] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(""); // New state for selected image
  const [loading, setLoading] = useState(false);

  const generateImages = async (details) => {
    const options = {
      method: "POST",
      url: "https://ai-image-generator3.p.rapidapi.com/generate",
      headers: {
        "x-rapidapi-host": "ai-image-generator3.p.rapidapi.com",
        "x-rapidapi-key": "49c5c59364msh27b6f5b07be31bcp1f3b50jsn5f2fab9056b8",
        "Content-Type": "application/json",
      },
      data: { prompt: details, page: 1 },
    };

    try {
      const response = await axios.request(options);
      return response.data.results.images || [];
    } catch (error) {
      console.error("API Error:", error);
      throw new Error("Failed to fetch images");
    }
  };

  const handleGenerateImages = async () => {
    if (!customDetails.trim()) {
      alert("Please provide customization details.");
      return;
    }

    setLoading(true);
    setGeneratedImages([]);
    setCurrentImage(""); // Reset current image when regenerating

    try {
      const images = await generateImages(customDetails);
      setGeneratedImages(images);
    } catch (error) {
      alert("Failed to generate images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setCurrentImage(image); // Update the state with the selected image
    // alert(`Selected Image: ${image}`);
  };

  const placeOrder = () => {
    // Add your order processing logic here
    if (role == "") {
      toast.error("Register or Login First!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Custom Order Placed!", {
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
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center m-9">
        Custom Product Generator
      </h1>

      {/* Customization Input */}
      <div className="space-y-4">
        <label
          htmlFor="customDetails"
          className="block font-medium text-gray-700"
        >
          Enter Customization Details
        </label>
        <textarea
          id="customDetails"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          rows="3"
          placeholder="Describe your custom product here..."
          value={customDetails}
          onChange={(e) => setCustomDetails(e.target.value)}
        ></textarea>
        <button
          onClick={handleGenerateImages}
          className={`w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Generating Images..." : "Generate Product Images"}
        </button>
      </div>

      {/* Image Carousel */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Preview Your Custom Product
        </h2>
        {loading && (
          <p className="text-gray-500">Loading images, please wait...</p>
        )}

        {/* Swiper Carousel */}
        {generatedImages.length > 0 && (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
          >
            {generatedImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Custom Product ${index + 1}`}
                  className="w-full h-auto border border-gray-300 rounded-md cursor-pointer object-cover"
                  onClick={() => handleImageClick(image)} // Update current image
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Current Selected Image */}
      {currentImage && (
        <div className="p-4 border border-gray-200 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800">
            Selected Image
          </h3>
          <img
            src={currentImage}
            alt="Selected Custom Product"
            className="w-full h-auto max-h-64 border border-gray-300 rounded-md object-contain"
          />
        </div>
      )}

      {/* Place Order Button */}
      <div>
        <button
          onClick={placeOrder}
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          disabled={!currentImage} // Disable button if no image is selected
        >
          Place Order
        </button>
      </div>
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
    </div>
  );
};

export default CustomItemReq;
