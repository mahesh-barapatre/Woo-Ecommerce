import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import serverUrl from '../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    // Add your login logic here
    try {
      const response = await axios.post(`${serverUrl}/auth/login`, { email, password },
      {
    withCredentials: true,  // This option enables sending cookies with cross-origin requests
        })
      
      // console.log('Logging in with:', { email, password });
      
      console.log(response)
      navigate('/');
      
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 relative rounded shadow-md w-10/12 sm:w-1/4 bg-purple-50">
        <h2 className="text-2xl font-bold mb-6 text-purple-500">Login</h2>
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
        <button
          onClick={handleLogin}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
        >
          Login
        </button>
        <div className="border w-full border-gray-300 my-5"></div>
        <div className="w-full text-sm flex">
          Don't have an account?
          <div
            onClick={()=>navigate('/register')}
            className="text-purple-500 underline px-1 cursor-pointer">register</div>
        </div>

      </div>
    </div>
  );
};

export default Login;

