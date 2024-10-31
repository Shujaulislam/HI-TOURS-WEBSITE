'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Map() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content - Adjusted max width and padding */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-20 md:px-20">
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-24">
          {/* Left Side - Single Image */}
          <div className="h-auto relative">
            <Image
              src="/map.webp"
              alt="Description of single image"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 pt-12 ml-8">
            <div className="relative flex">
              <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                05.
              </span>
              <h2 className="absolute top-1/2 text-right left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black">
                New Age Destination Management
              </h2>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-orange-500"></div>
              <p className="text-gray-600 max-w-md text-sm leading-relaxed text-justify">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="flex gap-4 mr-36 justify-end">
              <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wider">
                Know More
              </button>
            <motion.button
                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7.5C8 6.67157 8.67157 6 9.5 6H14.5C15.3284 6 16 6.67157 16 7.5V17L11.5 14L7 17V7.5Z" fill="white" />
                </svg>
              </motion.button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}