"use client"
// import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
// import MasonryGrid from '@/components/UI/MasonryGrid'
import VideoGrid from './UI/VideoGrid'

export default function ExperiencesSection() {
  // const experiences = [
  //   {
  //     title: 'Experience Wildlife',
  //     image: '/experience/wildlife.jpg',
  //     alt: 'Wildlife experience'
  //   },
  //   {
  //     title: 'Chase Adventure',
  //     image: '/experience/adventure.jpg',
  //     alt: 'Adventure experience'
  //   },
  //   {
  //     title: 'Find Opportunities',
  //     image: '/experience/opportunities.png',
  //     alt: 'Opportunities'
  //   },
  //   {
  //     title: 'Live Culture',
  //     image: '/experience/culture.jpg',
  //     alt: 'Cultural experience'
  //   },
  //   {
  //     title: 'Witness History',
  //     image: '/experience/history.jpg',
  //     alt: 'Historical monuments'
  //   }
  // ];

  const videos = [
    {
      title: 'Experience Wildlife',
      video: '/experience/wildlife.mp4',
      alt: 'Wildlife experience'
    },
    {
      title: 'Chase Adventure',
      video: '/experience/adventure.mp4',
      alt: 'Adventure experience'
    },
    {
      title: 'Find Opportunities',
      video: '/experience/opportunities.mp4',
      alt: 'Opportunities'
    },
    {
      title: 'Live Culture',
      video: '/experience/culture.mp4',
      alt: 'Cultural experience'
    },
    {
      title: 'Witness History',
      video: '/experience/history.mp4',
      alt: 'Historical monuments'
    }
  ];


  return (
      <section className="relative min-h-screen bg-white mt-16 sm:mt-24 lg:mt-48 px-4 sm:px-8 lg:px-24" 
      style={{ background: 'url(/mountains.jpg) no-repeat center cover',
        backgroundSize: 'cover',
      }}>
        {/* Background Mountain Image - Adjusted to be more prominent */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/mountains.jpg"
            alt="Mountain landscape"
            width={6016}
            height={3000}
            className="object-cover"
            priority
          />
        </div> */}

        {/* Content - Adjusted max width and padding */}
        <div className="relative z-10 mx-auto">
          <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-24">
            {/* Left Side - Masonry Grid */}
            <div className="h-[300px] sm:h-[400px] lg:h-[800px] lg:-ml-12 order-2 lg:order-1">
              {/* <MasonryGrid images={experiences} /> */}
              <VideoGrid videos={videos} />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:space-y-8 pt-4 lg:pt-12 lg:ml-8 order-1 lg:order-2">
              <div className="relative">
                <span className="text-[80px] sm:text-[100px] lg:text-[140px] font-serif leading-none text-[#F8C1B7]">
                  02.
                </span>
                <h2 className="absolute top-1/2 left-16 sm:left-24 lg:left-32 -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-black">
                  EXPERIENCES
                </h2>
                {/* Shadow Text */}
                <h2 className="absolute top-1/2 left-16 sm:left-24 lg:left-32 -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-black/10 blur-sm">
                  EXPERIENCES
                </h2>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="w-12 sm:w-16 h-0.5 bg-orange-500"></div>
                <p className="text-gray-600 max-w-md text-sm sm:text-base font-semibold leading-relaxed text-justify">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>

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
        </div>
      </section>
  )
}