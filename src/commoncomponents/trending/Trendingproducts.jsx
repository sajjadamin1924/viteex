import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const Trendingproducts = () => {
  return (
    <div className="px-4 flex items-center justify-between">
      
      <h1 className="text-xl font-bold">TRENDING PRODUCTS</h1>

      
      <div className="px-12 flex items-center space-x-2">
        <button className="p-2 rounded-full bg-[#54ff6c] hover:bg-[#54ff6c]/90">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 rounded-full bg-[#54ff6c] hover:bg-[#54ff6c]/90">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className='grid grid-cols-3 '>
        <img src="src/assets/images/Rectangle 56.png" alt="" />
        <img src="src/assets/images/Rectangle 56.png" alt="" />
        <img src="src/assets/images/Rectangle 56.png" alt="" />

      </div>
    </div>
  );
};

export default Trendingproducts;
