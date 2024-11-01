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
            <div className="relative flex flex-col items-end text-right">
              <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                05.
              </span>
              <h2 className="text-5xl font-serif tracking-[0.2em] text-black mt-4">
                New Age<br />
                Destination<br />
                Management
              </h2>
            </div>

            <div className="space-y-6 flex flex-col items-end">
              <div className="w-16 h-0.5 bg-orange-500"></div>
              <p className="text-gray-600 max-w-md font-semibold text-base leading-relaxed text-right">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}