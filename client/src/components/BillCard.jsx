import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { addInTotal, subsInTotal } from '../store/paymentSlice';

function BillCard({ name, price }) {
  
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const incrementCounter = () => {
    setCount(count + 1);
    dispatch(addInTotal(
      price
    ));
  };

  const decrementCounter = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(subsInTotal(
        price
      ))
    }
      else null;
  };

  return (
    <div className="w-full flex justify-around align-center my-2" >
      <Icon icon="majesticons:box" className='inline text-purple-500 w-1/12 mt-2' width="15" /> 
      
        <div className='w-8/12 flex flex-col'>
        <span className="text-md">{name}</span>
          <span className='text-purple-500'>${price} </span>
      </div>
      
       <div className="flex justify-evenly text-lg h-fit w-3/12 border rounded-full text-purple-500">
      <button
        className="font-semibold rounded-l-full px-2 "
        onClick={decrementCounter}
      >
        -
      </button>
      <span className="px-2  text-gray-700">{count}</span>
      <button
        className="font-semibold rounded-r-full px-2 "
        onClick={incrementCounter}
      >
        +
      </button>
    </div>
        
      </div >
  )
}

export default BillCard
