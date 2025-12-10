"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      toast.dismiss(loadingToast);
      setLoading(false);

      if (result.success) {
        toast.success("Message sent successfully! ✔");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Try again later.");
      setLoading(false);
    }
  };
  return (
    <div id="contact" className="bg-gray-50 pt-10">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {/* Contact Us */}
          Need Help
        </h1>
      </div>
      <section className=" bg-gray-50 pb-10 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-mail-line mr-2"></i>Get In Touch
          </div> */}
            <h2 className="text-4xl lg:text-5xl  text-gray-900 mb-6">
              Let&apos;s Get Your Business On{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-500">
                Growth Track.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While you wait, your competitor is already working! Don&apos;t
              delay schedule you call now.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>
              <form
                id="contact-form"
                onSubmit={submitForm}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="first_name"
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="last_name"
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service_interest"
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="Digital Marketing Strategy">
                      Digital Marketing Strategy
                    </option>
                    <option value="Social Media Growth">
                      Social Media Growth
                    </option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Paid Ad Campaigns">Paid Ad Campaigns</option>
                    <option value="1-on-1 Training">1-on-1 Training</option>
                    <option value="Group Training">Group Training</option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    maxLength={500}
                    required
                    placeholder="Tell me about your project, goals, and how I can help you succeed... (max 500 characters)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none whitespace-nowrap cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </h4>
                    <p className="text-gray-600">+91 8303777132</p>
                    {/* <p className="text-sm text-gray-500 mt-1">
                      Available Mon-Fri, 9AM-6PM EST
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      annkitpandeygrowth@gmail.com
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      I&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Schedule a Call
                    </h4>
                    <p className="text-gray-600">
                      Book a free 30-minute consultation
                    </p>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2 cursor-pointer">
                      View Available Times →
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/ankitpandey"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/ankitpandey"
                    className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-fill text-xl"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtube.com/@ankitpandey"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-youtube-fill text-xl"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/ankitpandey"
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center text-white transition-colors duration-300 cursor-pointer"
                  >
                    <i className="ri-twitter-fill text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border-l-4 border-cyan-500">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  I personally read and respond to every message within 24
                  hours. For urgent matters, feel free to call or schedule a
                  direct consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
