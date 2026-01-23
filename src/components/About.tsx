"use client";

import Image from "next/image";
import CountUp from "./CountUp";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-10">
      <div className="flex justify-center items-center text-center mb-4 md:mb-6 px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight md:leading-snug">
          About the Expert
        </h1>
      </div>

      <section className="">
        <div className="max-w-7xl mx-auto py-8 md:py-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-center justify-items-center lg:justify-items-start">
            {/* Image with badge */}
            <div className="relative lg:col-span-2 w-full max-w-xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  width={200}
                  height={200}
                  src="/anket.png"
                  alt="Ankit Pandey - Digital Marketing Expert"
                  className="w-full h-full lg:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-8 col-span-1 lg:col-span-3 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Ankit Pandey –{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                    Digital Growth Strategist
                  </span>
                </h2>
                <h3 className="text-xl font-semibold text-blue-600">
                  Digital Marketing Expert & Mentor
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  With over five years of hands-on experience in digital
                  marketing, I’ve helped brands and individuals unlock scalable
                  growth through data-driven strategies and smart execution.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My mission is simple — to make powerful digital marketing
                  knowledge accessible and actionable. Whether you’re a startup
                  founder, a marketing professional or an aspiring learner, I’m
                  here to guide you toward clarity, confidence and measurable
                  success in the digital world.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                {/* Left box */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 w-full max-w-sm mx-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                      <i className="ri-graduation-cap-line text-white text-xl"></i>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-900">
                        <CountUp end={10000} suffix="+" />
                      </div>
                      <div className="text-gray-600 text-sm">Students Trained</div>
                    </div>
                  </div>
                </div>

                {/* Right box */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500 w-full max-w-sm mx-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shrink-0">
                      <i className="ri-building-line text-white text-xl"></i>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-gray-900">
                        <CountUp end={200} suffix="+" />
                      </div>
                      <div className="text-gray-600 text-sm">Brands Grown</div>
                    </div>
                  </div>
                </div>

                {/* Center 5+ years box */}
                <div className="bg-white rounded-2xl p-6 shadow-xl text-center col-span-1 sm:col-span-2 w-full max-w-sm mx-auto">
                  <div className="text-3xl font-bold text-blue-600">
                    <CountUp end={5} suffix="+" />
                  </div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;