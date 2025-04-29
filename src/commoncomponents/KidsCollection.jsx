
import { babyImage, Blue, Green } from '../assets/images';
import React from 'react';

const KidsCollection = () => {
  return (
    <>
    <div className='px-12 '>
    <div className="relative w-fit my-8">
  {/* Heading */}
  <h1 className="py-4 mt-4 mb-4 text-2xl">
    Find Kid's{" "}
    <span className="relative inline-block font-bold">
      {/* Corner Images */}
      <img src={Green} alt="Top Left" className="absolute top-0 left-0 -translate-x-full -translate-y-full" />
      <img src={Blue} alt="Top Right" className="absolute top-0 right-0 translate-x-full -translate-y-full" />
      <img src={Blue} alt="Bottom Left" className="absolute bottom-0 left-0 -translate-x-full translate-y-full" />
      <img src={Green} alt="Bottom Right" className="absolute bottom-0 right-0 translate-x-full translate-y-full" />

      Collection
    </span>
  </h1>
</div>

    <div className='w-full rounded-3xl flex'
    style={{
        background: 'linear-gradient(100deg, #0702FF, #54FF6C)',
      }}
    
    
    >
        <div className='w-1/2 text-white px-12 py-16'>
        <h1 className='text-6xl font-medium'>Best Style 
        Collection for your Kids</h1>
        <p className='text-xl mt-4'>Get special offers just for you</p>
        <button className='bg-[#54FF6C] rounded-3xl py-2 px-10 font-medium mt-6'>Shop Now</button>
        </div>
        <div className='w-1/2 pt-12'>
        <img  className=" border-t-16 rounded-tl-4xl border-l-16  border-l-[#C4C4C4] border-t-[#C4C4C4]" src={babyImage} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default KidsCollection;

