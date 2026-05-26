"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import FadeContent from "../components/FadeContent.jsx";
import { FiAlignJustify } from "react-icons/fi";
import { JetBrains_Mono, Mulish } from "next/font/google";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { motion, AnimatePresence } from "framer-motion";
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

const nav = [
  { 
    name: "Hire", 
    href: '/',
    subItems: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Press", href: "/about#press" },
    ]
  }, 
  { 
    name: "For Talent", 
    href: '/forTalent',
  }, 
  { 
    name: "About", 
    href: '/about',
    subItems: [
      { name: "Our Mission", href: "/about#mission" },
      { name: "Press", href: "/about#press" },
    ]
  }, 
  { 
    name: "Resources", 
    href: '/resources',
    subItems: [ 
      { name: "Job Description Generator", href: "/jobgesgen" },
      { name: "Blogs", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ]
  }
];

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={`${jbMono.variable} ${mulish.variable} bg-black text-white antialiased`}>
        
        <div className="w-full font-sans min-h-screen flex flex-col justify-between">
          
          {/* HEADER NAV CONTAINER */}
          <header>
            <nav
              onMouseLeave={() => setHoveredIndex(null)}
              className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30 py-4 flex items-center justify-between transition-all duration-300 ${
                isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-[#0d0d0d]"
              }`}
            >
              {/* Logo & Desktop Nav Links */}
              <div className="flex items-center gap-5 lg:gap-10">
                <Link href="/" onClick={closeMobileMenu}>
                  <Image 
                    width={500} 
                    height={500} 
                    src="/assets/logo.svg" 
                    alt="logo" 
                    priority 
                    className="hover:opacity-80 cursor-pointer w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" 
                  />
                </Link>

                <div className="hidden sm:flex items-center gap-4 lg:gap-8 relative h-full py-2">
                  {nav?.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredIndex(i)}
                      className="py-2"
                    >
                      <Link 
                        href={item.href}
                        className="hover:text-gray-600 text-white transition-colors cursor-pointer text-sm lg:text-base font-mulish font-semibold "
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
                          delay={0.5}
                        >
                          <FadeContent
                            blur={true}
                            duration={1.5}
                            easing="ease-in"
                            initialOpacity={0}
                            delay={0.5}
                          >
                            {item.name}
                          </FadeContent> 
                        </AnimatedContent>
                      </Link>

                      <AnimatePresence>
                        {hoveredIndex === i && item.subItems && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                          
                           className={`fixed left-0 top-[68px] w-full z-40 transition-all duration-300 ${
  isScrolled 
    ? "bg-black/50 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
    : "bg-[#0d0d0d] border-b border-white/5 shadow-xl"
} px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30 py-6`}
                          >
                            <div 
                              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-20 lg:gap-30 1xl:gap-40 max-w-7xl transition-all duration-300 md:pl-14 lg:pl-18 1xl:pl-21 2xl:pl-26"
                            >
                              {item.subItems.map((subItem, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subItem.href}
                                  className="p-2 text-white group"
                                >
                                  <span className="text-sm lg:text-base font-semibold font-mulish hover:text-gray-400 transition-colors">
                                    {subItem.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Mobile Toggle */}
              <div className="flex items-center gap-4">
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
                  delay={0.5}
                > 
                  <FadeContent
                    blur={true}
                    duration={1.5}
                    easing="ease-in"
                    initialOpacity={0}
                    delay={0.5}
                  >
                    <div className="flex items-center gap-3 lg:gap-6">
                      <Link
                        href="#courses"
                        className="bg-[#1a1a1a] cursor-pointer hover:bg-[#242323] text-white font-semibold px-4 py-2.5 font-mulish rounded-full text-sm lg:text-base transition duration-150"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="#courses"
                        className="hidden sm:flex cursor-pointer bg-white hover:bg-gray-200 text-black font-semibold px-4 font-mulish py-2.5 rounded-full text-sm lg:text-base transition duration-150"
                      >
                        Start Hiring Talents
                      </Link>
                    </div>
                  </FadeContent>
                </AnimatedContent>

                {/* Hamburger Icon */}
                <div className="flex sm:hidden items-center cursor-pointer p-2 text-white z-50">
                  {isMobileMenuOpen ? (
                    <MdOutlineClose onClick={toggleMobileMenu} className="w-6 h-6" />
                  ) : (
                    <FiAlignJustify onClick={toggleMobileMenu} className="w-6 h-6" />
                  )}
                </div>
              </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div 
              className={`sm:hidden fixed inset-0 top-[64px] h-[calc(100vh-64px)] w-full bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <div className="flex flex-col px-6 py-8 gap-2">
                {nav?.map((item, i) => (
                  <div key={i} className="flex flex-col w-full">
                    <Link 
                      href={item.href} 
                      onClick={closeMobileMenu} 
                      className="p-4 hover:text-gray-600 cursor-pointer text-white w-full text-lg font-mulish font-medium border-b border-white/5 hover:bg-white/5 transition-all rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                
                <Link
                  href="#courses"
                  onClick={closeMobileMenu}
                  className="mt-4 sm:hidden bg-white text-black font-bold text-center py-2 px-6 rounded-full text-base cursor-pointer self-center"
                >
                  Start Hiring Talents
                </Link>
              </div>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="w-full flex-grow ">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

      </body>
    </html>
  );
}