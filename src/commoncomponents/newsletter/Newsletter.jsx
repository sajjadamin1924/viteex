import React from 'react';


const Newsletter = () => {
  return (
    <div className="px-12 mt-20 mb-16">
      <div
        className="rounded-xl text-center text-black p-10" 
        style={{
          backgroundImage: `linear-gradient(100deg, #54FF6C, #5892A9)`,
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
            className="px-4 py-2 rounded-3xl text-black"
          />
          <button className="bg-[#54ff6c] px-10 py-2 rounded-3xl text-black font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
