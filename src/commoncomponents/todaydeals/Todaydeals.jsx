import React from 'react'
import { Rectangle56 } from '../../assets/images';

const Todaydeals = () => {
  return (
    <>
     <div className='bg-white'>
    <h1 className="text-center text-[58px] font-bold mt-4 mb-4">Today's Deal's</h1>

    <div className="grid grid-cols-3 gap-2 px-12 mt-4">
      {[
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        { img: Rectangle56, text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
        
      ].map((item, index) => (
        <div key={index} className="flex flex-col bg-white p-2">
          <img src={item.img} className="h-full" alt="" />
          <p className="mt-4 text-[28px] font-semibold">{item.text}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center">
              <span className="text-[#1CAA24] font-medium text-xl">$</span>
              <span className="text-[#0702ff] font-medium text-xl">{item.price}</span>
            </span>
            <span className="text-[#CFCFCF] line-through text-[18px] font-medium">${item.oldPrice}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
    </>
  )
}

export default Todaydeals;