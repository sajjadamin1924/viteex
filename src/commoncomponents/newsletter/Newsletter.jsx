import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { babyImage } from '../../assets/images';

const Newsletter = () => {
  // Breakpoints
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const headingSize = isMobile ? "text-2xl" : isTablet ? "text-4xl" : "text-[56px]";
  const inputSize = isMobile ? "text-base px-4 py-2" : "text-[24px] px-8 py-2";
  const buttonSize = isMobile ? "text-base px-6 py-2" : "text-[25px] px-10 py-2";
  const layoutClass = isMobile ? "flex-col" : "flex-row";

  return (
    <div className="mt-20 mb-16 px-4">
      <div
        className="rounded-xl text-center bg-cover bg-center min-h-80 text-black p-6 sm:p-10"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(84, 255, 108, 0.7), rgba(88, 146, 169, 0.7)), url(${babyImage})`,
        }}
      >
        <h1 className={`font-bold text-center ${headingSize}`}>
          Subscribe to our newsletter
        </h1>

        <div className={`mt-10 flex items-center justify-center gap-4 ${layoutClass}`}>
          <input
            type="text"
            placeholder="Your email address"
            className={`rounded-3xl text-[#444444] border-2 border-[#777777] outline-0 font-normal ${inputSize} w-full max-w-md`}
          />
          <button
            className={`bg-[#54FF6C] rounded-3xl text-[#343434] font-semibold ${buttonSize} w-full max-w-[200px]`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
