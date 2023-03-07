import React from 'react';
import {  Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {BiSkipPreviousCircle,BiSkipNextCircle} from 'react-icons/bi';
import LoopSlide from './LoopSlide';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
        slidesPerView={'3'}
        spaceBetween={32}
        grabCursor={true}
        centeredSlides={true}
        effect={'coverflow'}
        loop={true}
        modules={[Pagination,Navigation]}
        pagination={{ el: '.pagination' ,clickable: true}}
        navigation={{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
         }}
        className="mySwiper"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.title}  className=' swiper-slide'>
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

        <div className="slider_controller flex justify-center mt-10">
          <div className="swiper-button-prev">
            <BiSkipPreviousCircle className=' text-4xl cursor-pointer dark:text-white'/>
          </div>
          <div className="pagination text-center"></div>
          <div className="swiper-button-next">
            <BiSkipNextCircle className=' text-4xl cursor-pointer dark:text-white'/>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCompo;
