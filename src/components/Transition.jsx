// src/components/PhotoTransition.js
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
//import SwiperCore, { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

import s1 from "../images/s1.png"
import s2 from "../images/s2.png"
import s3 from "../images/s3.png"
import s4 from "../images/s4.png"
import s5 from "../images/s5.png"


const photos = [
  {
    src: s1,
    description: ' 1 Description'
  },
  {
    src: s2,
    description: ' 2 Description'
  },
  {
    src: s3,
    description: ' 3 Description'
  },
  {
    src: s4,
    description: 'Photo 4 Description'
  },
  {
    src: s5,
    description: 'Photo 5 Description'
  },
];

function Transition() {
    return (
        <div className="flex items-center justify-center flex-col h-screen bg-gray-200">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center" >
                        <img src={s1} alt={index} />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <h1 className="text-xl lg:text-2xl">{photo.description}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
};    
export default Transition;
