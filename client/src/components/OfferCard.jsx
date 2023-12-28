import React from 'react'

function OfferCard({img, exp, dis, code, quote}) {
  return (
    <div className="sm:w-52 bg-white overflow-hidden shadow-md m-3">
      
      <div className="h-36 bg-blue-100 rounded">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <div className="flex items-baseline">
          <span className="bg-purple-200 text-purple-500 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div className="text-gray-600 text-xs ml-2">{exp}d LEFT</div>
        </div>
        <h2 className="mt-1 text-sm text-gray-800">
          {quote}
        </h2>
        
        <div className="mt-3 flex items-center justify-between">
                  <span className="text-purple-500 text-lg font-semibold">{dis}% Discount</span>
                      
          
        </div>

        <button className="uppercase text-gray-700 p-1 font-semibold border-2 border-purple-500">
            {code}
          </button>
      </div>
    </div>
  )
}

export default OfferCard
