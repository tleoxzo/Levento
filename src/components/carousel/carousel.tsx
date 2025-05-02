"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from 'next/image'

const images = [
  "/images/carousel/ph1.jpg",
  "/images/carousel/ph2.jpg",
  "/images/carousel/ph3.jpg",
  "/images/carousel/ph4.jpg",
  "/images/carousel/ph5.jpg",
];

export const CarouselApp = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % total);
  //   }, 40000);
  //   return () => clearInterval(interval);
  // }, [total]);

  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) next();
    if (touchEndX - touchStartX > 50) prev();
  };

  const getIndex = (offset: number) =>
    (current + offset + images.length) % images.length;

  return (
    <div className="relative flex items-center overflow-hidden">
      <div className="relative z-10 w-full px-6 max-w-5xl mx-auto p-6">
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <Button
            onClick={prev}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full z-30"

          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div
            className="flex justify-center items-center gap-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {[ -1, 0, 1 ].map((offset) => {
              const index = getIndex(offset);
              const isCenter = offset === 0;

              return (
                <div
                  key={`${index}-${current}`}
                  className={`relative w-48 h-80 rounded-2xl overflow-hidden shadow-xl shrink-0 transform transition-all duration-500 ease-in-out ${
                    isCenter
                      ? "w-64 h-96 scale-110 z-20 opacity-100"
                      : "scale-90 opacity-50 z-10"
                  }`}
                  style={{
                    animation: offset === -1
                      ? "slideInFromLeft 0.5s"
                      : offset === 1
                      ? "slideInFromRight 0.5s"
                      : "fadeIn 0.5s ease-in-out",
                  }}
                >
                  <Image
                    src={images[index]}
                    alt={`Image ${index}`}
                    width={800}
                    height={600}
                    className=" object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            onClick={next}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-9 space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Animations */}
      <style jsx>{`
       @keyframes slideInFromLeft {
        from {
          transform: translateX(-40%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideInFromRight {
        from {
          transform: translateX(40%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      } 

        /* Responsiveness */
        @media (max-width: 1024px) {
          .relative {
            width: 90%; /* Adjust width for tablets */
          }
          .w-64 {
            width: 50%; /* Adjust width for smaller screens */
          }
          .w-48 {
            width: 45%; /* Adjust for smaller screens */
          }
        }

        @media (max-width: 768px) {
          .relative {
            width: 100%; /* Full width for small tablets */
          }
          .w-64 {
            width: 75%; /* Adjust width for smaller screens */
          }
          .w-48 {
            width: 80%; /* Adjust for small screens */
          }
        }

        @media (max-width: 480px) {
          .w-64 {
            width: 90%; /* 90% width on mobile */
          }
          .w-48 {
            width: 90%; /* Full width on mobile */
          }
        }
      `}</style>
    </div>
  );
};
