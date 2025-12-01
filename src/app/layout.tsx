import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Poppins, Pacifico } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// Font imports
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100","200","300","400","500","600","700","800","900"],
//   variable: "--font-poppins",
// });

// const pacifico = Pacifico({
//   subsets: ["latin"],
//   weight: ["400"], // Pacifico has only 400
//   variable: "--font-pacifico",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Pandey - Digital Marketer & Trainer | Empowering Business Growth",
  description: "Transform your business with proven digital marketing strategies. Expert training in SEO, social media, paid ads & more. Join 10,000+ successful students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
         <Navbar />
          <Toaster position="top-right" /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
