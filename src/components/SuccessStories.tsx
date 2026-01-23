"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CountUp from "./CountUp";

export interface Testimonial {
  _id: string;
  rating: number;
  quote: string;
  badgeText: string;
  authorName: string;
  authorRole: string;
  company: string;
  authorImage: string;
}
const ClientReviews = Array.from({ length: 20 }).map((_, i) => ({
  image: `/client-review/client_image (${i + 1}).jpeg`,
  name: `Client ${i + 1}`,
}));
const SuccessStories = () => {
  const [current, setCurrent] = useState(0);

  const slides = ClientReviews.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? slides - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides - 1 ? 0 : current + 1);
  };

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-chat-quote-line mr-2"></i>Success Stories
          </div> */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Stories.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from students and clients who transformed their careers and businesses
            through proven digital strategies.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {/* {Array.from({ length: Math.ceil(ClientReviews.length / 2) }).map(
                (_, slideIndex) => {
                  const startIndex = slideIndex * 2;
                  const group = ClientReviews.slice(startIndex, startIndex + 2);

                  return (
                    <div key={slideIndex} className="w-full shrink-0">
                   
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                        {group.map((review) => (
                          <div
                            key={review.name}
                            className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                          >
                            <Image
                              src={review.image}
                              alt="Client Review Image"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 50vw,
                             50vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
              )} */}
              {ClientReviews.map((review, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination / Arrows */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(ClientReviews.length / 2) }).map(
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${idx === current
                        ? "bg-blue-600"
                        : "bg-gray-300 hover:bg-gray-400"
                      }`}
                  ></button>
                )
              )}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/client-reviews"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition font-medium"
          >
            See More Reviews
          </Link>
        </div>

        {/* Stats */}
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {/* 1️⃣ Students Trained */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">
                    <CountUp end={10000} suffix="+" />
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Students Trained
                  </div>
                </div>

                {/* 2️⃣ Brands Grown */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-2">
                    <CountUp end={200} suffix="+" />
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Brands Grown
                  </div>
                </div>

                {/* 3️⃣ Success Rate */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-2">
                    <CountUp end={200} suffix="%" />
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Success Rate
                  </div>
                </div>

                {/* 4️⃣ Years Experience */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-2">
                    <CountUp end={5} suffix="+" />
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SuccessStories;
