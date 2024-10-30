import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

interface GridImage {
  title: string
  image: string
  alt: string
}

interface MasonryGridProps {
  images: GridImage[]
}

const GridItem: React.FC<{ image: GridImage; className?: string }> = ({ image, className = '' }) => (
  <motion.div
    className={`relative rounded-2xl overflow-hidden ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src={image.image}
      alt={image.alt}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
      <div className="absolute bottom-4 left-4 text-white font-medium">
        <span className="uppercase text-sm tracking-wide">{image.title}</span>
      </div>
    </div>
  </motion.div>
)

export default function MasonryGrid({ images }: MasonryGridProps) {
  // Dynamic class assignments based on number of images
  const getGridClasses = (index: number, total: number) => {
    // Default classes for different layouts
    const layouts = {
      5: [
        'col-span-3 row-span-2', // Experience Wildlife
        'col-span-3 row-span-3', // Chase Adventure
        'col-span-2 row-span-2', // Find Opportunities
        'col-span-4 row-span-2', // Live Culture
        'col-span-3 row-span-2'  // Witness History
      ],
      4: [
        'col-span-3 row-span-2', // First image
        'col-span-3 row-span-2', // Second image
        'col-span-3 row-span-2', // Third image
        'col-span-3 row-span-2'  // Fourth image
      ],
      3: [
        'col-span-4 row-span-2', // First image
        'col-span-2 row-span-2', // Second image
        'col-span-6 row-span-2'  // Third image
      ],
      2: [
        'col-span-3 row-span-3', // First image
        'col-span-3 row-span-3'  // Second image
      ],
      1: [
        'col-span-6 row-span-4'  // Single image
      ]
    }

    // Get the appropriate layout based on total images
    const layoutArray = layouts[total as keyof typeof layouts] || layouts[5]
    return layoutArray[index] || 'col-span-3 row-span-2'
  }

  return (
    <div className="grid grid-cols-6 gap-4 auto-rows-[100px] w-full">
      {images.map((image, index) => (
        <GridItem
          key={index}
          image={image}
          className={getGridClasses(index, images.length)}
        />
      ))}
    </div>
  )
}

// Example usage:
export function ExampleUsage() {
  const images = [
    {
      title: 'Experience Wildlife',
      image: '/placeholder.svg?height=300&width=400',
      alt: 'Wildlife experience'
    },
    {
      title: 'Chase Adventure',
      image: '/placeholder.svg?height=400&width=300',
      alt: 'Hot air balloons'
    },
    {
      title: 'Find Opportunities',
      image: '/placeholder.svg?height=300&width=400',
      alt: 'Business meeting'
    },
    {
      title: 'Live Culture',
      image: '/placeholder.svg?height=400&width=400',
      alt: 'Cultural experience'
    },
    {
      title: 'Witness History',
      image: '/placeholder.svg?height=300&width=600',
      alt: 'Historical monument'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-4">
      <MasonryGrid images={images} />
    </div>
  )
}