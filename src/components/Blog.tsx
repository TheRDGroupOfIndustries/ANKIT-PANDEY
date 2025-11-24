"use client";

import React, { useState } from "react";


export interface BlogPost {
  _id: string;
  title: string;
  category: string;
  thumbnail: string;
  publishedAt: string; // formatted date for UI, e.g. "Dec 15, 2023"
  readTime: string; // "8 min read"
  excerpt: string; // excerpt
  author: string;
  authorInitial: string;
}

// const posts: BlogPost[] = [
//   {
//     title: "10 Digital Marketing Trends That Will Dominate 2024",
//     description:
//       "Discover the latest trends in digital marketing and how to leverage them for your business growth in the coming year.",
//     category: "Trends",
//     date: "Dec 15, 2023",
//     readTime: "8 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/1.jpg",
//   },
//   {
//     title: "How to Build a High-Converting Sales Funnel",
//     description:
//       "Step-by-step guide to creating sales funnels that convert visitors into customers and maximize your revenue.",
//     category: "Strategy",
//     date: "Dec 10, 2023",
//     readTime: "12 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/2.jpg",
//   },
//   {
//     title: "SEO Secrets: Rank #1 on Google in 90 Days",
//     description:
//       "Proven SEO strategies and techniques that helped my clients achieve top rankings and drive organic traffic.",
//     category: "SEO",
//     date: "Dec 5, 2023",
//     readTime: "15 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/3.jpg",
//   },
//   {
//     title: "Social Media Marketing: From Zero to Hero",
//     description:
//       "Complete guide to building a strong social media presence that engages your audience and drives business results.",
//     category: "Social Media",
//     date: "Nov 28, 2023",
//     readTime: "10 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/4.jpg",
//   },
//   {
//     title: "Email Marketing Automation That Actually Works",
//     description:
//       "Learn how to set up email sequences that nurture leads and convert them into loyal customers automatically.",
//     category: "Email Marketing",
//     date: "Nov 20, 2023",
//     readTime: "9 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/5.jpg",
//   },
//   {
//     title: "Paid Advertising: Maximize ROI with Smart Strategies",
//     description:
//       "Advanced techniques for Google Ads and Facebook Ads that reduce costs while increasing conversions and sales.",
//     category: "Paid Ads",
//     date: "Nov 15, 2023",
//     readTime: "11 min read",
//     author: "Ankit Pandey",
//     authorInitial: "A",
//     imageUrl: "/blog/6.jpg",
//   },
// ];

// Extract unique categories dynamically


const Blog = ({ posts }: { posts: BlogPost[] }) => {
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
    <div id="blog" className="bg-white py-10">
      <div className=" flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl h-14 font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Blogs
        </h1>
      </div>
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stay Updated With{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-500">
                The Industry Trends & Updates
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated in the fastest-growing industry, learn from the
              proven techniques, latest trends in industry; p.s. it's free
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
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
                <article
                  key={post._id ?? idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
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
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No posts found for "{selectedCategory}"
              </p>
            )}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-linear-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss a Marketing Insight
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Get weekly tips, strategies, and industry updates delivered
                straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
                />
                <button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Join 5,000+ marketers who trust our insights. Unsubscribe
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
