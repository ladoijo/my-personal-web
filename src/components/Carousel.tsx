'use client';

import { ReactNode, useEffect, useState } from 'react';

interface CarouselButtonProps {
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
  position: 'left' | 'right';
}

function CarouselButton({ onClick, ariaLabel, children, position }: CarouselButtonProps) {
  const positionClasses = position === 'left' ? 'left-2' : 'right-2';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-white p-3 text-sm
        hover:bg-black hover:text-white
        ${positionClasses}
      `}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop vs mobile (matches Tailwind's lg: breakpoint)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isDesktop ? 3 : 1;
  const step = isDesktop ? 100 / visibleCount : 100;

  const goToNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const goToPrev = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * step}%)` }}
        >
          {children}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <CarouselButton onClick={goToPrev} position="left" ariaLabel="Previous">
        ‹
      </CarouselButton>
      <CarouselButton onClick={goToNext} position="right" ariaLabel="Next">
        ›
      </CarouselButton>
    </div>
  );
}
