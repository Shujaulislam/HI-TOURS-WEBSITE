import Image from 'next/image';
import React, { useState } from 'react';

const Testimonials = () => {        
    return (
        <section className="py-8 sm:py-12 lg:py-20 bg-blend-hue bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-base sm:text-lg font-medium text-gray-600 font-pj px-2">
                            2,157 people have said how good Hi-Tours is
                        </p>
                        <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-pj px-2">
                            Our happy clients say about us
                        </h2>
                    </div>

                    <div className="mt-6 sm:mt-8 md:mt-16 md:order-3 text-center">
                        <a 
                            href="#" 
                            className="inline-block pb-2 text-sm sm:text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
                        > 
                            Check all 2,157 reviews 
                        </a>
                    </div>

                    <div className="relative mt-8 sm:mt-10 md:mt-24 md:order-2 w-full">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div 
                                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                                style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}
                            ></div>
                        </div>

                        <div className="relative grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-10 px-4 sm:px-6">
                            {/* Testimonial Card 1 */}
                            <div className="flex flex-col overflow-hidden shadow-xl rounded-[20px] sm:rounded-[40px]">
                                <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 lg:p-8 bg-white">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg 
                                                    key={i}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB241]" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <blockquote className="flex-1 mt-6 sm:mt-8">
                                            <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-semibold font-pj">
                                                "My experience with this travel agency was nothing short of amazing. The attention to detail in planning my trip was impeccable. Every destination, every activity, was carefully curated to match my preferences."
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-6 sm:mt-8">
                                        <Image 
                                            className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11"
                                            src="/testimonial/avatar-male-1.png"
                                            alt="profile picture"
                                            width={44}
                                            height={44}
                                        />
                                        <div className="ml-3 sm:ml-4">
                                            <p className="text-sm sm:text-base font-bold text-gray-900 font-pj">Leslie Alexander</p>
                                            <p className="mt-0.5 text-xs sm:text-sm font-pj text-gray-600">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl rounded-[20px] sm:rounded-[40px]">
                                <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 lg:p-8 bg-white">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg 
                                                    key={i}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB241]" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <blockquote className="flex-1 mt-6 sm:mt-8">
                                            <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-semibold font-pj">
                                                "My experience with this travel agency was nothing short of amazing. The attention to detail in planning my trip was impeccable. Every destination, every activity, was carefully curated to match my preferences."
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-6 sm:mt-8">
                                        <Image 
                                            className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11"
                                            src="/testimonial/avatar-male-2.png"
                                            alt="profile picture"
                                            width={44}
                                            height={44}
                                        />
                                        <div className="ml-3 sm:ml-4">
                                            <p className="text-sm sm:text-base font-bold text-gray-900 font-pj">Jacob Jones</p>
                                            <p className="mt-0.5 text-xs sm:text-sm font-pj text-gray-600">Adventure Seeker</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl rounded-[20px] sm:rounded-[40px]">
                                <div className="flex flex-col justify-between flex-1 p-4 sm:p-6 lg:p-8 bg-white">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg 
                                                    key={i}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDB241]" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <blockquote className="flex-1 mt-6 sm:mt-8">
                                            <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-semibold font-pj">
                                                "My experience with this travel agency was nothing short of amazing. The attention to detail in planning my trip was impeccable. Every destination, every activity, was carefully curated to match my preferences."
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-6 sm:mt-8">
                                        <Image 
                                            className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11"
                                            src="/testimonial/avatar-female.png"
                                            alt="profile picture"
                                            width={44}
                                            height={44}
                                        />
                                        <div className="ml-3 sm:ml-4">
                                            <p className="text-sm sm:text-base font-bold text-gray-900 font-pj">Jenny Wilson</p>
                                            <p className="mt-0.5 text-xs sm:text-sm font-pj text-gray-600">Family Traveler</p>
                                        </div>
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
export default Testimonials;