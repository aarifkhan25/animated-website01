"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { HiOutlineChevronDown } from "react-icons/hi";
export default function Quesitons({faqData = []}) {
    const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
 
  return (
      <section className="w-full  text-white py-5 md:py-10  1xl:py-15 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80">
            <div className="w-full mx-auto flex flex-col justify-between  gap-10">
              {/* Left Content */}
              <div className="flex-1">
                {/* Orange Badge */}
                <AnimatedContent
                  distance={20}
                  direction="horizontal"
                  reverse
                  duration={0.5}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0.5}
                >
                  <div className="mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-[#370c00]   text-[#f35400] text-[8px] md:text-[12px] font-jb-mono font-bold uppercase">
                      FAQs about Fractional Hiring
                    </span>
                  </div>
                </AnimatedContent>
    
                {/* Heading */}
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur
                  blurStrength={1}
                  baseRotation={0}
                >
                  {" "}
                  <h2 className="text-[50px] md:text-[65px] lg:text-8xl font-mulish leading-[1] tracking-tight mb-12">
                    Frequently Asked <br/> Questions
                  </h2>
                  {/* Subtext */}
                
                </ScrollReveal>
              </div>
            </div>
          
      <div className="w-full  space-y-4">
        {faqData.map((item) => (     <AnimatedContent
                      distance={20}
                      direction="vertical"
                      reverse
                      duration={0.8}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.2}
                      delay={0.1}
                       key={item.id} 
                    >
          <div 
           
            className="border border-white/10 bg-[#141414] rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Header / Question Area */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full cursor-pointer flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="text-base md:text-xl lg:text-3xl font-medium text-white">
                {item.question}
              </span>
              
              {/* Animated Arrow Icon */}
              <motion.div
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white ml-4"
              >
               <HiOutlineChevronDown className="w-6 h-6 stroke-[2]" />
              </motion.div>
            </button>

            {/* Expandable Answer Area */}
            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-xs md:text-base font-mulish text-white leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div></AnimatedContent>
        ))}
      </div>
    
          </section>
  )
}
