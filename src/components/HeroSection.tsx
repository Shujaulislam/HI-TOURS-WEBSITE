'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect } from 'react'

export default function HeroSection() {
  return (
    <main className="relative bg-white min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: 'url(/petra-background.jpg)' }}
      />
  
      <section className="relative min-h-screen">
        {/* NavBar with increased padding */}
        <div className="absolute top-0 left-0 right-0 px-16 py-10 flex justify-between items-center">
          <div className="text-2xl">
            <Link href="#">
              <Image src="/logo.webp" alt="Hi Tours" width={100} height={100} />
            </Link>
          </div>
          <nav className="flex space-x-12 text-sm uppercase tracking-wider font-light">
            <Link className='text-white hover:text-gray-200' href="#about">About Us</Link>
            <Link className='text-white hover:text-gray-200' href="#destinations">Destinations</Link>
            <Link className='text-white hover:text-gray-200' href="#experiences">Experiences</Link>
            <Link className='text-white hover:text-gray-200' href="#travel-styles">Travel Styles</Link>
            <Link className='text-white hover:text-gray-200' href="#contact">Contact Us</Link>
          </nav>
        </div>

        {/* Social Media Icons with better positioning */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 text-white">
          <button onClick={() => {
            useEffect(() => {
              window.open('https://example.com/', '_blank', 'noopener,noreferrer')
            }, [])
          }}><FaFacebookF className="w-4 h-4" /></button>
          <button onClick={() => {
            useEffect(() => {
              window.open('https://example.com/', '_blank', 'noopener,noreferrer')
            }, [])
          }}><FaTwitter className="w-4 h-4" /></button>
          <button onClick={() => {
            useEffect(() => {
              window.open('https://example.com/', '_blank', 'noopener,noreferrer')
            }, [])
          }}><FaInstagram className="w-4 h-4" /></button>
          <p className="text-sm m-8 transform -rotate-90">Follow us on</p>
        </div>

        {/* Hero Content with adjusted spacing */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 max-w-xl text-right">
          <div className="flex items-center gap-6">
            <div className="w-[200px] border-t-4 border-white" />
            <p className="text-2xl uppercase tracking-widest text-white font-light">
              New Age Destination Management
            </p>
          </div>
          <h1 className="text-8xl font-light text-white leading-tight" style={{ fontFamily: 'serif' }}>
            Take the<br />world for<br />a ride
          </h1>
        </div>
      </section>

      {/* Journey Section with improved spacing */}
      <section className="relative px-16 pb-32">
        <div className='mb-24 flex items-center'>
          <div className='w-1/3 pr-10'>
            <div className="w-16 border-white mb-6"></div>
            <h2 className="text-gray-100 text-5xl font-light mb-6">Journeys that can't be beat</h2>
            <p className="text-gray-100 text-base font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="flex items-center gap-4 mt-4">
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
              <button className="px-6 py-2 border border-gray-300 rounded-full text-sm text-white hover:bg-gray-50 hover:text-gray-700 transition-colors uppercase tracking-wider">
              Know More
              </button>
            </div>
          </div>

          <div className="mt-48 grid grid-cols-4 gap-6 w-3/4 pt-12">
            {["Acadia National Park", "Blog Titles", "Acadia National Park", "Acadia National Park"].map((title, index) => (
            <div
              key={index}
              className="aspect-[3/4] rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <Image
              src={`/hero/Acadia.jpg`}
              alt={title}
              fill
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div>
                <p className="text-white/70 text-sm mb-2 before:content-['']">Journeys that can't be beat</p>
                <h3 className="text-white text-xl uppercase">{title}</h3>
              </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white"></div>
    </main>
  )
}