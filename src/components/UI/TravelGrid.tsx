'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TravelCard {
  title: string
  image: string
  alt: string
}

interface TravelGridProps {
  cards: TravelCard[]
}

const TravelCard = ({ title, image, alt }: TravelCard) => (
  <motion.div
    className="relative overflow-hidden rounded-3xl"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white text-sm font-medium tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
)

export default function TravelGrid({ cards }: TravelGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      {/* Top row */}
      <div className="aspect-square">
        <TravelCard {...cards[0]} />
      </div>
      <div className="aspect-square">
        <TravelCard {...cards[1]} />
      </div>
      
      {/* Bottom row */}
      <div className="aspect-square">
        <TravelCard {...cards[2]} />
      </div>
      <div className="aspect-square">
        <TravelCard {...cards[3]} />
      </div>
    </div>
  )
}

