import { useState, useEffect } from "react";
import FadeContent from "@/components/FadeContent.jsx";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import Link from 'next/link';
const nav = [
  { 
    name: "Hire", 
    href: "#", 
    isMega: true, 
    subItems: [
      { 
        title: "Company stages", 
        links: [
          { name: "Early-Stage-Startups", href: "/hire/stages/early-stage-startups" },
          // { name: "Growth-Stage-Startups", href: "/hire/stages/growth-stage-startups" },
          // { name: "Enterprise Companies", href: "/hire/stages/enterprise" }
        ] 
      },
      { 
        title: "Categories", 
        links: [
          { name: "Design", href: "/hire/categories/design" },
          // { name: "Marketing", href: "/hire/categories/marketing" },
          // { name: "Operations", href: "/hire/categories/operations" },
          // { name: "Engineering", href: "/hire/categories/engineering" },
          // { name: "Content", href: "/hire/categories/content" }
        ] 
      },
      { 
        title: "Industries", 
        links: [
          { name: "AI & Machine Learning", href: "/hire/industries/ai-machine-learning" },
          // { name: "Direct to Consumer", href: "/hire/industries/direct-to-consumer" },
          // { name: "Business to Business", href: "/hire/industries/business-to-business" },
          // { name: "Marketing & Design Agencies", href: "/hire/industries/marketing-design-agencies" },
          // { name: "Healthcare", href: "/hire/industries/healthcare" }
        ] 
      }
    ]
  }, 
  { 
    name: "For Talent", 
    href: '/forTalent',
  }, 
  { 
    name: "About", 
    href: '#', 
    subItems: [
      { name: "Our Mission", href: "/about/mission" },
      { name: "Press", href: "/about/press" },
    ]
  }, 
  { 
    name: "Resources", 
    href: '#',
    subItems: [ 
      // { name: "Job Description Generator", href: "/resources/job-description-generator" },
      { name: "Blogs", href: "/resources/blogs" },
      { name: "FAQ", href: "/resources/faq" },
    ]
  }
];
export default function Header() {
     const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

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
    setMobileDropdownOpen(null); 
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };
  return (
   <header>
            <nav
              onMouseLeave={() => setHoveredIndex(null)}
              className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 transition-all duration-300 ${
                isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3" : "bg-[#0d0d0d] py-5"
              }`}
            >
              <div className="w-full flex items-center justify-between">
                {/* Logo & Desktop Nav Links */}
                <div className="flex items-center gap-5 lg:gap-10">
                  <Link href="/" onClick={closeMobileMenu}>
                    <Image 
                      width={40} 
                      height={40} 
                      src="/assets/logo.svg" 
                      alt="logo" 
                      priority 
                      className="hover:opacity-80 cursor-pointer object-contain" 
                    />
                  </Link>

                  <div className="hidden md:flex items-center gap-4 lg:gap-6 relative h-full">
                    {nav?.map((item, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setHoveredIndex(i)}
                        className="py-2"
                      >
                        {/* FIX: यहाँ href हमेशा एक वैलिड स्ट्रिंग (item.href || "#") रहेगा */}
                        <Link 
                          href={item.href || "#"}
                          className="hover:text-gray-400 text-white transition-colors cursor-pointer text-sm lg:text-base font-mulish font-semibold flex items-center gap-1"
                        >
                          <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.1 * i}
                          >
                            <span className="flex items-center gap-1">
                              {item.name}
                              {item.subItems && <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${hoveredIndex === i ? 'rotate-180' : ''}`} />}
                            </span>
                          </AnimatedContent>
                        </Link>

                        {/* DROP DOWNS SYSTEM */}
                        <AnimatePresence>
                          {hoveredIndex === i && item.subItems && (
                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 15 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className={`fixed left-0 top-[60px] w-full z-50 transition-all duration-300 ${
                                isScrolled 
                                  ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
                                  : "bg-[#0d0d0d] border-b border-white/5 shadow-xl"
                              } px-6 md:px-10 lg:px-20 py-8`}
                            >
                              <div className="max-w-7xl mx-auto">
                                {item.isMega ? (
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {item.subItems.map((group, groupIdx) => (
                                      <div key={groupIdx} className="flex flex-col gap-3">
                                        <h3 className="text-xs uppercase tracking-wider font-jb-mono text-white font-bold">
                                          {group.title}
                                        </h3>
                                        <div className="flex flex-col gap-2">
                                          {group.links.map((subLink, subIdx) => (
                                            <Link
                                              key={subIdx}
                                              href={subLink.href || "#"}
                                              onClick={() => setHoveredIndex(null)}
                                              className="text-sm font-medium font-mulish text-gray-300 hover:text-white transition-colors py-1 block"
                                            >
                                              {subLink.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="flex flex-row items-center gap-4 md:gap-20 lg:gap-30 1xl:gap-40">
                                    {item.subItems.map((subItem, subIdx) => (
                                      <Link
                                        key={subIdx}
                                        href={subItem.href || "#"}
                                        onClick={() => setHoveredIndex(null)}
                                        className="text-sm lg:text-base font-semibold font-mulish text-gray-300 hover:text-white transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
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
                            distance={10}
                            direction="vertical"
                            reverse
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.5}
                          >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <Link
                      href="/auth/login"
                      className="bg-[#1a1a1a] cursor-pointer hover:bg-[#242323] text-white font-semibold px-4 py-2 rounded-full text-sm font-mulish transition duration-150"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/hiring"
                      className="hidden sm:flex cursor-pointer bg-white hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-full text-sm font-mulish transition duration-150"
                    >
                      Start Hiring Talents
                    </Link>
                  </div>
</AnimatedContent>
                  {/* Hamburger Icon */}
                  <div className="flex md:hidden items-center cursor-pointer p-2 text-white z-50">
                    {isMobileMenuOpen ? (
                      <MdOutlineClose onClick={toggleMobileMenu} className="w-6 h-6" />
                    ) : (
                      <FiAlignJustify onClick={toggleMobileMenu} className="w-6 h-6" />
                    )}
                  </div>
                </div>
              </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div 
              className={`md:hidden fixed inset-0 top-[64px] h-[calc(100vh-64px)] w-full bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <div className="flex flex-col px-6 py-6 gap-2 overflow-y-auto h-full pb-20">
                {nav?.map((item, i) => (
                  <div key={i} className="flex flex-col w-full border-b border-white/5 py-2">
                    {/* FIX: मोबाइल पर पैरेंट आइटम पर क्लिक करने पर ड्रॉपडाउन स्मूथली खुलेगा */}
                    <div 
                      onClick={() => item.subItems ? toggleMobileDropdown(i) : closeMobileMenu()}
                      className="p-2 hover:text-gray-400 cursor-pointer text-white w-full text-lg font-mulish font-semibold flex justify-between items-center"
                    >
                      {item.subItems ? (
                        <span className="w-full flex justify-between items-center">
                          {item.name}
                          <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen === i ? 'rotate-180' : ''}`} />
                        </span>
                      ) : (
                        <Link href={item.href} className="w-full">{item.name}</Link>
                      )}
                    </div>
                    
                    {/* मोबाइल व्यू सब-आइटम टॉगल एनिमेशन */}
                    {item.subItems && mobileDropdownOpen === i && (
                      <div className="pl-4 flex flex-col gap-2 mt-1 bg-white/5 p-3 rounded-lg transition-all">
                        {item.isMega ? (
                          item.subItems.map((group, gIdx) => (
                            <div key={gIdx} className="mb-2">
                              <p className="text-[10px] font-jb-mono text-gray-500 uppercase tracking-wider mb-1">{group.title}</p>
                              {group.links.map((subLink, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={subLink.href || "#"}
                                  onClick={closeMobileMenu}
                                  className="text-sm font-mulish text-gray-400 hover:text-white py-1 block"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        ) : (
                          item.subItems.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href || "#"}
                              onClick={closeMobileMenu}
                              className="text-sm font-mulish text-gray-400 hover:text-white py-1 block"
                            >
                              {subItem.name}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
                
                <Link
                  href="#hiring"
                  onClick={closeMobileMenu}
                  className="mt-6 sm:hidden bg-white text-black font-bold text-center py-2.5 px-6 rounded-full text-base cursor-pointer"
                >
                  Start Hiring Talents
                </Link>
              </div>
            </div>
          </header>
  )
}
