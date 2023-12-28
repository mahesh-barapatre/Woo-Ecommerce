import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminCard from '../components/AdminCard'
import axios from 'axios'
import serverUrl from '../config'

function Admin() {

  const [addedItems, setAddedItems] = useState([])
  const [user, setUser] = useState({})
  const [update, setUpdate] = useState({})


  useEffect(() => {
    const getAddedProducts=async () => {
      try {
        const response = await axios.post(`${serverUrl}/owner/getProducts`,
          {},
          {
            withCredentials: true
          })
        // console.log(response.data.products)
        // console.log(response.data.user)
        setUser(response.data.user)
        setAddedItems(response.data.products)
      
        
      } catch (error) {
        console.log(error.message)
      }
    }
    
      getAddedProducts();
  },[update])

  const navigate = useNavigate()

  return (
     <div className='bg-gray-100 flex flex-col-reverse sm:flex-row px-4 py-10'>
      <div className="flex flex-col w-full sm:w-8/12">
        <div className='border bg-white border-gray-300 m-3 flex flex-wrap'>

          {
            addedItems.map((product, index) => {
              let item = product;
              return (
                <AdminCard
                  key={index}
                  id={item._id}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  images={item.images}
                  setUpdate={setUpdate}
                />
              )
            })
          }

        </div>
       
      </div>

      <div className="sm:w-4/12 w-full mt-6">
        <div className='h-48 p-10 my-3 gradient sm:fixed flex flex-col text-xl justify-around font-bold text-white'>
          <span className='text-2xl'>{user.name}</span>
          <span className='text-lg'>{user.email}</span>
          <span className='uppercase'>{user.shop}</span>
          <button
            onClick={()=>navigate('/addproduct')}
            className='gradient border-2 border-white transform ease-in-out duration-100 hover:scale-110'
          >ADD</button>
        </div>

        

      </div>
        


      </div>
      
  )
}

export default Admin
