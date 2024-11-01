"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function DestinationsSection() {
  // {/* Swiper is stopping form generating correct height it stops till you interact with it  */}


  return (
    <section className='w-[90%] bg-white mx-auto grid grid-cols-12 justify-center mt-24 gap-4 '>
            <div className='col-span-2'>
                <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                    01.
                </span>
            </div>
        <div className='col-span-4 flex flex-col gap-4 pt-14'>
            <h2 className=" text-5xl font-serif tracking-[0.2em] text-black">
                    DESTINATIONS
            </h2>
            <div className='pt-24 flex flex-col gap-12'>
            <div className="w-16 h-0.5 bg-orange-500"></div>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center gap-4">
    
               <motion.button
                 className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M8 7.5C8 6.67157 8.67157 6 9.5 6H14.5C15.3284 6 16 6.67157 16 7.5V17L11.5 14L7 17V7.5Z" fill="white" />
                 </svg>
               </motion.button>

               {/* Know More Button */}
               <button className="px-6 py-2 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wider">
                 Know More
               </button>
             </div>
            </div>
            
        </div>
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
        className="w-[80%] py-12 rounded-3xl *:rounded-3xl ml-12"
      >
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[400px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-1.jpg" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-2.jpg" alt="nature-2" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-3.jpg" alt="nature-3" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-4.jpg" alt="nature-4" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-5.jpg" alt="nature-5" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-6.jpg" alt="nature-6" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-7.jpg" alt="nature-7" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-8.jpg" alt="nature-8" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <Image className='block w-full' width={300} height={500} src="/swiper/nature-9.jpg" alt="nature-9" />
        </SwiperSlide>
       </Swiper>
        </div>
    </section>
    
  );
}
