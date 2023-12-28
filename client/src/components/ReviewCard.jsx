import { Icon } from '@iconify/react'
import React from 'react'

function ReviewCard() {
  return (
    <div className='flex w-96 h-20 m-60 bg-gray-50'>
          <img className="w-1/2 object-cover" src='https://img.freepik.com/free-vector/loyalty-program-concept_74855-6543.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph' />
          <div className="flex flex-col text-sm">
              <span className='text-purple-500 font-semibold'>mahesh barapatre</span>
              <span className='text-gray-500'>this item is very good.nice to buy!</span>
              <div className='text-yellow-400 flex'>
                  <Icon icon="ic:baseline-star" width="20" />
                  <span>5</span>
              </div>
          </div>
    </div>
  )
}

export default ReviewCard
