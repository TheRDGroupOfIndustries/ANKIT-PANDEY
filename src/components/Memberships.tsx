"use client";
import Image from "next/image";
import React from "react";

const brands = [
  // { image: "/memberships/bni.jpg", name: "BNI" },
  { image: "/memberships/bni2.jpg", name: "BNI 2" },
  { image: "/memberships/jbf.jpg", name: "JBF" },
  { image: "/memberships/jsk.jpg", name: "JSK" },
  { image: "/memberships/uoci.jpg", name: "UOCI" },
];

const Memberships = () => {
  return (
    <div id="about" className="bg-gray-50 py-10">
      <div className="flex justify-center items-center text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r 
        from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          Trusted Networks​
        </h1>
      </div>

      <div className="w-full flex justify-center px-4">
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-4 
            gap-8 sm:gap-16
            place-items-center
          "
        >
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={brand.image}
                alt={brand.name}
                width={250}
                height={250}
                className="shadow-md rounded-xl w-32 sm:w-40 md:w-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memberships;