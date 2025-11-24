import About from "@/components/About";
import Blog from "@/components/Blog";
import Homecomponent from "@/components/Homecomponent";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Traning from "@/components/Traning";
import Contact from "@/components/Contact";
import Image from "next/image";
import Footer from "@/components/Footer";
import 'remixicon/fonts/remixicon.css';
import MyBrands from "@/components/MyBrands";
import Memberships from "@/components/Memberships";
import Partnerships from "@/components/Partnerships";
import InfiniteScrollCarousel from "@/components/InfiniteScrollCarousel";
import Clients from "@/components/Clients";
import { getBlogs, getCourses, getPortfolios, getTestimonials } from "@/sanity/lib/client";

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
    <div>
      <Homecomponent />
      <About />
      <MyBrands />
      <Memberships />
      <Partnerships />
      <Clients />
      <Services />
      <Traning courses={courses} />
      <SuccessStories testimonials={testimonials} />
      <Portfolio projects={projects} />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </div>
  );
}
