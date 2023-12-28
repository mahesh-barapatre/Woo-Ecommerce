import React from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import serverUrl from '../config'

function AdminCard({ id, name, category, images, price, setUpdate }) {
  

  const removeItem = async() => {
    try {
      const response = await axios.delete(`${serverUrl}/owner/delete/${id}`);
      console.log(response)
      setUpdate(prev=>!prev)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="w-60 bg-white overflow-hidden shadow-md m-3">
      <Icon icon="majesticons:box" className='inline text-purple-500' width="15" />   
      <span className="text-purple-500 font-semibold">{category}</span>
      <Link to={`/product/${id}`}>

      <div className="p-4 h-36 bg-blue-100 rounded">
        <img
          className="w-full h-full object-cover"
          src={images[0]} // Replace with your product image URL
          alt="Product Image"
        />
      </div>
      </Link>
      <div className="p-4">
        <div className="flex items-baseline">
          <span className="bg-purple-200 text-purple-500 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div className="text-gray-600 text-xs uppercase ml-2">In Stock</div>
        </div>
        <h2 className="mt-1 text-lg text-gray-800">
          {name}
        </h2>
        
        <div className="mt-3 flex items-center justify-between">
                  <span className="text-purple-500 font-semibold">${price}</span>
                      
          <button
            className="gradient px-3 py-1 text-white"
            onClick={removeItem}
          >
            <Icon icon="ic:twotone-delete" width="30" />
          </button>
        </div>

        
      </div>
    </div>
  )
}

export default AdminCard
