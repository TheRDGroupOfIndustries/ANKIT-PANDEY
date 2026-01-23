"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = Array.from({ length: 20 }, (_, i) => ({
  src: `/Roi_images/Roi_image (${i + 1}).jpeg`,
  name: `Roi Image ${i + 1}`,
}));

export default function RoiImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(autoplay);
  }, []);

  return (
    <div className="w-full py-10 bg-gray-100">
      {/* --------- ROI TEXT HEADER  --------- */}
      <div className="flex justify-center items-center mb-2">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          ROI Excellence
        </h1>
      </div>

      <section className="">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Sub-header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Where Smart Strategy Turns Into
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                {" "}
                Scalable Revenue
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how precision-driven marketing, optimized funnels and performance-led execution
              fuel exponential business growth. These results aren’t promises, they’re proven success
              stories from brands that chose to scale smarter.
            </p>
          </div>

          {/* --------- Modern Premium Carousel --------- */}
          <div className="relative w-full h-72 md:h-[400px] overflow-hidden rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 bg-white/10">
            {/* Fade-in Transition Image */}
            <Image
              src={images[index].src}
              alt={images[index].name}
              width={1920}
              height={1080}
              className="w-full h-full object-contain transition-opacity duration-700"
            />

            {/* Left Arrow */}
            <button
              onClick={() =>
                setIndex((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 sm:w-12 sm:h-12 w-8 h-8  bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>

            {/* Right Arrow */}

            <button
              onClick={() => setIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 sm:w-12 sm:h-12 w-8 h-8 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>

            {/* Dots */}
          </div>
          <div className="flex gap-2 justify-center mt-4">
            {images.map((_, i) => {
              const active = i === index;

              return (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`
          h-3 rounded-full cursor-pointer transition-all duration-300 
          ${active ? "bg-blue-600 w-6" : "bg-gray-300 w-3 hover:bg-gray-400"}
        `}
                />
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/roi"
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition font-medium"
            >
              See More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
