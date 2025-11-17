import Image from "next/image";
import React from "react";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel";

const partners = [
  {
    image: "/partners/IMG-20251117-WA0033.jpg",
    name: "IMG-20251117-WA0033",
  },
  {
    image: "/partners/IMG-20251117-WA0034.jpg",
    name: "IMG-20251117-WA0034",
  },
  {
    image: "/partners/IMG-20251117-WA0035.jpg",
    name: "IMG-20251117-WA0035",
  },
  {
    image: "/partners/IMG-20251117-WA0036.jpg",
    name: "IMG-20251117-WA0036",
  },
  {
    image: "/partners/IMG-20251117-WA0037.jpg",
    name: "IMG-20251117-WA0037",
  },
  {
    image: "/partners/IMG-20251117-WA0038.jpg",
    name: "IMG-20251117-WA0038",
  },
  {
    image: "/partners/IMG-20251117-WA0039.jpg",
    name: "IMG-20251117-WA0039",
  },
  {
    image: "/partners/IMG-20251117-WA0040.jpg",
    name: "IMG-20251117-WA0040",
  },
  {
    image: "/partners/IMG-20251117-WA0041.jpg",
    name: "IMG-20251117-WA0041",
  },
  {
    image: "/partners/IMG-20251117-WA0042.jpg",
    name: "IMG-20251117-WA0042",
  },
  {
    image: "/partners/IMG-20251117-WA0043.jpg",
    name: "IMG-20251117-WA0043",
  },
  {
    image: "/partners/IMG-20251117-WA0044.jpg",
    name: "IMG-20251117-WA0044",
  },
  {
    image: "/partners/IMG-20251117-WA0045.jpg",
    name: "IMG-20251117-WA0045",
  },
  {
    image: "/partners/IMG-20251117-WA0046.jpg",
    name: "IMG-20251117-WA0046",
  },
  {
    image: "/partners/WhatsApp Image 2025-11-17 at 20.04.45_b1dbeee1.jpg",
    name: "WhatsApp Image 2025-11-17 at 20.04.45_b1dbeee1",
  },
];

const Partnerships = () => {
  return (
    <div id="about" className="bg-white py-10">
      <div className=" flex justify-center items-center text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          Partnerships{" "}
        </h1>
      </div>
      <InfiniteScrollCarousel partners={partners} dir="right" speed="slow" />

      {/* Header */}
      <div className="text-center">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "All Leading Radio, Cinema & Newspapers In Varanasi Through Verified &
          Trusted Vendors"
        </p>
      </div>
    </div>
  );
};

export default Partnerships;
