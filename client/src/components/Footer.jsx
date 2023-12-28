import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {

  return (
    <div className='border border-slate-400 flex p-3 space-y-5 flex-col sm:flex-row w-full'>
      <div className="flex justify-evenly items-start w-full sm:w-1/2 text-sm">
        <div className='flex flex-col space-y-3 justify-evenly h-full'>
          <h6 className='text-slate-400 uppercase font-semibold'>Company</h6>
          <p>FAQ</p>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className='flex flex-col space-y-3 text-start justify-evenly h-full'>
          <h6 className='text-slate-400 uppercase font-semibold'>help & contact</h6>
          <p>Help Centre</p>
          <p>Email Us</p>
          <p>080-4040-4242</p>
          <h6 className='font-bold'>Terms & Privacy</h6>
        </div>
        <div className='flex flex-col space-y-3 text-start justify-evenly h-full'>
          <h6 className='text-slate-400 uppercase font-semibold'>more from us</h6>
          <p>Bulk/Party Order</p>
          <p>Cake Order</p>
          <p>FreshClub</p>
          <p>Others</p>
        </div>
        
      </div>


      <div className="flex flex-col space-y-5 justify-evenly w-full sm:w-2/5">
        <h6 className="uppercase text-slate-400 font-semibold">subscribe to our DROOLWORTHY newspaper</h6>
        <div className="flex items-center">
  <input
    type="email"
    placeholder="Enter your email"
    className="border border-gray-300 px-4 py-2 rounded-l focus:outline-none focus:ring focus:border-blue-500 flex-grow"
  />
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
  >
    Subscribe
  </button>
        </div>

        <div className="flex space-x-5">
        <Icon icon="logos:facebook" width="30" height="30" />
        <Icon icon="skill-icons:instagram" width="30" height="30" />
        <Icon icon="logos:twitter" width="30" height="30" />
        </div>

      </div>
    </div>
  )
}

export default Footer
