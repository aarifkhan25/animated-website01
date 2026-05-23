"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import FadeContent from "../components/FadeContent.jsx";
import { FiAlignJustify } from "react-icons/fi";
import { JetBrains_Mono, Mulish } from "next/font/google";
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

const nav = [
  { name: "Hire", href: '/' }, 
  { name: "For Talent", href: '/forTalent' }, 
  { name: "About", href: '/about' }, 
  { name: "Resources", href: '/resources' }
];

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Link click hone par menu band ho jayega
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={`${jbMono.variable} ${mulish.variable} bg-black text-white antialiased`}>
        
        {/* Main Wrapper */}
        <div className="w-full font-sans min-h-screen flex flex-col justify-between">
          
          {/* HEADER NAV CONTAINER */}
          <header>
            <nav
              className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30 py-4 flex items-center justify-between transition-all duration-300 ${
                isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
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

                {nav?.map((item, i) => (
                  <Link 
                    href={item.href}
                    key={i}
                    className="hidden sm:block hover:text-gray-500 transition-colors cursor-pointer text-sm lg:text-base font-mulish font-semibold"
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
                      delay={0.3 * i} // Staggered delay for smooth rendering
                    >
                      <FadeContent blur={true} duration={1.5} easing="ease-in" initialOpacity={0}>
                        {item.name}
                      </FadeContent>
                    </AnimatedContent>
                  </Link>
                ))}
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
                > 
                  <FadeContent blur={true} duration={1.5} easing="ease-in" initialOpacity={0}>
                    <div className="flex items-center gap-3 lg:gap-6">
                      <Link
                        href="#courses"
                        className="bg-[#1a1a1a] hover:bg-[#242323] text-white font-semibold px-4 py-2.5 font-mulish rounded-full text-sm lg:text-base transition duration-150"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="#courses"
                        className="hidden sm:flex bg-white hover:bg-gray-200 text-black font-semibold px-4 font-mulish py-2.5 rounded-full text-sm lg:text-base transition duration-150"
                      >
                        Start Hiring Talents
                      </Link>
                    </div>
                  </FadeContent>
                </AnimatedContent>

                {/* Hamburger / Close Icon (Mobile Only) */}
                <div className="flex sm:hidden items-center cursor-pointer p-2 text-white z-50">
                  {isMobileMenuOpen ? (
                    <MdOutlineClose onClick={toggleMobileMenu} className="w-6 h-6" />
                  ) : (
                    <FiAlignJustify onClick={toggleMobileMenu} className="w-6 h-6" />
                  )}
                </div>
              </div>
            </nav>

            {/* MOBILE MENU OVERLAY - FIX: Isko 'fixed' kiya aur top navbar ke thik niche set kiya */}
            <div 
              className={`sm:hidden fixed inset-0 top-[64px] h-[calc(100vh-64px)] w-full bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <AnimatedContent
                distance={20}
                direction="vertical"
                reverse
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
              >
               <div className="flex flex-col px-6 py-8 gap-2">
  {nav?.map((item, i) => (
    <Link 
      key={i} 
      href={item.href} 
      onClick={closeMobileMenu} 
      className="p-4 hover:text-gray-500 text-white w-full text-lg font-mulish font-medium border-b border-white/5 hover:bg-white/5 transition-all rounded-lg"
    >
      {item.name}
    </Link>
  ))}
  
  {/* FIXED BUTTON: Ab yeh full width nahi lega aur exact center mein rahega */}
  <Link
    href="#courses"
    onClick={closeMobileMenu}
    className="mt-4 sm:hidden bg-white text-black font-bold text-center py-2 px-6 rounded-full text-base self-center transition-transform active:scale-95"
  >
    Start Hiring Talents
  </Link>
</div>
              </AnimatedContent>
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