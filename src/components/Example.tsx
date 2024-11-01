"use client"

import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

export const Example = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/active/1.jpg",
        "/active/2.jpg", 
        "/active/3.jpg",
        "/active/4.jpg",
        "/active/5.jpg",
        "/active/6.jpg",
        "/active/7.jpg",
        "/active/8.jpg",
        "/active/9.jpg",
        "/active/10.jpg",
        "/active/11.jpg",
        "/active/12.jpg",
        "/active/13.jpg",
        "/active/14.jpg",
        "/active/15.jpg",
        "/active/16.jpg",
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-white">
          {/* <span className="text-[160px] font-mono text-black/60 block mb-4 absolute left-[10%]">04.</span> */}
        <div className="absolute pointer-events-none" style={{ top: '10px', left: '5%' }}>
          <div className="flex items-center">
            <span className="text-[160px] font-mono text-[#E6B5A7]">04.</span>
            <div className="bg-black w-[150px] h-2 mb-24 ml-9 self-end" />
          </div>
          <p className="text-[90px] font-mono text-black/70 -mt-12 ml-72" style={{
            textShadow: '1px 1px 0px rgba(0,0,0,0.15)', 
            letterSpacing: '0.02em',
            // fontWeight: '300'
          }}>
            Journeys <br/> that <br/> can&apos;t be <br/> <span className="font-extrabold">beat.</span>
          </p>
        </div>
        <p className="flex items-center gap-2 text-5xl font-bold uppercase text-black z-50">
          <FiMousePointer />
          <span>Hover me</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    if (!el) return;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <div
          key={index}
          data-mouse-move-index={index}
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 opacity-0"
        >
          <Image
            src={img}
            alt={`Mouse move image ${index}`}
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};