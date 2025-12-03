"use client";
import Image from "next/image";

const brands = [
  {
    image: "/brands/APA_1.jpg",
    name: "APA Brand Logo",
  },
  {
    image: "/brands/SkyTouch_1.jpg",
    name: "SkyTouch Brand Logo",
  },
  {
    image: "/brands/LeadsX_1.jpg",
    name: "LeadsX Brand Logo",
  },
];

const MyBrands = () => {
  return (
    <div id="about" className="bg-white py-10">
      <div className="flex justify-center items-center text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r 
        from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          My Brands
        </h1>
      </div>

      <div className="w-full flex items-center justify-center px-4">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            sm:gap-16 gap-4
            place-items-center
          "
        >
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center ">
              <Image
                src={brand.image}
                alt={brand.name}
                width={300}
                height={300}
                className="shadow-md rounded-xl w-70 sm:w-72 md:w-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
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
