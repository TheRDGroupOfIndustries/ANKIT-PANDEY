"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import CountUp from "./CountUp";
const Homecomponent = () => {
  const heroImage = "/images/profile.jpg";

  const stats = [
    {
      number: 1000,
      suffix: "+",
      label: "Students Trained",
      color: "from-cyan-400 to-blue-400",
    },
    {
      number: 50,
      suffix: "M+",
      label: "Revenue Generated",
      color: "from-orange-400 to-red-400",
    },
    {
      number: 200,
      suffix: "+",
      label: "Brands Grown",
      color: "from-green-400 to-emerald-400",
    },
    {
      number: 98,
      suffix: "%",
      label: "Success Rate",
      color: "from-purple-400 to-pink-400",
    },
  ];

  const rotatingTexts = ["Success", "Growth", "Breakthrough", "Marketing"];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <div id="home">
      <section className="relative min-h-screen mt-10 py-10 md:py-20 flex flex-col overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 items-center py-6 md:py-10 gap-10 px-6 lg:px-8">
            <div className="text-center lg:text-left space-y-8 md:space-y-12 col-span-1 lg:col-span-3 order-2 lg:order-1">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-7xl font-black leading-tight text-white">
                  Elevate Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 whitespace-nowrap">
                    Digital{" "}<motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}

                    >
                      {rotatingTexts[index]}
                    </motion.span>
                  </span>

                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  Learn proven growth strategies that have delivered
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    $50M+ in revenue{" "}
                  </span>
                  for brands worldwide leading. Join the elite community of
                  winning marketers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center">
                <Link
                  href="https://calendly.com/annkitpandey/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center group relative bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap overflow-hidden"
                >
                  <span className="relative z-10">Book Session</span>
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <button
                  onClick={() => {
                    const section = document.getElementById("success");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto group border-2 border-slate-400 text-slate-300 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 whitespace-nowrap"
                >
                  <span className="flex items-center justify-center gap-3">
                    Watch Success Stories
                    <i className="ri-play-circle-line text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 order-1 lg:order-2">
              <div className="relative p-2 md:p-4 bg-white/5 backdrop-blur-lg rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                <Image
                  height={500}
                  width={400}
                  src={heroImage}
                  alt="Digital Marketing Success"
                  className="w-full h-auto rounded-[2rem] md:rounded-[2.5rem] object-cover border-2 md:border-4 border-cyan-500/50"
                />
                {/* Optional glow effect behind the image */}
                <div className="absolute inset-0 m-4 rounded-[2rem] md:rounded-[2.5rem] bg-cyan-500/10 blur-xl -z-10 animate-pulse-slow" />
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="mt-10 md:mt-16 w-full px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r ${stat.color} mb-2`}
                  >
                    <CountUp end={stat.number} suffix={stat.suffix || ""} />
                  </div>
                  {/* Changed font size for label to text-sm on smaller screens */}
                  <div className="text-slate-400 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div
                    className={`w-12 h-1 bg-linear-to-r ${stat.color} mx-auto mt-3 rounded-full`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homecomponent;
