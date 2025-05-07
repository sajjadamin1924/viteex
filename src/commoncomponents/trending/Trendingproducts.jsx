import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';

import {
  babyImage,
  Rectangle20,
  Rectangle22,
  Rectangle56,
  Rectangle57,
  Rectangle58,
  Rectangle7,
} from '../../assets/images';

const Trendingproducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <div className="py-12 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className={`${isMobile ? 'text-2xl' : 'text-[42px]'} font-bold`}>
          Trending Products
        </h1>
        <div className="flex space-x-4">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-[#54FF6C] text-black flex items-center justify-center"
          >
            <FaAngleLeft />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#54FF6C] text-black flex items-center justify-center"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[
            Rectangle56,
            Rectangle57,
            Rectangle58,
            babyImage,
            Rectangle20,
            Rectangle22,
            Rectangle7,
          ].map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-96 overflow-hidden rounded shadow">
                <img
                  src={imgSrc}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trendingproducts;
