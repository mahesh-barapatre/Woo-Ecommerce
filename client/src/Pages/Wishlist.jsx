import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Unauth from '../components/Unauth'
import { useNavigate } from 'react-router-dom'
import serverUrl from "../config.js"
import Card from '../components/Card.jsx'

function Wishlist() {
  const navigate = useNavigate();

  const role = useSelector((state)=>state.role.role)

  const [products, setProducts] = useState([])
  const [update, setUpdate] = useState(false)
  

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.post(
          `${serverUrl}/user/wishlist`,
          {},
          {
            withCredentials: true,
          },
        );
        setProducts(response.data.wishlist);
        // console.log(response.data.wishlist);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return ()=>getList();
  
  },
    [update]
  )

    return (
      <div className="bg-gray-100 flex flex-col sm:flex-row px-4 py-10">
        <div className="flex flex-col w-full sm:w-8/12 mt-2">
          {role === "" ? (
            <div className="bg-white border my-3 p-8">
              <Unauth />
            </div>
          ) : (
            <div className="border bg-white border-gray-300 m-3 flex flex-wrap">
                {products.map((product, index) => (
                product && 
                <Card
                  active={"wishlist"}
                  key={index}
                  id={product._id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  images={product.images}
                  setUpdate={setUpdate}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col w-full sm:w-4/12">
          <div className="border w-full h-48 text-gray-700 justify-around bg-white border-gray-300 flex flex-col px-8 py-5 sm:m-3">
            <div className="flex">
              <span className="text-3xl font-bold">My WishList</span>
              <Icon
                className="text-purple-500"
                icon="solar:heart-bold"
                width="35"
              />
              <Icon
                className="text-purple-500"
                icon="solar:heart-bold-duotone"
                width="35"
              />
            </div>
            <span className="text-sm text-gray-400">
              Make a list, check it twice. Your wishlist, your personalized
              paradise.
            </span>
            <span className="text-purple-400 font-semibold">
              Schedule for later
            </span>
          </div>

          <div className="border w-full text-gray-700 justify-around bg-white border-gray-300 flex flex-col px-8 py-5 my-3 sm:m-3">
            <div className="w-full border text-sm text-center border-green-400 bg-green-50 text-green-400 py-3">
              Safety Assured Meals and Contactless delivery.
            </div>
            <span className="text-red-400 font-semibold">COD available</span>

            <div
              onClick={() => navigate("/offer")}
              className="w-full cursor-pointer mt-3 border text-xl justify-evenly item-center text-gray-500 flex px-3 py-3"
            >
              <Icon icon="tabler:discount-2" width="40" />
              <span className="p-1">Check available Coupons</span>
              <Icon icon="mingcute:right-fill" width="40" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Wishlist
