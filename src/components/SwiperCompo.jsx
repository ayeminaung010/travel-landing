import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LoopSlide from './LoopSlide';

const SwiperCompo = ({ discover1, discover2, discover3, discover4 }) => {
  const slideData = [
    {
      image: discover1,
      title: 'Bali',
      description: '24 Hours Available',
    },
    {
      image: discover2,
      title: 'WhiteHeaven',
      description: '20 Hours Available',
    },
    {
      image: discover3,
      title: 'Hawaii',
      description: '14 Hours Available',
    },
    {
      image: discover4,
      title: 'Burmese',
      description: '20 Hours Available',
    },
  ];

  return (
    <div className='my-10'>
      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        grabCursor={true}
        centeredSlides={true}
        effect={'coverflow'}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.title} className=''>
            {({ isActive }) => (
              <LoopSlide
                image={slide.image}
                title={slide.title}
                description={slide.description}
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCompo;
