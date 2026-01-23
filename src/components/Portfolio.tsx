"use client";

import React, { useState } from "react";
import DigitalGrowth from "./DigitalGrowth";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  client?: string;
  description: string;
  category: string;
  keyResults: string[];
  imageUrl: string;
}

const mainCategories = [
  "All Projects",
  "E-commerce",
  "B2B",
  "SaaS",
  "Local Business",
  "Healthcare",
  "Education",
];

const Portfolio = ({ projects }: { projects: Project[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  // console.log("portfolio<< ",projects);

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="portfolio" className="bg-gray-50 pt-10">
      <div className=" flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Portfolio
        </h1>
      </div>
      <section className=" bg-gray-50 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Results That Speak Louder{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-500">
                Than Words
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real campaigns, real strategies and real growth stories crafted across industries and
              powered by performance-driven marketing.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Link
                key={project._id}
                href={`/portfolio/${project._id}`}
                className="block"
              >
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                      src={project.imageUrl}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium">
                        {project?.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="text-sm text-purple-600 font-medium mb-3 capitalize">
                        {project.client}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Results Delivered:
                      </h4>
                      <ul className="space-y-1">
                        {project.keyResults.map((result) => (
                          <li
                            key={result}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full mt-4 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-200 hover:border-purple-200 whitespace-nowrap cursor-pointer">
                      View Case Study
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DigitalGrowth />
    </div>
  );
};

export default Portfolio;