import React from 'react'

const KidsCollection = () => {
  return (
    <>
    <div className='px-12 '>
        <h1 className='mt-4 mb-4'>Find Kid's Collection</h1>
    <div className='w-full rounded-2xl flex'
    style={{
        background: 'linear-gradient(100deg, #0702FF, #54FF6C)',
      }}
    
    
    >
        <div className='w-1/2  py-12 text-white px-6'>
        <h1 className='text-6xl font-bold'>Best Style 
        Collection for your Kids</h1>
        <p className='text-xl'>Get special offers just for you</p>
        <button className='bg-green-500 rounded-3xl py-2 px-6 font-bold mt-6'>Shop Now</button>
        </div>
        <div className='w-1/2 pt-12'>
        <img  className=" border-t-8 rounded-t-4xl border-l-8  border-l-[#C4C4C4] border-t-[#C4C4C4]" src="src/assets/images/baby.png" alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default KidsCollection;

