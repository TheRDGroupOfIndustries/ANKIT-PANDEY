"use client";
import Image from "next/image";
import React from "react";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel";

const brands = [
  {
    image: "/memberships/bni.jpg",
    name: "BNI", // Added descriptive name for alt text
  },
  {
    image: "/memberships/bni2.jpg",
    name: "BNI 2", // Added descriptive name for alt text
  },
  {
    image: "/memberships/jbf.jpg",
    name: "JBF", // Added descriptive name for alt text
  },
  {
    image: "/memberships/jsk.jpg",
    name: "JSK", // Added descriptive name for alt text
  },
  {
    image: "/memberships/uoci.jpg",
    name: "UOCI", // Added descriptive name for alt text
  },
];

const Memberships = () => {
  return (
    <div id="about" className="bg-gray-50 py-10">
      <div className=" flex justify-center items-center text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          Memberships{" "}
        </h1>
      </div>

     <InfiniteScrollCarousel partners={brands} dir="right" speed="fast" />
    </div>
  );
};

export default Memberships;


  // <section className=" ">
  //       <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
  //         {/* Removed the unnecessary 'space-y-8 col-span-3' wrapper */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  //           {brands.map((brand) => (
  //             <div
  //               key={brand.image}
  //               className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-pink-500 flex justify-center items-center"
  //             >
  //               <Image
  //                 src={brand.image}
  //                 width={400}
  //                 height={300}
  //                 alt={brand.name}
  //                 className="object-cover h-full w-full"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>