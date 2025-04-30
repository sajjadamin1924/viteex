import React, { useState } from 'react';

const Range = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max - 1000);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min + 1000);
    setMax(value);
  };

  return (
    <div className="w-full mt-10 px-4">
      <div className="relative h-6">
        {/* Range track */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-300 rounded" />

        {/* Highlighted selected range */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-blue-500 rounded"
          style={{
            left: `${(min / 50000) * 100}%`,
            width: `${((max - min) / 50000) * 100}%`,
          }}
        />

        {/* Min range input */}
        <input
          type="range"
          min="0"
          max="50000"
          value={min}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent"
          style={{ zIndex: 3 }}
        />

        {/* Max range input */}
        <input
          type="range"
          min="0"
          max="50000"
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none bg-transparent"
          style={{ zIndex: 2 }}
        />
      </div>

      <div className="flex justify-between mt-4 text-sm font-medium">
        <span>₹{min}</span>
        <span>₹{max}</span>
      </div>
    </div>
  );
};

export default Range;
