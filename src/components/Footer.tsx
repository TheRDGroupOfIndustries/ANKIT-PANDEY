"use client";

import React, { useState } from "react";
import CountUp from "./CountUp";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNavClick = (item: string) => {
    const section = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
    if (section) {
      const navHeight = 80;
      const targetPosition = section.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    {
      icon: "ri-linkedin-fill",
      url: "https://linkedin.com/in/ankitpandey",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: "ri-instagram-fill",
      url: "https://instagram.com/ankitpandey",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: "ri-youtube-fill",
      url: "https://youtube.com/@ankitpandey",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: "ri-twitter-fill",
      url: "https://twitter.com/ankitpandey",
      color: "bg-blue-400 hover:bg-blue-500",
    },
  ];

  const services = [
    "Digital Marketing Strategy",
    "Social Media Growth",
    "SEO Optimization",
    "Paid Ad Campaigns",
    "1-on-1 Training",
    "Group Training",
  ];

  const trainingPrograms = [
    "Digital Marketing Fundamentals",
    "Advanced SEO Mastery",
    "Paid Advertising Bootcamp",
    "Social Media Growth Hacking",
    "Complete Marketing MBA",
    "E-commerce Specialist",
  ];

  const resources = [
    "Blog & Articles",
    "Case Studies",
    "Free Resources",
    "Marketing Tools",
    "Industry Reports",
    "Success Stories",
  ];

  const stats = [
    { value: "10000",suffix:"+", label: "Students Trained", color: "text-blue-400" },
    { value: "200",suffix:"+", label: "Brands Grown", color: "text-green-400" },
    { value: "95",suffix:"%", label: "Success Rate", color: "text-orange-400" },
    { value: "5",suffix:"+", label: "Years Experience", color: "text-purple-400" },
  ];

  const footerLinks = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* About & Social */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Pacifico, serif" }}
              >
                Ankit Pandey
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering businesses and students through digital marketing
                mastery. Join 10,000+ successful marketers who've transformed
                their careers and businesses.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                    aria-label={social.icon
                      .replace("ri-", "")
                      .replace("-fill", "")}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
{/* 
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              {subscribeStatus === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  Successfully subscribed!
                </p>
              )}
              {subscribeStatus === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  Please enter a valid email.
                </p>
              )}
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Training Programs</h4>
            <ul className="space-y-3">
              {trainingPrograms.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick("training")}
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() =>
                      handleNavClick(item.toLowerCase().replace(/\s+/g, "-"))
                    }
                    className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <section className="bg-gray-900 ">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="pt-12 border-t border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-xl"
                  >
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {/* {stat.value} */}
                       <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ankit Pandey - Digital Marketer & Trainer. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
