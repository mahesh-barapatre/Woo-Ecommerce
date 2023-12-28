import axios from 'axios'
import React, { useState } from 'react'
import serverUrl from "../config"
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate();
  const handleAdd = async () => {
    

        try {
          const response = await axios.post(`${serverUrl}/owner/addProduct`,
            { name, description, images, price, category },
          {
            withCredentials: true,  // This option enables sending cookies with cross-origin requests
            })
          navigate('/admin')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 relative rounded shadow-md w-10/12 sm:w-1/4 bg-purple-50">
        <h2 className="text-2xl font-bold mb-6 text-purple-500">ADD PRODUCT</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium text-gray-600">
            images
          </label>
          <input
            type="images"
            id="images"
            name="images"
            value={images}
            onChange={(e) => setImages(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            price
          </label>
          <input
            type="price"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-600">
            category
          </label>
          <input
            type="category"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleAdd}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
        >
          Add
        </button>
        <div className="border w-full border-gray-300 my-5"></div>
        

      </div>
    </div>
  )
}

export default AddProduct
