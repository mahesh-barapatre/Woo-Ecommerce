import React from 'react'
import { useNavigate } from 'react-router-dom';

function Unauth() {

    const navigate = useNavigate();

  return (
    <div className="w-full flex ">
      <img
        className="w-1/3"
        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
        alt="wishlist"
      />
      <div className="w-2/3 pl-5">
        <h3 className="text-2xl font-bold">Login or Signup to Continue</h3>
        <h4 className="text-lg text-purple-400 mb-4">Shop today's deal</h4>
        <button
          onClick={() => navigate("/login")}
          className="hover:opacity-100 transform ease-in-out duration-100 rounded shadow-md opacity-90 p-2 text-white gradient"
        >
          Login to your account
        </button>
        <button
          onClick={() => navigate("/register")}
          className="rounded shadow-md p-2 ml-3 hover:bg-slate-50 transform ease-in-out duration-100"
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Unauth
