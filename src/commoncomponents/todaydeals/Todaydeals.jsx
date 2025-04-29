import React from 'react'
import { Rectangle56 } from '../../assets/images';

const Todaydeals = () => {
  return (
    <>
     <div className='bg-white'>
    <h1 className="text-center text-4xl font-bold mt-4 mb-4">Today's Deal's</h1>

    <div className="grid grid-cols-3 gap-2 px-12 mt-4">
      {[
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        
      ].map((item, index) => (
        <div key={index} className="flex flex-col bg-white p-2">
          <img src={item.img} className="h-full" alt="" />
          <p className="mt-4 text-sm">{item.text}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center">
              <span className="text-green-600 font-semibold">$</span>
              <span className="text-blue-600 font-semibold">{item.price}</span>
            </span>
            <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
    </>
  )
}

export default Todaydeals;