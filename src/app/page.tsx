"use client";
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

export default function Home() {
  return (
    <div>
      <Homecomponent />
      <About />
      <MyBrands/>
      <Memberships/>
      <Partnerships/>
      <Clients/>
      <Services />
      <Traning />
      <SuccessStories />
      <Portfolio />
      <Blog />
      <Contact/>
      <Footer/>
    </div>
  );
}
