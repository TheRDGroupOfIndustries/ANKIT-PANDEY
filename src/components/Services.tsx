"use client";

const Services = () => {
  const services = [
    {
      icon: "ri-lightbulb-line",
      title: "Digital Growth Strategy",
      description:
        "Data-backed strategies crafted to move your brand forward with clarity and confidence.",
      points: [
        "Market & Audience Intelligence",
        "Competitor Positioning",
        "Scalable Growth Frameworks",
        "Performance & ROI Optimization",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "ri-user-line",
      title: "1-on-1 Mentorship",
      description:
        "Personalized guidance designed to sharpen your skills and fast-track your growth journey.",
      points: [
        "Tailored Learning Paths",
        "Hands-on Strategy Sessions",
        "Live Feedback & Action Plans",
        "Continuous Support",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "ri-team-line",
      title: "Group Workshops",
      description:
        "High-energy, collaborative learning experiences for teams ready to level up.",
      points: [
        "Team Skill Development",
        "Interactive Strategy Sessions",
        "Real-World Case Studies",
        "Certification & Outcomes",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div id="services" className="py-10">
      <div className="flex justify-center items-center mb-2">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight md:leading-snug">
          What I Do
        </h1>
      </div>
      <section className="bg-white pb-10 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-900 mb-4 md:mb-6 leading-tight">
              Smart Strategies. Real Growth. Measurable{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Impact.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I help brands cut through the noise with powerful digital strategies that don’t just look good,
              they perform. From planning to execution, every solution is built to drive visibility,
              engagement and real business results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col "
              >
                <div
                  className={`w-16 h-16 bg-linear-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`text-white text-2xl ${service.icon}`}></i>
                </div>
                <div className="space-y-4 flex flex-col justify-between flex-1">
                  <div className="">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://calendly.com/annkitpandey/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full mt-6 bg-blue-50 text-blue-600 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-200 hover:border-blue-200 whitespace-nowrap cursor-pointer">
                      Explore More
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-16">
            {/* Reduced padding on mobile (p-8) compared to large screens (p-12) */}
            <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12">
              {/* Reduced text size on mobile (text-2xl) compared to default (text-3xl) */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Turn Attention Into Impact?
              </h3>
              {/* Reduced text size on mobile (text-base) compared to default (text-lg) */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let’s build a digital strategy that doesn’t just look good, it performs, converts and grows your
                brand where it matters most.
              </p>
              {/* Stacks vertically by default, then goes horizontal on sm:flex-row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  // Reduced text size on mobile (text-base) compared to default (text-lg)
                  className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 whitespace-normal sm:whitespace-nowrap cursor-pointer"
                >
                  Start Your Free Strategy Call
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("portfolio");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  // Reduced text size on mobile (text-base) compared to default (text-lg)
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 whitespace-normal sm:whitespace-nowrap cursor-pointer"
                >
                  Explore My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
