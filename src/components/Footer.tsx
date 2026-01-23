"use client";

import React from "react";

const Footer = () => {
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
      url: "https://www.linkedin.com/in/annkitpandey/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: "ri-instagram-fill",
      url: "https://www.instagram.com/annkitpandey",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: "ri-youtube-fill",
      url: "https://youtube.com/@annkitpandey",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: "ri-twitter-fill",
      url: "https://x.com/annkitpandey",
      color: "bg-blue-400 hover:bg-blue-500",
    },
    {
      icon: "ri-facebook-fill",
      url: "https://www.facebook.com/annkitpandey.page",
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      icon: "ri-pinterest-fill",
      url: "https://in.pinterest.com/annkitpandey/",
      color: "bg-red-500 hover:bg-red-600",
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

  const footerLinks = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About & Social */}
          <div className="md:col-span-2 lg:col-span-2 space-y-6">
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
              <div className="flex flex-wrap gap-4">
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
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              © 2026 Ankit Pandey - Digital Marketer & Trainer. All rights
              reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
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
