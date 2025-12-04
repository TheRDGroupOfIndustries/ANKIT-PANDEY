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
  publishedAt: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorInitial: string;
}

export default function BlogPage({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
    "Other",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div id="blog" className="bg-white pt-28">
      <div className="flex justify-center items-center">
        <h1 className=" mb-4 text-4xl md:text-5xl h-14 font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Blogs
        </h1>
      </div>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        width={200}
                        height={200}
                        alt={post.title}
                        src={post.thumbnail}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-xs rounded-full font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{post.publishedAt}</span>
                        <span>{post.readTime} min read</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600">
                        {post.title}
                      </h3>

                      <p className="text-gray-600">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-sm">
                              {post.authorInitial}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600">
                            {post.author}
                          </span>
                        </div>

                        <button className="text-indigo-600 font-medium text-sm">
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
}
