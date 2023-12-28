import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function MenuNav() {

  const [category, setCategory] = useState('electronics');
  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = () => {
    // Add your search logic here
    console.log('Category:', category);
    console.log('Search Term:', searchTerm);
    // You can perform the actual search using the category and search term
  };

  return (
      
      <div className="bg-white flex justify-evenly z-50 rounded shadow-md w-8/12 m-auto">
        
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-3/12 py-2 px-3 text-gray-500 bg-purple-100 border border-gray-300 rounded-l-sm mt-1  "
        >
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Kitchen</option>
          {/* Add more categories as needed */}
        </select>

       
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter your search term"
          className="w-8/12 py-2 px-3 border text-gray-500 border-gray-300 mt-1 focus:outline-none focus:ring "
        />

        <div
          type="button"
          onClick={performSearch}
          className="w-1/12 mt-1 bg-purple-500 text-white py-2 px-4 rounded-r-sm hover:bg-purple-600 focus:outline-none focus:ring "
        >
          <Icon icon="ic:round-search" width="30" />
        </div>
      </div>
  )
}

export default MenuNav
