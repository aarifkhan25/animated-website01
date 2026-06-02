"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineChevronDown } from "react-icons/hi";

export default function FAQ({ bgColor, textColor }) {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "Does Pangea have Design experts?",
      answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
    {
      id: 2,
      question: "Can I search for Design experts with AI on Pangea?",
      answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
    {
      id: 3,
      question: "Is hiring Design freelancers on Pangea free?",
      answer: "You get cost-effective expertise, faster turnaround times, and the flexibility Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires. to pause or scale services as your business evolves."
    },
    {
      id: 4,
      question: "Are Design freelancers on Pangea covered by an NDA?",
      answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    },
    {
      id: 5,
      question: "How are Design experts on Pangea vetted?",
      answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires."
    }
  ];

  return (
    <section className="w-full text-white pb-10 md:pb-15 lg:pb-20 1xl:pb-30 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80" style={{ backgroundColor: bgColor }}>
      <div className="grid gap-0 md:gap-5 lg:gap-10 1xl:gap-15 lg:gap-0 justify-start text-white">
        
        {/* Top Badge */}
        <div className="mt-10 md:mt-25 mb-10 md:mb-0">
          <span style={{ color: textColor }} className="font-jb-mono text-xs md:text-sm lg:text-base uppercase">
            Fractional WORK FAQ
          </span>
        </div>

        <div>
          <h1 className="text-2xl md:text-[45px] lg:text-[56px] tracking-wide leading-[1.1] mb-9 font-mulish">
            Everything you need to know <br /> about finding a job on Pangea
          </h1>
        </div>

      </div>

      {/* मेन कंटेनर */}
      <div className="grid md:flex items-start gap-5 lg:gap-10">
        
        {/* div 1: FAQ लिस्ट (flex-1 जोड़ा ताकि यह बची हुई सारी जगह ले ले) */}
        <div className="flex-1 flex flex-col gap-5 lg:gap-6 w-full">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 bg-[#141414] rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Header / Question Area */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full cursor-pointer flex items-center justify-between p-3  lg:p-6 text-left focus:outline-none"
              >
                <span className="text-base md:text-lg lg:text-2xl font-medium text-white pr-4">
                  {item.question}
                </span>

                {/* Animated Arrow Icon */}
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white flex-shrink-0"
                >
                  <HiOutlineChevronDown className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" />
                </motion.div>
              </button>

              {/* Expandable Answer Area */}
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-4 md:px-5 md:pb-5 lg:px-6 lg:pb-6 text-xs md:text-sm lg:text-base font-mulish text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* div 2: राइट साइड कांटेक्ट बॉक्स (FIXED: h-fit, md:sticky, और flex-shrink-0 लॉक्ड विड्थ) */}
        <div className="w-full md:w-[280px] lg:w-[380px] h-fit md:sticky md:top-6 flex-shrink-0 mt-6 md:mt-0">
          <div className="flex flex-col justify-start items-center gap-4 rounded-lg bg-[#141414] p-6 lg:p-8 border border-white/5 shadow-xl">
            <h1 className="text-base md:text-lg text-center lg:text-2xl font-semibold font-mulish text-white">
              Got a different question for us?
            </h1>
            <p className="text-white font-semibold text-xs md:text-sm lg:text-base text-center font-mulish">
              Let us know & we’ll get back to you ASAP!
            </p>

            <button
              className="group flex items-center gap-2 transition-all bg-white text-black py-2 px-3 md:py-2.5 md:px-6 rounded-full font-mulish font-bold text-xs md:text-sm lg:text-base cursor-pointer active:scale-95"
            >
              <div className="flex justify-center items-center gap-1">
                Contact Us
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}