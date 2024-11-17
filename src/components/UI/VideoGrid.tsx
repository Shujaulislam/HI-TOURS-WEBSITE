"use client"

import { motion } from 'framer-motion'
import React from 'react'

interface GridVideo {
  title: string
  video: string
  alt: string
}

interface VideoGridProps {
  videos: GridVideo[]
}

const GridItem: React.FC<{ video: GridVideo; className?: string }> = ({ video, className = '' }) => (
  <motion.div
    className={`relative rounded-xl sm:rounded-2xl overflow-hidden ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <video
      src={video.video}
      className="absolute w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium">
        <span className="uppercase text-xs sm:text-sm tracking-wide">{video.title}</span>
      </div>
    </div>
  </motion.div>
)

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const displayVideos = isMobile ? videos.slice(0, 4) : videos;

  // Dynamic class assignments based on number of videos and screen size
  const getGridClasses = (index: number, total: number): string => {
    // Mobile layout (2x2 grid)
    const mobileLayouts: Record<number, string[]> = {
      4: [
        'col-span-3 row-span-2', // Top left
        'col-span-3 row-span-2', // Top right
        'col-span-3 row-span-2', // Bottom left
        'col-span-3 row-span-2'  // Bottom right
      ]
    };

    // Desktop layout (masonry-style)
    const desktopLayouts: Record<number, string[]> = {
      5: [
        'col-span-3 row-span-2', // Experience Wildlife
        'col-span-2 row-span-3', // Chase Adventure
        'col-span-1 row-span-3', // Find Opportunities
        'col-span-3 row-span-4', // Live Culture
        'col-span-3 row-span-3'  // Witness History
      ]
    };

    if (isMobile) {
      return mobileLayouts[4][index] || 'col-span-3 row-span-2';
    }
    return desktopLayouts[5][index] || 'col-span-3 row-span-2';
  }

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-3 lg:gap-4 auto-rows-[80px] sm:auto-rows-[100px] w-full h-full">
      {displayVideos.map((video, index) => (
        <GridItem
          key={index}
          video={video}
          className={getGridClasses(index, displayVideos.length)}
        />
      ))}
    </div>
  )
}

export default VideoGrid
