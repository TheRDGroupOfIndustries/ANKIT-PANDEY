"use client";

import React, { useState } from "react";

interface Testimonial {
  id: number;
  stars: number;
  quote: string;
  badge: string;
  name: string;
  position: string;
  company: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "Ankit's digital marketing strategy transformed our online presence completely. We saw a 300% increase in qualified leads within just 3 months. His expertise in SEO and paid advertising is unmatched.",
    badge: "300% Lead Increase",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechStart Inc.",
    img: "/stories/1.jpg",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "The ROI from Ankit's training program was incredible. Not only did I learn advanced marketing techniques, but I also implemented them to grow my e-commerce business by 250% in revenue.",
    badge: "250% Revenue Growth",
    name: "Michael Chen",
    position: "E-commerce Founder",
    company: "StyleHub",
    img: "/stories/2.jpg",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "As a complete beginner, Ankit's course gave me the confidence and skills to start my own digital marketing agency. His teaching style is clear, practical, and results-oriented.",
    badge: "Started Own Agency",
    name: "Emily Rodriguez",
    position: "Digital Marketing Student",
    company: "Freelancer",
    img: "/stories/3.jpg",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "Ankit helped us pivot our restaurant business during COVID with a strong digital presence. Our online orders increased by 400% and we now have a thriving delivery business.",
    badge: "400% Online Orders",
    name: "David Thompson",
    position: "Restaurant Owner",
    company: "Bella Vista Restaurant",
    img: "/stories/4.jpg",
  },
  {
    id: 5,
    stars: 5,
    quote:
      "The advanced SEO course was a game-changer for our B2B company. We now rank #1 for our target keywords and our organic traffic has tripled. Ankit's expertise is phenomenal.",
    badge: "Tripled Organic Traffic",
    name: "Lisa Park",
    position: "Marketing Manager",
    company: "HealthTech Solutions",
    img: "/stories/5.jpg",
  },
  {
    id: 6,
    stars: 5,
    quote:
      "Ankit's strategic guidance helped us achieve product-market fit faster. His data-driven approach to digital marketing gave us the insights we needed to scale effectively.",
    badge: "Achieved PMF",
    name: "James Wilson",
    position: "Startup Co-founder",
    company: "InnovateLab",
    img: "/stories/6.jpg",
  },
];

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);

  const slides = Math.ceil(testimonials.length / 3); // number of slides

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
            What My Students &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real people who've transformed their businesses
            and careers through digital marketing mastery.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: slides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((t) => (
                        <div
                          key={t.id}
                          className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="flex items-center mb-4">
                            {Array.from({ length: t.stars }).map((_, i) => (
                              <i
                                key={i}
                                className="ri-star-fill text-yellow-400"
                              ></i>
                            ))}
                          </div>
                          <blockquote className="text-gray-700 leading-relaxed mb-6">
                            "{t.quote}"
                          </blockquote>
                          <div className="mb-6">
                            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                              <i className="ri-trophy-line mr-2"></i>
                              {t.badge}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <img
                              alt={t.name}
                              className="w-12 h-12 rounded-full object-cover object-top mr-4"
                              src={t.img}
                            />
                            <div>
                              <div className="font-semibold text-gray-900">
                                {t.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {t.position}
                              </div>
                              <div className="text-sm text-gray-500">
                                {t.company}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
            <div className="flex space-x-2">
              {Array.from({ length: slides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border-2 border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* Stats */}
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                {/* 1️⃣ Students Trained */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Students Trained
                  </div>
                </div>

                {/* 2️⃣ Brands Grown */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-2">
                    200+
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Brands Grown
                  </div>
                </div>

                {/* 3️⃣ Success Rate */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base font-medium">
                    Success Rate
                  </div>
                </div>

                {/* 4️⃣ Years Experience */}
                <div className="p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-2">
                    5+
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
