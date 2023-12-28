import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../config';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [shop, setShop] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    // Add your register logic here
    try {
      const response = await axios.post(`${serverUrl}/auth/register`, { email, name, shop, role, password },
        {
        withCredentials: true,
      })
      // console.log('Registering with:', { email, name, shop, role, password });
      
      console.log(response);
      navigate('/');
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded shadow-md  w-10/12 sm:w-1/4 bg-purple-50">
        <h2 className="text-2xl font-bold mb-6 text-purple-500">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex mb-1">
          
    <label className="block mr-5">
            <input
              type="radio" name="role" value="user" className="mr-2"
              checked={role === 'user'}
              onChange={handleRole}
            />
      <span className="">User</span>
    </label>

    <label className="block">
            <input
              type="radio" name="role" value="admin" className="mr-2"
              checked={role === 'admin'}
              onChange={handleRole}
            />
      <span className="">Shop Owner</span>
    </label>
  </div>

        {
          role === 'admin' &&
        <div className="mb-4">
          <label htmlFor="shop" className="block text-sm font-medium text-gray-600">
            Shop Name
          </label>
          <input
            type="shop"
            id="shop"
            name="shop"
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        }

        <button
          onClick={handleRegister}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
        >
          Register
        </button>

        <div className="border w-full border-gray-300 my-5"></div>

        <div className="w-full text-sm flex">
          Don't have an account?
          <div
            onClick={()=>navigate('/login')}
            className="text-purple-500 underline px-1 cursor-pointer">login</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
