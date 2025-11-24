"use client";

import React from "react";

const features = [
  {
    title: "Fast Results",
    description:
      "See measurable improvements in your digital presence within 30 days",
    icon: "ri-rocket-line",
    bgGradient: "from-cyan-400 to-blue-400",
  },
  {
    title: "Personal Support",
    description: "Get direct access to expert guidance and ongoing mentorship",
    icon: "ri-user-heart-line",
    bgGradient: "from-orange-400 to-red-400",
  },
  {
    title: "Proven Methods",
    description:
      "Learn strategies that have generated millions in revenue for clients",
    icon: "ri-trophy-line",
    bgGradient: "from-green-400 to-emerald-400",
  },
];

const stats = [
  { label: "10,000+ Students" },
  { label: "200+ Brands" },
  { label: "95% Success Rate" },
  { label: "5+ Years Experience" },
];

const DigitalGrowth: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-r from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start Your Digital Growth{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-orange-300">
              Journey Today!
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Join thousands of successful entrepreneurs and marketers who've
            transformed their businesses with proven digital marketing
            strategies.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 my-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-r ${feature.bgGradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer"
            >
              Book Free Strategy Call
            </button>
            <button
              onClick={() => {
                const section = document.getElementById("training");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer"
            >
              Explore Training Programs
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 mb-6">
              Trusted by industry leaders and growing businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="text-white font-semibold">{stat.label}</div>
                  {idx < stats.length - 1 && (
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalGrowth;
