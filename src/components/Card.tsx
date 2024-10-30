import React from 'react'
import Image from 'next/image'

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  titleClassName?: string;
}

function Card({ 
  title = "Acadia National Park",
  description = "Journeys that can't be beat",
  image = "/card-1.webp",
}: CardProps) {
  return (
    <div
      className="aspect-[3/4] rounded-3xl overflow-hidden relative group cursor-pointer"
    >
      <Image 
        src={image} 
        alt={title}
        fill
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
        <div>
          <p className="text-white/70 text-sm mb-2">{description}</p>
          <h3 className="text-white text-xl uppercase">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
