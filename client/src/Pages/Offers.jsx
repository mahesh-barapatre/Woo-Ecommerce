import React from 'react'
import { Icon } from '@iconify/react'
import OfferCard from '../components/OfferCard'

function Offers() {

  const offers = [
    {
      img: 'https://img.freepik.com/free-photo/3d-render-blue-gift-box-with-gold-ribbon-package_107791-17996.jpg?w=740&t=st=1702661660~exp=1702662260~hmac=80e643467b0c56d356002986f0eab5ba9932ea6d75ba70bf43a47c42b06f8889',
      exp: 27,
      dis: 10,
      code: 'THANKYOU10 ',
      quote: 'A small token of appreciation – enjoy 10% off your order!'
    },
    {
      img: 'https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=900&t=st=1702661760~exp=1702662360~hmac=79fc172c8d564cdcdb359e17b007dbf105f686b55f8e3e456f00d8bedc667352',
      exp: 12,
      dis: 20,
      code: 'UPGRADE20',
      quote: 'Upgrade your shopping experience with a 20% discount!'
    },
    {
      img: 'https://img.freepik.com/free-vector/colorful-promotion-pop-up-with-flat-design_23-2147875882.jpg?w=740&t=st=1702661832~exp=1702662432~hmac=e81b69269f8be5bcdb30455a1ff765ce1152233762db37a516bddd3d26c124cb',
      exp: 3,
      dis: 30,
      code: 'CELEBRATE30',
      quote: 'Celebrate today with a 30% discount – because you deserve it!'
    },
    {
      img: 'https://img.freepik.com/free-vector/loyalty-program-concept_74855-6543.jpg?w=1060&t=st=1702661874~exp=1702662474~hmac=06fe7d9ae22f09a79122fd33e232ea4fb0e4d271b0b99b48537d4d8cbcd48abe',
      exp: 15,
      dis: 40,
      code: 'LUCKY40',
      quote: 'Your lucky day! Enjoy a whopping 40% off on selected items.'
    },
    {
      img: 'https://img.freepik.com/free-vector/cash-back-offers-vector-banners-with-flying-coins_91128-1715.jpg?w=740&t=st=1702661947~exp=1702662547~hmac=68374158ff5160ec261a7c9533acba1b1d4ab223612e4b28011366d327788bfb',
      exp: 1,
      dis: 50,
      code: '50OFFNOW',
      quote: 'Half the price, double the joy! Take 50% off – its a steal!'
    },
    {
      img: 'https://img.freepik.com/premium-vector/3d-open-gift-box-surprise_165488-5380.jpg?w=740',
      exp: 7,
      dis: 25,
      code: 'SAVE25NOW',
      quote: 'Unlock the savings vault! Enjoy 25% off your entire purchase.'
    },
  ]

  return (
    <>
      <div className="gradient w-full h-60 p-20 text-5xl font-extrabold flex text-white">
        <Icon icon="devicon:woocommerce" width="100" />
          Offers
      </div>
      <div className="w-full py-10 px-8 sm:px-40 flex flex-col">
        <div className="w-full flex">
          <div className='text-lg font-semibold text-gray-400'>Offers & discount coupons</div>
          <div className='w-8/12 border-b-2 border-gray-400'></div>
        </div>
        <span className='text-end font-semibold text-sm text-gray-400'>*Apply promo code at checkout.</span>
        <div className="w-full flex flex-wrap mt-4">
          {
            offers.map((offer, index) => {
              return (
                <OfferCard
                  key={index}
                  img={offer.img}
                  exp={offer.exp}
                  dis={offer.dis}
                  code={offer.code}
                  quote={offer.quote}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Offers
