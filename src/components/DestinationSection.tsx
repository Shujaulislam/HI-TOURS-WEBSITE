import { ChevronRight } from 'lucide-react';
import Card from './Card';
import { motion } from 'framer-motion';

export default function DestinationsSection() {
  return (
    <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[1fr,1fr] gap-16">
        {/* Left Content */}
        <div className="space-y-12">
          <div className="space-y-8">
            {/* Number and Title with Shadow */}
            <div className="relative">
              <span className="text-[140px] font-serif leading-none text-[#F8C1B7]">
                01.
              </span>
              <h2 className="absolute top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black">
                DESTINATIONS
              </h2>
              {/* Shadow Text */}
              <h2 className="absolute top-1/2 left-32 -translate-y-1/2 text-5xl font-serif tracking-[0.2em] text-black/10 blur-sm">
                DESTINATIONS
              </h2>
            </div>

            {/* Orange Line and Description */}
            <div className="space-y-6">
              <div className="w-16 h-0.5 bg-orange-500"></div>
              <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Button section remains unchanged */}
            <div className="flex items-center gap-4">
              {/* Bookmark Icon */}
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

        {/* Right Content - Cards */}
        <div className="relative">
          <div className="flex gap-8 overflow-hidden">
            <Card
              title="ACADIA NATIONAL PARK"
              description="Journeys that can't be beat"
              image="/placeholder.svg?height=600&width=450"
              className="rounded-[2rem] overflow-hidden"
              titleClassName="text-white text-3xl font-bold tracking-wider drop-shadow-lg"
            />
            <Card
              title="ACADIA NATIONAL PARK"
              description="Journeys that can't be beat"
              image="/placeholder.svg?height=600&width=450"
              className="rounded-[2rem] overflow-hidden"
              titleClassName="text-white text-3xl font-bold tracking-wider drop-shadow-lg"
            />
          </div>

          {/* Navigation Arrow */}
          <button className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-white/90 transition-colors shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
