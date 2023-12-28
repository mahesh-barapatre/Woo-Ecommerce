import React from 'react'

function CustomerCare() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className="flex bg-white shadow-md text-center p-5 flex-col items-center justify-evenly w-3/4 h-1/2 sm:w-1/4">
        <h5>Customer Support</h5>
        <p className='text-sm'>Our customer experience team is
          available all days from
          9am to 12.00am to assist you with any
          questions or issues you might have.
        </p>
        <div>
          <h6 className='uppercase '>email us</h6>
          <h5 className='text-purple-500'>help@woo.commerce</h5>
        </div>
        <div>
          <h6 className='uppercase '>call us</h6>
          <h5 className='text-purple-500'>080-4040-4242</h5>
        </div>
        
      </div>
    </div>
  )
}

export default CustomerCare
