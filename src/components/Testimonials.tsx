import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  review: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    image: "/testimonial/avatar-female.png",
    review: "My experience with this travel agency was nothing short of amazing. The attention to detail in planning my trip was impeccable. Every destination, every activity, was carefully curated to match my preferences. I felt like I was on a personalized adventure crafted just for me."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Adventure Seeker",
    image: "/testimonial/avatar-male-2.png",
    review: "As someone who loves off-the-beaten-path experiences, I was thoroughly impressed. They managed to find hidden gems that I wouldn't have discovered on my own. The local guides were knowledgeable and passionate, making each day an exciting new adventure."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Traveler",
    image: "/testimonial/avatar-male-1.png",
    review: "Traveling with kids can be challenging, but this agency made it a breeze. They thought of everything - from kid-friendly activities to accommodations that cater to families. It was a stress-free vacation that both the adults and children enjoyed immensely."
  }
]

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Travelers Say
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-300"
                >
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <blockquote className="text-gray-700 text-lg italic mb-4">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                <div className="font-semibold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-purple-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow-md text-gray-800 focus:outline-none"
              onClick={prevTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white rounded-full p-2 shadow-md text-gray-800 focus:outline-none"
              onClick={nextTestimonial}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
                index === currentTestimonial ? 'bg-purple-600' : 'bg-purple-200'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}