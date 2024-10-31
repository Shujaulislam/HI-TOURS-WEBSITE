'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';



export default function TravelSection() {
    const travelCards = [
        {
          title: 'Family Vacations',
          image: '/placeholder.svg?height=300&width=300',
          alt: 'Family running on beach'
        },
        {
          title: 'Business Trips',
          image: '/placeholder.svg?height=300&width=300',
          alt: 'Business people in discussion'
        },
        {
          title: 'Group Series',
          image: '/placeholder.svg?height=300&width=300',
          alt: 'Hiker on mountain peak'
        },
        {
          title: 'Private Tour',
          image: '/logo.webp',
          alt: 'Couple at sunset'
        }
      ];
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
    <section className="bg-black z-10 min-h-screen w-full"
    style={{
        // (0 0): Top-left corner
        // (100% 0): Top-right corner 
        // (100% 75%): Right side, 3/4 down
        // (28% 100%): Middle left bottom point
        // (50% 100%): Middle righ bottom point
        // (50% 100%): Same middle bottom point (duplicated)
        // (0 75%): Left side, 3/4 down
        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 28% 100%, 75% 100%, 0 75%)',

    }}>
      {/* Custom polygon Shape */}
      <div 
        className="static top-0 left-0 right-0 -mb-24 w-full h-[1200px]"
        style={{
            // backgroundColor: '#F8C1B7',
          background: 'url(/airplane.jpg) no-repeat center center',
        //   backgroundSize: 'cover',
        //   clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 50% 100%, 0 75%)',
        //   border: '2px solid #000' // Added border to make shape visible
        }}
      >
        {/* Content Container */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-12 gap-x-16">
            {/* Left Content */}
            <div className="col-span-4">
              <div className="flex items-baseline gap-4">
                <span 
                  className="text-[140px] font-extralight leading-none text-[#E6B5A7]"
                  style={{ 
                    textShadow: '2px 2px 4px rgba(230, 181, 167, 0.3)',
                    fontFamily: 'serif'
                  }}
                >
                  03.
                </span>
                <h2 className="text-5xl font-light tracking-wide">
                  TRAVEL
                  <br />
                  STYLES
                </h2>
              </div>
              
              <div className="mt-12">
                <p className="text-gray-600 leading-relaxed">
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

            {/* Right Grid */}
             <div className="col-span-8 mt-10 grid grid-cols-2 gap-6">
                {travelVideos.map((style, index) => (
                    <div 
                        key={index}
                        className={`relative aspect-[1.2/1] rounded-3xl overflow-hidden shadow-lg 
                        ${index >= 2 ? 'translate-x-8' : ''}
                                    `}
                        >
                            <video
                                src={style.video}
                                className="absolute w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                <span className="absolute bottom-6 left-6 text-white uppercase text-sm tracking-wide font-medium">
                                    {style.title}
                                </span>
                            </div>
                    </div>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
