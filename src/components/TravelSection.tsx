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
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Custom polygon Shape */}
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[85vh]"
        style={{
          background: 'url(/airplane.jpg) no-repeat center center',
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0 51%)'
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
                <button className="mt-8 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-orange-600 hover:text-orange-700">
                  Know More
                  <span className="h-6 w-6 rounded-full bg-orange-600 text-white flex items-center justify-center">
                    →
                  </span>
                </button>
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
    </section>
  )
}
