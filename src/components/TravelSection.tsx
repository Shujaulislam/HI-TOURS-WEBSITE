import Image from 'next/image'
import MasonryGrid from './UI/MasonryGrid'

const travelStyles = [
  {
    title: 'Family Vacations',
    image: '/placeholder.jpg',
    alt: 'Family walking on beach'
  },
  {
    title: 'Business Trips',
    image: '/placeholder.jpg',
    alt: 'Business people meeting'
  },
  {
    title: 'Group Series',
    image: '/placeholder.jpg',
    alt: 'Group hiking adventure'
  },
  {
    title: 'Private Tour',
    image: '/placeholder.jpg',
    alt: 'Couple enjoying sunset'
  }
]

export default function TravelSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Pentagon Shape */}
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[85vh]"
        style={{
          background: 'url(/airplane.jpg) no-repeat center center',
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 50% 100%, 0 50%)'
        }}
      >

        {/* Content Container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-20 relative z-10">
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
                <MasonryGrid images={travelStyles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
