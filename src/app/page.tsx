import About from "@/components/About";
import Blog from "@/components/Blog";
import Homecomponent from "@/components/Homecomponent";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Traning from "@/components/Traning";

import "remixicon/fonts/remixicon.css";
import MyBrands from "@/components/MyBrands";
import Memberships from "@/components/Memberships";
import Partnerships from "@/components/Partnerships";
import Clients from "@/components/Clients";
import {
  getBlogs,
  getCourses,
  getPortfolios,
  getTestimonials,
} from "@/sanity/lib/client";
import ScrollToSection from "@/components/ScrollToSection";
import { Suspense } from "react";
import Contact from "@/components/Contact";
import RoiImageCarousel from "@/components/RoiImageCarousel";

export default async function Home() {
  const courses = await getCourses();
  // console.log(courses);

  const testimonials = await getTestimonials();
  // console.log(testimonials);

  const projects = await getPortfolios();
  // console.log(projects);

  const posts = await getBlogs();
  // console.log(posts);

  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      <section id="home">
        <Homecomponent />
      </section>
      <section id="about">
        <About />
      </section>
      <MyBrands />
      <Memberships />
      <Partnerships />
      <Clients />
      <section id="services">
        <Services />
      </section>
      <section id="training">
        <Traning courses={courses} />
      </section>
      <SuccessStories />

      <section id="portfolio">
        <Portfolio projects={projects} />
      </section>
      <RoiImageCarousel/>

      <section id="blog">
        <Blog posts={posts} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
