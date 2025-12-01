"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClientReviewsPage() {
  const images = Array.from({ length: 74 }).map((_, i) => ({
    src: `/client-review/client_image (${i + 1}).jpeg`,
  }));

  // Fullscreen modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      {/* Back Button */}
      <div className="px-4 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-full 
               hover:bg-black transition-all text-sm sm:text-base"
        >
          <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
          Back 
        </Link>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-100"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] h-[90%] max-w-4xl">
            <Image
              src={selectedImage}
              alt="Full Image"
              fill
              className="object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client Reviews{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
              Gallery
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the client reviews shared by our amazing community.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.src)}
              className="cursor-pointer relative w-full h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <LazyImage src={img.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   LAZY IMAGE COMPONENT (Same file)
------------------------------------------------------- */

function LazyImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full  rounded-xl overflow-hidden"
    >
      {isVisible ? (
        <Image src={src} alt="Client Review" fill className="object-contain" />
      ) : (
        <div className="w-full h-full animate-pulse  rounded-xl" />
      )}
    </div>
  );
}
