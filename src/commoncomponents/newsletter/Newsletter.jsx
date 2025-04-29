import React from 'react';
import { babyImage } from '../../assets/images';

const Newsletter = () => {
  return (
    <div className="px-12 mt-20 mb-16">
      <div
        className="rounded-xl text-center text-black p-10" 
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(84, 255, 108, 0.7), rgba(88, 146, 169, 0.7)), url(${babyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px',
        }}
      >
        <h1 className="text-3xl font-bold text-center">Subscribe to our newsletter</h1>
        <div className="mt-16 flex items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your email address"
            className="px-8 py-2 rounded-3xl text-black border-1 border-[#777777] outline-0"
          />
          <button className="bg-[#54FF6C] px-10 py-2 rounded-3xl text-black font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
