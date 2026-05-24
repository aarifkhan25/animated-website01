"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeContent from "@/components/FadeContent.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { HiOutlineChevronDown } from "react-icons/hi";
export default function FAQ() {
    const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const faqData = [
    {
      id: 1,
      question: "Why choose Pangea for your marketing and design needs?",
      answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
    {
      id: 2,
      question: "How does Pangea work for businesses?",
      answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
    {
      id: 3,
      question: "What are the benefits of choosing Pangea for fractional hiring?",
      answer: "You get cost-effective expertise, faster turnaround times, and the flexibility Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires. to pause or scale services as your business evolves."
    },
       {
      id: 4,
      question: "How does Pangea work for businesses?",
      answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
      {
      id: 5,
      question: "Why choose Pangea for your marketing and design needs?",
      answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    }
  ];
  return (
      <section className="w-full  text-white py-10 md:py-15 lg:py-20 1xl:py-30 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30 ">
           <div className="flex flex-col gap-0 md:gap-5 lg:gap-10 1xl:gap-15  lg:gap-0 justify-start  text-white">
        {/* Top Badge */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.5}
        >
          <div className="mt-10 md:mt-25 mb-10 md:mb-0">
            <span className=" text-[#ff004e]  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase">
             Fractional WORK FAQ
            </span>
          </div>
        </AnimatedContent>

        {/* Main Heading */}
        <FadeContent
          blur={true}
          duration={1.5}
          delay={0.5}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="  ">
            <h1 className="text-2xl md:text-[45px] lg:text-[56px]  tracking-wide leading-[1.1] mb-9 font-mulish ">
           Everything you need to know <br/> about finding a job on Pangea
            </h1>
          </div>
        </FadeContent>
        {/* Subtext */}
      
      </div>
          
      <div className=" w-full md:w-[95%] lg:w-[70%]  space-y-4">
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
                      delay={0.5}
                       key={item.id} 
                    >
          <div 
           
            className="border border-white/10 bg-black rounded-xl overflow-hidden transition-all duration-300"
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
