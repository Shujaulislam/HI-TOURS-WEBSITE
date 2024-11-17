'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1800px] mx-auto px-3 py-8 sm:px-6 sm:py-12 md:px-20 md:py-20">
        <div className="grid sm:gap-6 md:grid-cols-[1.3fr,1fr] md:gap-12 lg:gap-24">
          {/* Left Side - Single Image */}
          <div className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-auto relative">
            <Image
              src="/map.webp"
              alt="Description of single image"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 pt-6 sm:pt-8 md:pt-12 md:ml-8">
            <div className="relative flex flex-col items-start md:items-end text-left md:text-right">
              <span className="text-[60px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-serif leading-none text-[#F8C1B7]">
                05.
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.15em] sm:tracking-[0.2em] text-black mt-2 sm:mt-3 md:mt-4">
                New Age<br />
                Destination<br />
                Management
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-start md:items-end">
              <div className="w-12 sm:w-16 h-0.5 bg-orange-500"></div>
              <p className="text-gray-600 max-w-md font-semibold text-sm sm:text-base leading-relaxed text-left md:text-right">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}