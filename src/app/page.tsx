import About from "@/components/About";
import Blog from "@/components/Blog";
import Homecomponent from "@/components/Homecomponent";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Traning from "@/components/Traning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import 'remixicon/fonts/remixicon.css';
import MyBrands from "@/components/MyBrands";
import Memberships from "@/components/Memberships";
import Partnerships from "@/components/Partnerships";
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
    <div className="overflow-x-hidden">
      <Homecomponent />
      <About />
      <MyBrands />
      <Memberships />
      <Partnerships />
      <Clients />
      <Services />
      <Traning courses={courses} />
      <SuccessStories />
      <Portfolio projects={projects} />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </div>
  );
}
