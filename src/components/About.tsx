"use client";

import Image from "next/image";
import CountUp from "./CountUp";

const About = () => {
  return (
    <div id="about" className="bg-gray-50 py-10">
      <div className=" flex justify-center items-center text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug">
          About Me
        </h1>
      </div>

      <section className=" ">
        <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Image with badge */}
            <div className="relative col-span-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  width={200}
                  height={200}
                  src="/anket.png"
                  alt="Ankit Pandey - Digital Marketing Expert"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent" />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-8 col-span-3">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Digital Marketing{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                    Strategist & Trainer
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 5 years of experience in digital marketing, I've
                  dedicated my career to empowering businesses and individuals
                  to achieve extraordinary growth through data-driven marketing
                  strategies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My mission is simple: to democratize digital marketing
                  knowledge and make it accessible to everyone. Whether you're a
                  startup founder, marketing professional, or student, I'm here
                  to guide you on your journey to digital success.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid md:grid-cols-2 sm:grid-cols gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg  border-l-4 border-blue-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        10,000+
                      </div>
                      <div className="text-gray-600 text-sm">
                        Students Trained
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <i className="ri-building-line text-white text-xl"></i>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        200+
                      </div>
                      <div className="text-gray-600 text-sm">Brands Grown</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600 text-sm">
                    Years of Excellence
                  </div>
                </div>
              </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
  {/* Left box */}
  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 w-64 sm:w-72">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <i className="ri-graduation-cap-line text-white text-xl"></i>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">
          <CountUp end={10000} suffix="+" />
        </div>
        <div className="text-gray-600 text-sm">Students Trained</div>
      </div>
    </div>
  </div>

  {/* Right box */}
  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500 w-64 sm:w-72">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
        <i className="ri-building-line text-white text-xl"></i>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">
          <CountUp end={200} suffix="+" />
        </div>
        <div className="text-gray-600 text-sm">Brands Grown</div>
      </div>
    </div>
  </div>

  {/* Center 5+ years box */}
  <div className="bg-white rounded-2xl p-6 shadow-xl text-center col-span-1 md:col-span-2 w-64 sm:w-72">
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

{
  /* Mission box */
}
{
  /* <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  My Mission
                </h3>
                <p className="text-gray-700">
                  "To bridge the gap between traditional business practices and
                  modern digital strategies, creating a world where every
                  business can thrive in the digital age."
                </p>
              </div> */
}

{
  /* Buttons */
}
{
  /* <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("portfolio");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  View My Work
                </button>
                <button className="ring-2 ring-inset ring-blue-600 text-blue-600 hover:bg-blue-50/50 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Download Resume
                </button>
              </div> */
}
