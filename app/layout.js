"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import FadeContent from "../components/FadeContent.jsx";
import { FiAlignJustify } from "react-icons/fi";
import { JetBrains_Mono } from "next/font/google";
import { Mulish } from "next/font/google";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import Footer from '../app/components/Footer.jsx';
import Link from 'next/link'
const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
const nav = [{name: "Hire",href:'/'}, {name: "For Talent",href:'/forTalent'}, {name: "About",href:'/about'}, {name: "Resources",href:'/resources'}];
export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);// Close the mobile menu after clicking a link
  }
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={`${jbMono.variable} ${mulish.variable} `}>
        {/* header */}
        <div className="h-screen w-full  font-sans antialiased text-white">
          <nav
            className={`fixed top-0 left-1/2 -translate-x-1/2 w-full  mx-auto z-50 px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between transition-all duration-300 
      ${isScrolled ? "bg-black/70 backdrop-blur-[4px]" : "bg-transparent"}`}
          >
            {/* Navigation Links */}

            <div
              className={` sm:text-base flex items-center gap-5 lg:gap-10 transition-colors ${isScrolled ? "text-white" : "text-white/90"}`}
            >
              <Link href="/">
                <Image width={500} height={500} src="/assets/logo.svg" alt="logo" loading='lazy' className="hover:opacity-80 cursor-pointer w-8 h-8 lg:w-11 lg:h-11 " />
              </Link>

              {nav?.map((item, i) => {
                return (
                  <Link href={item.href}
                    key={i}
                    className="hidden sm:block hover:opacity-80 cursor-pointer md:text-sm  lg:text-base font-mulish font-semibold "
                  >
                    <AnimatedContent
                      distance={20}
                      direction="vertical"
                      reverse
                      duration={1.5}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.2}
                      delay={3}
                    >
                      <FadeContent
                        blur={true}
                        duration={1.5}
                        easing="ease-in"
                        initialOpacity={0}
                        delay={3}
                      >
                        {item.name}
                      </FadeContent>
                    </AnimatedContent>{" "}
                  </Link>
                );
              })}
            </div>
            

              <div className="flex gap-3">
            <AnimatedContent
              distance={20}
              direction="vertical"
              reverse
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={3}
            > <FadeContent
                            blur={true}
                            duration={1.5}
                            easing="ease-in"
                            initialOpacity={0}
                            delay={3}
                            >
                            <div className="flex justify-center gap-3 lg:gap-8">


                  <Link
                    href="#courses"
                    className="bg-[#1a1a1a] hover:bg-[#242323] cursor-pointer text-white font-bold  px-4 py-1 pb-3 rounded-full text-sm lg:text-base transition duration-150"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="#courses"
                    className="hidden sm:flex bg-[#ffffff] hover:bg-white cursor-pointer text-black font-bold  px-4 py-1 pb-3 rounded-full text-base transition duration-150"
                  >
                    Start Hiring Talents
                  </Link>

                    </div>
                    </FadeContent></AnimatedContent>

                  <div className="flex text-xl sm:hidden items-center cursor-pointer hove:bg-gray-100 hover:rounded-xl ">
                    {isMobileMenuOpen ? (
                      <MdOutlineClose onClick={toggleMobileMenu} className="w-6 h-6" />
                    ) : (
                      <FiAlignJustify onClick={toggleMobileMenu} className="w-6 h-6" />
                    )}

                </div>

  </div>
   </nav>



  <div className={`sm:hidden  h-screen bg-black/70 backdrop-blur-[4px] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
     <AnimatedContent
                      distance={20}
                      direction="vertical"
                      reverse
                      duration={1.5}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.2}
                      delay={1}
                    >
<div className="grid mt-15 cursor-pointer">
 {
  nav?.map((item,i)=>{
    return(<Link key={i} href={item.href} className="p-3 hover:opacity-80 text-white w-full text-sm font-mulish hover:bg[#333333]">{item.name}</Link>)
  })
 }
</div></AnimatedContent>

  </div>


          {children}
            <Footer></Footer>
        </div>


      </body>
    </html>
  );
}
