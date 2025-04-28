import React from 'react'

const Products = () => {
  return (
    <>
      <div className='bg-[#f1f1f2]'>
        <h1 className="text-center font-bold mt-4 mb-4">PRODUCT COLLECTIONS</h1>

        <div className="grid grid-cols-3 gap-2 px-12">
          {[
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
            { img: "src/assets/images/Rectangle 56.png", text: "BODY SCRUB", price: "28.00", oldPrice: "38.00" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col bg-[#F2F1F1] p-2">
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

export default Products;
