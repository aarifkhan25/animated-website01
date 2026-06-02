"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";
import AnimatedSidebar from "./AnimatedSidebar.jsx";
export default function page() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const innerGlowStyle = {
    boxShadow:
      "inset 0px 0px 40px rgba(0, 157, 228, 0.45), inset 0px 0px 15px rgba(0, 157, 228, 0.3)",
  };
  const faqData = [
    {
      id: 1,
      question: "Does Pangea have Design experts?",
      answer:
        "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
    },
    {
      id: 2,
      question: "Can I search for Design experts with AI on Pangea?",
      answer:
        "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
    },
    {
      id: 3,
      question: "Is hiring Design freelancers on Pangea free?",
      answer:
        "You get cost-effective expertise, faster turnaround times, and the flexibility Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires. to pause or scale services as your business evolves.",
    },
    {
      id: 4,
      question: "Are Design freelancers on Pangea covered by an NDA?",
      answer:
        "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
    },
    {
      id: 5,
      question: "How are Design experts on Pangea vetted?",
      answer:
        "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
    },
  ];
const quesitons=[   { id: "gen", label: "General Quesitons" },
    { id: "get_hired", label: "Getting Hired Questions" },
    { id: "profile", label: "Pangean Profile Questions" },
    { id: "fin_t", label: "Financial Questions " },
    { id: "acc", label: "Account Questions" }, 
   
    { id: "hire", label: "Hiring " },
    { id: "work_talent", label: "Working with Talent" },
    { id: "comp_prof", label: "Company Profile" },
    { id: "fin_c", label: "Financials" }]
  return (
    <section className="w-full mt-10 md:mt-15 lg:mt-10 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 py-10 lg:py-20 1xl:py-30  ">
      <div
        style={innerGlowStyle}
        className="w-full h-full flex flex-col justify-center items-center gap-5 lg:gap-10 
                  bg-[#1B0063] border border-[#1B0063] rounded-[4px] 
                  py-20 md:py-25 lg:py-40 transition-all duration-300 hover:border-[#1B0063]/60"
        role="banner"
        aria-label="Pangea in the News Heading"
      >
        <div>
          <h1
            className="text-white font-mulish text-2xl sm:text-4xl md:text-5xl lg:text-[75px]
                        font-medium tracking-wide text-center select-none antialiased"
          >
            Frequently Asked Questions
          </h1>
        </div>

        <div className="flex justify-center px-4">
          <p className="text-white font-mulish text-base md:text-xl lg:text-2xl text-center ">
            Find answers to commonly-asked questions related to hiring and
            freelancing on Pangea{" "}
          </p>
        </div>
      </div>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-mulish py-5 lg:py-10 ">
              Talent FAQs
            </h2>
            <div>
            <p className="text-xl md:text-3xl lg:text-[40px] font-mulish ">
              General Questions
            </p>
          

        <div className="w-full  space-y-4 mt-5 lg:mt-10">
          {faqData.map((item, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
        </div>
     
    </section>
  );
}
