"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  publishedAt: string; // formatted date for UI, e.g. "Dec 15, 2023"
  readTime: string; // "8 min read"
  excerpt: string; // excerpt
  author: string;
  authorInitial: string;
}

const Blog = ({ posts }: { posts: BlogPost[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
    "More",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div id="blog" className="bg-white py-8">
      <div className=" flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl h-14 font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Insights Hub
        </h1>
      </div>
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-4">
              Stay Updated With{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-500">
                The Industry Trends & Updates
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, proven strategies and real-world insights shaping the
              digital marketing landscape. Learn what’s working, what’s next and how to stay ahead, all in
              one place.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <Link key={post._id ?? idx} href={`/blog/${post.slug}`}>
                  <article

                    // onClick={router.push(`blog/${post._id}`)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        width={200}
                        height={200}
                        alt={post.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                        src={post.thumbnail}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {post.publishedAt}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-time-line mr-1"></i>
                          {post.readTime} min read
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-indigo-600 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-sm font-semibold">
                              {post.authorInitial}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {post.author}
                          </span>
                        </div>

                        <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-300 cursor-pointer">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No posts found for "{selectedCategory}"
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;