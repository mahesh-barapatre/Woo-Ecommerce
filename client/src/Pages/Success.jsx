import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Icon } from '@iconify/react';

function Success() {
  const navigate = useNavigate();

  const { Urlname, email, Urladdress, Urlmethod, orderNum } = useParams();
  const method = decodeURIComponent(Urlmethod);
  // console.log(method)
  const address = decodeURIComponent(Urladdress);
  const name = decodeURIComponent(Urlname);

  return (
    <div className="flex p-8 sm:p-0 flex-col justify-center items-center min-h-screen bg-white text-gray-500">
      <div className="w-full sm:w-1/3 flex space-x-4 mb-5">
        <Icon
          icon="line-md:circle-twotone-to-confirm-circle-twotone-transition"
          width="50"
          className="text-purple-500"
        />
        <div className="w-full flex justify-evenly flex-col">
          <span>Order #{orderNum}</span>
          <span className="text-xl text-black">
            Thank you <span className="text-purple-500">{name}</span>!
          </span>
        </div>
      </div>

      <div className="w-full sm:w-1/3 border border-gray-300 flex flex-col p-5">
        <div className="flex space-x-7">
          <div className="w-full flex flex-col mb-10">
            <span className="text-xl text-black">Contact Information</span>
            <span className="">{name}</span>
            <span className="">{email}</span>
          </div>

          <div className="w-full flex flex-col">
            <span className="text-xl text-black">Shipping Address</span>
            <span className="">{address}</span>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <span className="text-xl text-black">Payment Method</span>
          <span className="">{method}</span>
        </div>
      </div>
      <div className="w-full sm:w-1/3">

      <button
        onClick={()=>navigate('/')}
        className="mt-6 text-left self-start inline-flex px-4 py-2 border border-transparent font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Continue Shopping
      </button>
      </div>
    </div>
  );
}

export default Success
