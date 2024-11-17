"use client"
import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function DestinationsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className='px-4 sm:px-8 lg:px-24 bg-white mx-auto grid grid-cols-4 lg:grid-cols-12 justify-center mt-8 sm:mt-16 lg:mt-24 gap-4'>
        <div className="col-span-full h-[500px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className='px-4 sm:px-8 lg:px-24 bg-white mx-auto grid grid-cols-4 lg:grid-cols-12 justify-center mt-8 sm:mt-16 lg:mt-24 gap-4'>
      <div className='col-span-4 lg:col-span-2 flex justify-center lg:block'>
        <span className="text-[80px] sm:text-[100px] lg:text-[140px] font-serif leading-none text-[#F8C1B7]">
          01.
        </span>
      </div>
      <div className='col-span-4 lg:col-span-4 flex flex-col gap-4 pt-4 lg:pt-14 order-3 lg:order-none'>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-black text-center lg:text-left">
          DESTINATIONS
        </h2>
        <div className='pt-6 sm:pt-12 lg:pt-24 flex flex-col gap-6 sm:gap-8 lg:gap-12'>
          <div className="w-12 sm:w-16 h-0.5 bg-orange-500 mx-auto lg:mx-0"></div>
          <p className="text-gray-600 max-w-md text-sm sm:text-base font-semibold leading-relaxed text-center lg:text-left">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <motion.button
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6"
              >
                <path d="M8 7.5C8 6.67157 8.67157 6 9.5 6H14.5C15.3284 6 16 6.67157 16 7.5V17L11.5 14L7 17V7.5Z" fill="white" />
              </svg>
            </motion.button>

            <button className="px-4 sm:px-5 lg:px-6 py-2 border border-gray-300 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-gray-200 active:bg-gray-100 transition-colors uppercase tracking-wider">
              Know More
            </button>
          </div>
        </div>
      </div>

      <div className='col-span-4 lg:col-span-6 order-2 lg:order-none'>
        <div className='col-span-6'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="w-4/5 py-12 rounded-3xl *:rounded-3xl ml-12"
          >
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-1.jpg" alt="nature-1" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-2.jpg" alt="nature-2" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-3.jpg" alt="nature-3" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-4.jpg" alt="nature-4" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-5.jpg" alt="nature-5" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-6.jpg" alt="nature-6" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-7.jpg" alt="nature-7" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-8.jpg" alt="nature-8" />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover'>
              <Image className='block w-full' width={300} height={300} src="/swiper/nature-9.jpg" alt="nature-9" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
