"use client";

import Image from "next/image";
import { useState } from "react";

export default function RoiPage() {
  // 33 images auto-generated
  const images = Array.from({ length: 33 }, (_, i) => ({
    src: `/Roi_images/Roi_image (${i + 1}).jpeg`,
    alt: `ROI Image ${i + 1}`,
  }));

  // Lightbox state
  const [lightbox, setLightbox] = useState<null | string>(null);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 ">

      {/* ------------ TOP TEXT ------------- */}
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Real ROI Gallery
        </h1>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Explore real-case ROI snapshots delivered through high-performance digital
          marketing, optimized funnels, and proven strategies.
        </p>
      </div>

      {/* ------------ IMAGE GALLERY ------------ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-20">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setLightbox(img.src)}
            className="relative w-full h-48 md:h-56 lg:h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* ------------ FULLSCREEN LIGHTBOX MODAL ------------ */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-pointer"
        >
          <div className="relative w-[90vw] h-[90vh] ">
            <Image
              src={lightbox}
              alt="Preview"
              fill
              className="object-contain "
            />

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white/90 text-black rounded-full px-3 py-1 text-xl font-bold shadow-lg hover:bg-white"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
