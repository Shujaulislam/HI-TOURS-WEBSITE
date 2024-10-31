import { ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function DestinationsSection() {


  return (
    // <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
    //   <div className="grid md:grid-cols-[1fr,1fr] gap-16">
    //     {/* Left Content */}
    //     <div className="space-y-12 mr-12">
    //       <div className="space-y-8">
    //         {/* Number and Title with Shadow */}
    //         <div className="">
    //           <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
    //             01.
    //           </span>
    //           <h2 className=" top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black">
    //             DESTINATIONS
    //           </h2>
    //           {/* Shadow Text */}
    //           <h2 className=" top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black/50 opacity-80">
    //             DESTINATIONS
    //           </h2>
    //         </div>

    //         {/* Orange Line and Description */}
    //         <div className="space-y-6">
    //           <div className="w-16 h-0.5 bg-orange-500"></div>
    //           <p className="text-gray-600 max-w-md text-sm leading-relaxed">
    //             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    //             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    //             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    //           </p>
    //         </div>

    //         {/* Button section remains unchanged */}
    //         <div className="flex items-center gap-4">
    //           {/* Bookmark Icon */}
    //           <motion.button
    //             className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center"
    //             whileHover={{ scale: 1.1 }}
    //             whileTap={{ scale: 0.9 }}
    //           >
    //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path d="M8 7.5C8 6.67157 8.67157 6 9.5 6H14.5C15.3284 6 16 6.67157 16 7.5V17L11.5 14L7 17V7.5Z" fill="white" />
    //             </svg>
    //           </motion.button>

    //           {/* Know More Button */}
    //           <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wider">
    //             Know More
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    
    <>
    <section className='w-[90%] mx-auto grid grid-cols-12 justify-center mt-24 gap-4'>
            <div className='col-span-2 border'>
                <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                    01.
                </span>
            </div>
        <div className='col-span-4 flex flex-col gap-4 pt-14 border'>
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
               <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wider">
                 Know More
               </button>
             </div>
            </div>
            
        </div>
        <div className='col-span-6 border'>
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
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' bg-center bg-cover w-[300px] h-[500px]'>
          <img className='block w-full' src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
       </Swiper>
        </div>
    </section>
    </>
  );
}
