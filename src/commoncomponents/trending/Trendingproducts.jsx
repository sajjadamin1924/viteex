import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CardSlider = () => {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-200">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        className="w-[600px]"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-400 w-28 h-44 rounded-lg flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {card}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;