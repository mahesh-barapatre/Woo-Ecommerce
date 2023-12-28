import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../config';

function CheckoutForm() {
  const navigate = useNavigate();
  const total = useSelector(state=>state.payment.total);

  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');

    const orderNum = Math.floor(10000 + Math.random() * 90000);
  
  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  const handlePayment = async() => {
    if (selectedPaymentOption && email && address && name) {
      await axios.post(`${serverUrl}/send-email`,
        {
          name: name,
          to: email,
          address: address,
          method: selectedPaymentOption,
          price: total,
          orderNum: orderNum
          
        })
      navigate(`/success/${name}/${email}/${address}/${selectedPaymentOption}/${orderNum}`);
    } else {
      console.error("Please select a payment option and email adn address!");
    }
  };

  return (
    <div className="sm:w-8/12 w-full my-5 flex flex-col">
      {/* //Delivery address */}
      <div className="w-full mx-auto p-8 m-3 bg-white rounded-md shadow-md">
        <div className="text-xl font-bold text-gray-400 flex">
          <Icon icon="mdi:address-marker-outline" width="30" />
          <span>Delivery Address</span>
        </div>

        <div className="mt-4">
          <label
            htmlFor="nameInput"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="nameInput"
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
          />
        </div>


        <div className="mt-4">
          <label
            htmlFor="emailInput"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="emailInput"
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="addressInput"
            className="block text-sm font-medium text-gray-600"
          >
            Home Address:
          </label>
          <textarea
            id="addressInput"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your home address"
          ></textarea>
        </div>
      </div>

      {/* //payment method */}
      <div className="w-full mx-auto p-8 m-3 bg-white rounded-md shadow-md">
        <div className="flex text-xl font-bold text-gray-400">
          <Icon icon="ic:twotone-payment" width="30" />
          <span>Payment Method</span>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600">
            Payment Options:
          </label>
          <div className="mt-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="creditCard"
                name="paymentOption"
                value="Credit Card"
                onChange={() => handlePaymentOptionChange("Credit Card")}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="creditCard"
                className="ml-2 text-sm text-gray-600"
              >
                Credit Card
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="paypal"
                name="paymentOption"
                value="PayPal"
                onChange={() => handlePaymentOptionChange("PayPal")}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="paypal" className="ml-2 text-sm text-gray-600">
                PayPal
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="cash"
                name="paymentOption"
                value="Cash on delivery" 
                onChange={() => handlePaymentOptionChange("Cash on delivery")}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="cash" className="ml-2 text-sm text-gray-600">
                Cash on delivery
              </label>
            </div>
            {/* Add more payment options as needed */}
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm
