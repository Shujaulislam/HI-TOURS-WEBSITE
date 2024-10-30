import { motion } from 'framer-motion';
import Image from 'next/image';


export default function TravelSection() {
  const travelStyles = [
    {
      title: 'FAMILY VACATIONS',
      image: '/family.jpg',
      alt: 'Family on beach'
    },
    {
      title: 'BUSINESS TRIPS',
      image: '/business.jpg',
      alt: 'Business meeting'
    },
    {
      title: 'GROUP SERIES',
      image: '/group.jpg',
      alt: 'Group hiking'
    },
    {
      title: 'PRIVATE TOUR',
      image: '/private.jpg',
      alt: 'Private tour'
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-white">
      {/* Custom polygon Shape */}
      <div 
        className="static top-0 left-0 right-0 -mb-24 w-full h-[1200px]"
        style={{
          background: 'url(/airplane.jpg) no-repeat center center',
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 50% 100%, 0 75%)'
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
            <div className="col-span-8">
              {/* Grid Section */}
              <div className="grid grid-cols-12 gap-6 mt-10">
                <div className="col-span-5">
                  {/* Your existing left content */}
                </div>

                {/* Travel Styles Grid */}
                <div className="col-span-7">
                  <div className="grid grid-cols-2 gap-6 relative">
                    {travelStyles.map((style, index) => (
                      <div 
                        key={index}
                        className={`relative aspect-[1.2/1] rounded-3xl overflow-hidden shadow-lg
                          ${index >= 2 ? '-mt-12' : ''}`} // Adds negative margin to bottom row
                      >
                        <Image
                          src={style.image}
                          alt={style.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                          <div className="absolute bottom-6 left-6 text-white">
                            <span className="uppercase text-sm tracking-[0.15em] font-medium">
                              {style.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text div */}
        <div 
            className="static inline-block left-0 -mt-96 w-1/2 h-[1000px]"
            style={{
            background: '#D85827', // Orange color
            clipPath: 'polygon(0 0, 100% 30%, 100% 70%, 0 100%)',
            // Point A: 0 0       (top-left)
            // Point B: 100% 30%  (top-right, angled down)
            // Point C: 100% 70%  (bottom-right)
            // Point D: 0 100%    (bottom-left)
            top: '38rem'
            }}
        >
            <div className="container mx-auto px-20 pt-32">
            <div className="flex items-baseline gap-4">
                <span 
                className="text-[130px] font-light leading-none text-[#fe8560] font-serif"
                style={{ opacity: 0.8 }}
                >
                04.
                </span>
                <div className="w-28 h-1 bg-white"></div>
            </div>
            <div className="mt-8 max-w-md">
            {/* <div className="w-28 h-1 bg-white"></div> */}
                <h2 className="text-right text-white text-6xl font-light leading-tight">
                Journeys
                <br />
                that
                <br />
                can't be
                <br />
                <span className="font-normal text-black">beat.</span>
                </h2>
            </div>
            </div>
        </div>
     
        {/* video player */}
        <div
            className='static inline-block -mt-96 w-1/2 h-[800px]' 
            style={{
            background: '#FF6800', // Orange color
            clipPath: 'polygon(8% 70%, 100% 35%, 100% 60%, 8% 96%)',
            // Point A: 0 0       (top-left)
            // Point B: 100% 30%  (top-right, angled down)
            // Point C: 100% 70%  (bottom-right)
            // Point D: 0 100%    (bottom-left)
            top: '38rem'
            }}
        >
        <Image src="/video.jpg" alt="video" fill className="object-cover" />
        </div>

    </section>
  )
}
