import React from 'react';
import { babyImage } from '../../assets/images';

const Newsletter = () => {
  return (
    <div className=" mt-20 mb-16">
      <div
        className="rounded-xl text-center bg-cover bg-center min-h-80  text-black p-10" 
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(84, 255, 108, 0.7), rgba(88, 146, 169, 0.7)), url(${babyImage})`,
        }}
      >
        <h1 className="text-[56px] font-bold text-center">Subscribe to our newsletter</h1>
        <div className="mt-16 flex items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your email address"
            className="px-8 py-2 rounded-3xl text-[#444444] border-2 border-[#777777] outline-0 font-[400px] text-[24px] "
          />
          <button className="bg-[#54FF6C] px-10 py-2 rounded-3xl text-[#343434] font-[600px] text-[25px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
