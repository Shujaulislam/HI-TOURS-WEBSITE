'use client'

import { useAnimate } from "framer-motion";
import React, { MouseEventHandler, ReactNode, useRef, useState, useEffect } from "react";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

export const Example = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MouseImageTrail
      renderImageBuffer={isMobile ? 30 : 50}
      rotationRange={isMobile ? 15 : 25}
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
      <div className="absolute pointer-events-none px-4 sm:px-6 md:px-0 top-[10px] left-[2%] right-[2%] md:left-[5%] md:right-auto">
          <div className="flex items-center">
            <span className="text-[80px] sm:text-[120px] md:text-[160px] font-mono text-[#E6B5A7] leading-none">04.</span>
            <div className="bg-black w-[60px] sm:w-[100px] md:w-[150px] h-1 sm:h-1.5 md:h-2 mb-8 sm:mb-16 md:mb-24 ml-3 sm:ml-6 md:ml-9 self-end" />
          </div>
          <p className="text-[32px] sm:text-[60px] md:text-[90px] font-mono text-black/70 -mt-4 sm:-mt-8 md:-mt-12 ml-4 sm:ml-16 md:ml-72 leading-tight" 
             style={{
               textShadow: '1px 1px 0px rgba(0,0,0,0.15)', 
               letterSpacing: '0.02em',
             }}>
            Journeys that can&apos;t be{' '}
            <span className="font-extrabold block sm:inline">beat.</span>
          </p>
        </div>
        <div className="relative z-50">
          <p className="flex items-center gap-2 text-xl sm:text-3xl md:text-5xl font-bold uppercase text-black">
            <FiMousePointer className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            <span>{isMobile ? 'Touch & Move' : 'Hover me'}</span>
          </p>
        </div>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
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
  const [isMobile, setIsMobile] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 192, height: 192 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) {
        setImageSize({ width: 120, height: 120 });
      } else if (width < 768) {
        setImageSize({ width: 150, height: 150 });
      } else {
        setImageSize({ width: 192, height: 192 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInteraction = (clientX: number, clientY: number) => {
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

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isMobile) {
      handleInteraction(e.clientX, e.clientY);
    }
  };

  const handleTouch: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (isMobile) {
      const touch = e.touches[0];
      handleInteraction(touch.clientX, touch.clientY);
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
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
          `translate(-50%, -25%) scale(0.5) ${imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`}`,
          `translate(-50%, -50%) scale(1) ${imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`}`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: isMobile ? 3 : 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouch}
      onTouchStart={handleTouch}
    >
      {children}

      {images.map((img, index) => (
        <div
          key={index}
          data-mouse-move-index={index}
          className="pointer-events-none absolute left-0 top-0 h-[120px] sm:h-[150px] md:h-[192px] w-auto rounded-lg sm:rounded-xl border border-black sm:border-2 bg-neutral-900 opacity-0"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src={img}
            alt={`Trail image ${index + 1}`}
            width={imageSize.width}
            height={imageSize.height}
            className="object-cover rounded-lg sm:rounded-xl"
            priority={index < 5}
            loading={index < 5 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
    </div>
  );
};