import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import MasonryGrid from '@/components/UI/MasonryGrid'

export default function ExperiencesSection() {
  const experiences = [
    {
      title: 'Experience Wildlife',
      image: '/images/wildlife.jpg',
      alt: 'Wildlife experience'
    },
    {
      title: 'Chase Adventure',
      image: '/images/adventure.jpg',
      alt: 'Adventure experience'
    },
    {
      title: 'Find Opportunities',
      image: '/images/opportunities.jpg',
      alt: 'Opportunities'
    },
    {
      title: 'Live Culture',
      image: '/images/culture.jpg',
      alt: 'Cultural experience'
    },
    {
      title: 'Witness History',
      image: '/images/history.jpg',
      alt: 'Historical monuments'
    }
  ]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Mountain Image - Adjusted to be more prominent */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mountains.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content - Adjusted max width and padding */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-20 md:px-20">
        <div className="grid md:grid-cols-[1.3fr,1fr] gap-24">
          {/* Left Side - Masonry Grid */}
          <div className="h-[800px] -ml-12">
            <MasonryGrid images={experiences} />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 pt-12 ml-8">
            <div className="relative">
              <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                02.
              </span>
              <h2 className="absolute top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black">
                EXPERIENCES
              </h2>
              {/* Shadow Text */}
              <h2 className="absolute top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black/10 blur-sm">
                EXPERIENCES
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

            <div className="flex items-center gap-4">
              <motion.button
                className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-white text-xl">+</span>
              </motion.button>
              <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wider">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}