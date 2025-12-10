"use client";

import Image from "next/image";
import { useState } from "react";
import PaymentModal from "./PaymentModal";
interface Course {
  title: string;
  description: string;
  features: string[];
  level: string;
  price: string;
  duration: string;
  imageUrl: string;
  popular?: boolean;
  bgGradient?: string;
}

const Traning = ({ courses }: { courses: Course[] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  return (
    <div id="training" className="bg-gray-50 py-10">
      <PaymentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        courseTitle={selectedCourse}
      />

      <div className=" flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl h-16 font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Training Programs
        </h1>
      </div>

      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-4">
              Master Digital Marketing with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500">
                Expert-Led Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to take
              you from beginner to expert in digital marketing.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                  course.popular
                    ? "border-orange-500 ring-2 ring-orange-200"
                    : "border-gray-200"
                }`}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    alt={course.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                    src={course.imageUrl}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <ul className="space-y-2">
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        Rs. {course.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.duration}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCourse(course?.title);
                        setOpenModal(true);
                      }}
                      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white
                      }`}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-16">
            {/* Reduced padding on mobile (p-8) compared to large screens (p-12) */}
            <div className="bg-linear-to-r from-orange-50 to-red-50 rounded-3xl p-8 sm:p-12">
              {/* Reduced heading size on mobile (text-2xl) */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Not Sure Which Course is Right for You?
              </h3>
              {/* Reduced paragraph size on mobile (text-base) */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a free consultation call and I&apos;ll help you choose the
                perfect learning path based on your goals and experience level.
              </p>
              {/* Stacks vertically by default, goes horizontal on sm:flex-row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  // Reduced text and padding on mobile (text-base, px-6, py-3)
                  className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  Free Course Consultation
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById("training");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  // Reduced text and padding on mobile (text-base, px-6, py-3)
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  View All Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Traning;

// const courses: Course[] = [
//   {
//     title: "Advanced Digital Marketing",
//     description:
//       "Master the basics of digital marketing with hands-on projects and real-world applications.",
//     features: [
//       "Marketing Strategy Basics",
//       "Social Media Marketing",
//       "Email Marketing",
//       "Content Creation",
//       "+2 more features",
//     ],
//     level: "Beginner",
//     price: "60,000",
//     duration: "8 Weeks",
//     imageUrl:
//       "https://readdy.ai/api/search-image?query=Digital%20marketing%20fundamentals%20course%20materials%20with%20laptop%2C%20notebooks%2C%20charts%20and%20graphs%2C%20modern%20learning%20environment%2C%20clean%20professional%20setup%2C%20educational%20content%20visible%20on%20screen&width=400&height=300&seq=course-fundamentals&orientation=landscape",
//   },
//   {
//     title: "Advanced SEO Mastery",
//     description:
//       "Deep dive into advanced SEO techniques that drive organic traffic and improve rankings.",
//     features: [
//       "Technical SEO Audit",
//       "Advanced Keyword Research",
//       "Link Building Strategies",
//       "Local SEO Optimization",
//       "+2 more features",
//     ],
//     level: "Intermediate",
//     price: "30,000",
//     duration: "6 Weeks",
//     imageUrl:
//       "https://readdy.ai/api/search-image?query=Advanced%20SEO%20course%20setup%20with%20multiple%20monitors%20showing%20search%20rankings%2C%20keyword%20research%20tools%2C%20analytics%20dashboards%2C%20professional%20workspace%2C%20technical%20SEO%20elements%20visible&width=400&height=300&seq=course-seo&orientation=landscape",
//     popular: true,
//   },
//   {
//     title: "Paid Advertising Bootcamp",
//     description:
//       "Become a paid advertising expert with Google Ads, Facebook Ads, and advanced campaign optimization.",
//     features: [
//       "Google Ads Mastery",
//       "Facebook & Instagram Ads",
//       "Campaign Optimization",
//       "Conversion Tracking",
//       "+2 more features",
//     ],
//     level: "Advanced",
//     price: "30,000",
//     duration: "10 Weeks",
//     imageUrl:
//       "https://readdy.ai/api/search-image?query=Paid%20advertising%20bootcamp%20with%20multiple%20screens%20showing%20Google%20Ads%2C%20Facebook%20Ads%20manager%2C%20campaign%20performance%20metrics%2C%20professional%20digital%20marketing%20workspace%2C%20advertising%20dashboards&width=400&height=300&seq=course-ads&orientation=landscape",
//   },
//   // Add more courses here if needed
// ];
