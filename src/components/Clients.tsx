import Image from "next/image";
import React from "react";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel";

const clients1 = [
  {
    image: "/clients/IMG-20251117-WA0047.jpg",
    name: "IMG-20251117-WA0047",
  },
  {
    image: "/clients/IMG-20251117-WA0048.jpg",
    name: "IMG-20251117-WA0048",
  },
  {
    image: "/clients/IMG-20251117-WA0049.jpg",
    name: "IMG-20251117-WA0049",
  },
  {
    image: "/clients/IMG-20251117-WA0050.jpg",
    name: "IMG-20251117-WA0050",
  },
  {
    image: "/clients/IMG-20251117-WA0051.jpg",
    name: "IMG-20251117-WA0051",
  },
  {
    image: "/clients/IMG-20251117-WA0052.jpg",
    name: "IMG-20251117-WA0052",
  },
  {
    image: "/clients/IMG-20251117-WA0053.jpg",
    name: "IMG-20251117-WA0053",
  },
  {
    image: "/clients/IMG-20251117-WA0054.jpg",
    name: "IMG-20251117-WA0054",
  },
  {
    image: "/clients/IMG-20251117-WA0055.jpg",
    name: "IMG-20251117-WA0055",
  },
  {
    image: "/clients/IMG-20251117-WA0056.jpg",
    name: "IMG-20251117-WA0056",
  },
  {
    image: "/clients/IMG-20251117-WA0057.jpg",
    name: "IMG-20251117-WA0057",
  },
  {
    image: "/clients/IMG-20251117-WA0058.jpg",
    name: "IMG-20251117-WA0058",
  },
  {
    image: "/clients/IMG-20251117-WA0059.jpg",
    name: "IMG-20251117-WA0059",
  },
  {
    image: "/clients/IMG-20251117-WA0060.jpg",
    name: "IMG-20251117-WA0060",
  },
  {
    image: "/clients/IMG-20251117-WA0061.jpg",
    name: "IMG-20251117-WA0061",
  },
  {
    image: "/clients/IMG-20251117-WA0062.jpg",
    name: "IMG-20251117-WA0062",
  },
  {
    image: "/clients/IMG-20251117-WA0063.jpg",
    name: "IMG-20251117-WA0063",
  },
  {
    image: "/clients/IMG-20251117-WA0064.jpg",
    name: "IMG-20251117-WA0064",
  },
  {
    image: "/clients/IMG-20251117-WA0065.jpg",
    name: "IMG-20251117-WA0065",
  },
  {
    image: "/clients/IMG-20251117-WA0066.jpg",
    name: "IMG-20251117-WA0066",
  },
  {
    image: "/clients/IMG-20251117-WA0067.jpg",
    name: "IMG-20251117-WA0067",
  },
  {
    image: "/clients/IMG-20251117-WA0068.jpg",
    name: "IMG-20251117-WA0068",
  },
];
const clients2 = [
  {
    image: "/clients/IMG-20251117-WA0069.jpg",
    name: "IMG-20251117-WA0069",
  },
  {
    image: "/clients/IMG-20251117-WA0070.jpg",
    name: "IMG-20251117-WA0070",
  },
  {
    image: "/clients/IMG-20251117-WA0071.jpg",
    name: "IMG-20251117-WA0071",
  },
  {
    image: "/clients/IMG-20251117-WA0072.jpg",
    name: "IMG-20251117-WA0072",
  },
  {
    image: "/clients/IMG-20251117-WA0073.jpg",
    name: "IMG-20251117-WA0073",
  },
  {
    image: "/clients/IMG-20251117-WA0074.jpg",
    name: "IMG-20251117-WA0074",
  },
  {
    image: "/clients/IMG-20251117-WA0075.jpg",
    name: "IMG-20251117-WA0075",
  },
  {
    image: "/clients/IMG-20251117-WA0076.jpg",
    name: "IMG-20251117-WA0076",
  },
  {
    image: "/clients/IMG-20251117-WA0077.jpg",
    name: "IMG-20251117-WA0077",
  },
  {
    image: "/clients/IMG-20251117-WA0078.jpg",
    name: "IMG-20251117-WA0078",
  },
  {
    image: "/clients/IMG-20251117-WA0079.jpg",
    name: "IMG-20251117-WA0079",
  },
  {
    image: "/clients/IMG-20251117-WA0080.jpg",
    name: "IMG-20251117-WA0080",
  },
  {
    image: "/clients/IMG-20251117-WA0081.jpg",
    name: "IMG-20251117-WA0081",
  },
  {
    image: "/clients/IMG-20251117-WA0082.jpg",
    name: "IMG-20251117-WA0082",
  },
  {
    image: "/clients/IMG-20251117-WA0083.jpg",
    name: "IMG-20251117-WA0083",
  },
  {
    image: "/clients/IMG-20251117-WA0084.jpg",
    name: "IMG-20251117-WA0084",
  },
  {
    image: "/clients/IMG-20251117-WA0085.jpg",
    name: "IMG-20251117-WA0085",
  },
  {
    image: "/clients/IMG-20251117-WA0086.jpg",
    name: "IMG-20251117-WA0086",
  },
  {
    image: "/clients/IMG-20251117-WA0087.jpg",
    name: "IMG-20251117-WA0087",
  },
  {
    image: "/clients/IMG-20251117-WA0088.jpg",
    name: "IMG-20251117-WA0088",
  },
  {
    image: "/clients/IMG-20251117-WA0089.jpg",
    name: "IMG-20251117-WA0089",
  },
];

const Clients = () => {
  return (
    <div id="about" className="bg-gray-50 py-10">
      <div className=" flex justify-center items-center text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          Clients{" "}
        </h1>
      </div>
      <InfiniteScrollCarousel partners={clients1} dir="left" speed="slow" />
      <InfiniteScrollCarousel partners={clients2} dir="right" speed="slow" />
    </div>
  );
};

export default Clients;
