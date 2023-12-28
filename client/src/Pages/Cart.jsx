import React from 'react'
import Card from '../components/Card'
import { Icon } from '@iconify/react'
import BillCard from '../components/BillCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Cart() {

  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.value)
  const total = useSelector((state) => state.payment.total)
  // console.log(cartList)
  const paylable = total.toFixed(2);

  return (
    <div className="bg-gray-100 flex-col sm:flex-row flex px-4 py-10">
      <div className="flex flex-col w-full sm:w-8/12">
        <div className="border bg-white border-gray-300 m-3 flex flex-wrap">
          {cartList.map((product, index) => {
            let item = product;
            return (
              <Card
                active="cart"
                key={index}
                id={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                images={item.images}
              />
            );
          })}
        </div>
        <div className="border bg-white text-xl font-bold text-gray-400 border-gray-300 flex p-8 m-3">
          <Icon icon="mdi:address-marker-outline" width="30" />
          <span>Delivery Address</span>
        </div>
        <div className="border bg-white text-xl font-bold text-gray-400 border-gray-300 flex p-8 m-3">
          <Icon icon="ic:twotone-payment" width="30" />
          <span>Payment Method</span>
        </div>
      </div>

      <div className="flex flex-col w-11/12 sm:w-4/12">
        <div className="border w-full h-48 text-gray-700 justify-around bg-white border-gray-300 flex flex-col px-8 py-5 m-3">
          <span className="text-lg font-bold">Delivery Time</span>
          <div className="flex flex-col">
            <span className="font-semibold">Deliver Now</span>
            <span className="text-sm">
              Your order will be delivered within{" "}
              <b className="font-semibold">45 minutes</b>
            </span>
          </div>
          <span className="text-red-400 font-semibold">Schedule for later</span>
        </div>

        <div className="border w-full text-gray-700 justify-around bg-white border-gray-300 flex flex-col px-8 py-5 m-3">
          <div className="w-full border text-sm text-center border-green-400 bg-green-50 text-green-400 py-3">
            Safety Assured Meals and Contactless delivery.
          </div>

          <div className="flex flex-col my-4">
            {cartList.map((product, index) => {
              let item = product;
              return (
                <BillCard
                  key={index}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>

          <div
            onClick={() => navigate("/checkout")}
            className="w-full text-white cursor-pointer border text-xl justify-evenly item-center gradient flex px-3 py-3"
          >
            <Icon icon="tabler:discount-2" width="40" />
            <span className="p-1">Payment & Offers</span>
            <Icon icon="mingcute:right-fill" width="40" />
          </div>
          

          <div className="w-full space-x-3 item-center text-gray-500 flex m-3 px-3 py-3">
            <input className="mb-10" type="checkbox" />
            <div className="flex flex-col">
              <span className="text-gray-700">Opt for Cash On Delivery</span>
              <span className="text-sm">
                pay in cash at the time of product delivery rather than making
                an upfront payment.
              </span>
            </div>
          </div>

          <div className="border w-full"></div>

          <div className="w-full text-2xl font-bold flex justify-between m-3 text-gray-700">
            <span>Total</span>
            <span>${paylable}</span>
          </div>
        </div>

        <div className="border w-full h-40 text-gray-700 justify-around bg-white border-gray-300 flex flex-col px-8 py-5 m-3">
          <span className="text-lg font-bold">Need Help?</span>
          <div className="flex flex-col">
            <span className="text-green-400 text-2xl">080-4040-4242</span>
            <span className="text-sm">Lines open from 9:00 AM to 12:00 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Cart
