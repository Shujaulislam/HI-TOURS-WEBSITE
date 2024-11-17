'use client'
import { motion } from 'framer-motion';

export default function TravelSection() {

    const travelVideos = [
        {
          title: 'Family Vacations',
          video: '/travel/family.mp4',
          alt: 'Family running on beach'
        },
        {
          title: 'Business Trips',
          video: '/travel/business.mp4',
          alt: 'Business people in discussion'
        },
        {
          title: 'Group Series',
          video: '/travel/group.mp4',
          alt: 'Hiker on mountain peak'
        },
        {
          title: 'Private Tour',
          video: '/travel/private.mp4',
          alt: 'Couple at sunset'
        }
      ]

  return (
    <main className="relative w-full mb-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full opacity-50 md:opacity-100"
        style={{ backgroundImage: 'url(/airplane.jpg)' }}
      />
        <section className="relative px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-0">
            {/* Content Container */}
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-16">
                {/* Left Content */}
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                  <div className="flex items-baseline gap-2 sm:gap-4">
                    <span 
                      className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-extralight leading-none text-[#E6B5A7]"
                      style={{ 
                        textShadow: '2px 2px 4px rgba(230, 181, 167, 0.3)',
                        fontFamily: 'serif'
                      }}
                    >
                      03.
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide">
                      TRAVEL
                      <br />
                      STYLES
                    </h2>
                  </div>
                  
                  <div className="mt-6 lg:mt-12 flex flex-col flex-1">
                    <p className="text-gray-600 leading-relaxed font-semibold text-sm sm:text-base">
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a gallery of type.
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a gallery of type.
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a gallery of type.
                    </p>
                    <div className="flex items-center pt-4 pl-6 gap-4 mt-6 lg:mt-auto">
                      <motion.button
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                          <path d="M8 7.5C8 6.67157 8.67157 6 9.5 6H14.5C15.3284 6 16 6.67157 16 7.5V17L11.5 14L7 17V7.5Z" fill="white" />
                        </svg>
                      </motion.button>

                      {/* Know More Button */}
                      <button className="px-4 sm:px-6 py-2 border border-gray-300 rounded-full text-xs sm:text-sm text-gray-600 hover:bg-gray-200 active:bg-gray-100 transition-colors uppercase tracking-wider">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Grid */}
                <div className="w-full lg:w-2/5 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-4 lg:mt-10">
                    {travelVideos.map((style, index) => (
                        <div 
                            key={index}
                            className={`relative aspect-[1.2/1] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg 
                            ${index >= 2 ? 'lg:translate-x-8' : ''}
                            transform transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                            >
                                <video
                                    src={style.video}
                                    className="absolute w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline 
                                    preload="metadata" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                    <span className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white uppercase text-xs sm:text-sm tracking-wide font-medium">
                                        {style.title}
                                    </span>
                                </div>
                        </div>
                    ))}
                </div>
              </div>
            </div>
        </section>
    </main>
  )
}
