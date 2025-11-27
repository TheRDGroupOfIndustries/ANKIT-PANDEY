"use client";
import Image from "next/image";
import React from "react";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel";

const brands = [
  {
    image: "/brands/APA.jpg",
    name: "APA Brand Logo", // Added descriptive name for alt text
  },
  {
    image: "/brands/SkyTouch.jpg",
    name: "SkyTouch Brand Logo", // Added descriptive name for alt text
  },
  {
    image: "/brands/LeadsX.jpg",
    name: "LeadsX Brand Logo", // Added descriptive name for alt text
  },
];

const MyBrands = () => {
  return (
    <div id="about" className="bg-white py-10">
      <div className=" flex justify-center items-center text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          My Brands{" "}
        </h1>
      </div>
      <InfiniteScrollCarousel partners={brands} dir="left" speed="fast" />
    </div>
  );
};

export default MyBrands;

//  <section className=" ">
//         <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
//           {/* Removed the unnecessary 'space-y-8 col-span-3' wrapper */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {brands.map((brand) => (
//               <div
//                 key={brand.image}
//                 className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 flex justify-center items-center"
//               >
//                 <Image
//                   src={brand.image}
//                   width={400}
//                   height={300}
//                   alt={brand.name}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
