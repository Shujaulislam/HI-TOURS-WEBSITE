import Image from 'next/image'

export default function FeatureSection() {
  const features = [
    {
      title: 'UNIQUE TOURS',
      image: '/feature/camelatbeach.webp',
      alt: 'Camel on beach with mountains in background',
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
    },
    {
      title: 'GLOBAL PRESENCE',
      image: '/feature/worldmap.jpg',
      alt: 'World map with passport and camera',
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
    },
    {
      title: '25 YEARS OF EXPERIENCE',
      image: '/feature/tourist.jpg',
      alt: 'Tourist in front of architectural monument',
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
    }
  ]

  return (
    <section className="mt-10 py-20">
      <div className="max-w-full mx-auto relative">
        {/* Orange connecting line - set to lower z-index */}
        <div className="absolute top-[25%] left-0 right-0 hidden md:block -z-10">
          <div className="relative h-0.5 bg-orange-500 mx-12">
            {/* Dots on the line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500" />
          </div>
        </div>

        {/* Feature cards - ensure higher z-index */}
        <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-28"> {/* need to change gap */}
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white">
              {/* Image container */}
              <div className="relative w-full aspect-square mb-8">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>

              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-orange-500 mb-4" />

              {/* Description */}
              <p className="text-sm text-gray-600 max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}