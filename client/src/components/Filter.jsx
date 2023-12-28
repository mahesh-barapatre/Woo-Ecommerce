import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Carousel from './Carousel'
import { useNavigate } from 'react-router-dom'

function Filter() {

  const navigate = useNavigate();

  const img = [
    "https://img.freepik.com/free-vector/couple-winning-prize-man-woman-holding-gift-box-flat-vector-illustration-lottery-present-birthday-party_74855-8307.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/give-away-contest-banner-social-media-post-template_368797-832.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/you-win-game-banner-level-complete-badge-screen-casino-jackpot-with-golden-stars-crown-trumpets_88138-1474.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/creative-giveaway-winner-announcement-social-media-post-instagram-template-premium-psd_148733-137.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/man-paying-online-receiving-cashback-wallet_88138-692.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph"
  ]

  return (
    <div className="w-full ">
      <div className="flex flex-col text-lg font-semibold text-white p-3 gradient-col my-5">
        <Carousel images={img} autoplayInterval={2000}/>
      </div>

    <div className=' w-full text-gray-700 justify-around flex flex-col'>

          <div className="w-full border px-2 text-sm text-center border-green-400 bg-green-50 text-green-400 py-3">
            Safety Assured Meals and Contactless delivery.
          </div>
         <span className='text-red-400 font-semibold'>COD available</span>

        <div
          onClick={()=>navigate('/offer')}
          className="w-full cursor-pointer mt-3 border text-xl justify-evenly item-center text-gray-500 flex px-1 py-1">
            <Icon icon="tabler:discount-2" width="40" />
            <span className="p-1">Check Coupons</span>
            <Icon icon="mingcute:right-fill" width="40" />
          </div>

          
    </div>
    </div>
    
    
  )
}

export default Filter
