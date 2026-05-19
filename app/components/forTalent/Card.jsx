"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { GoArrowRight } from "react-icons/go";

const companies = [
  { name: "SOMETHINGS", img: "/assets/comp/logo5.avif" },
  { name: "Context", img: "/assets/comp/logo8.avif" }, 
  { name: "Dorothy™", img: "/assets/comp/logo6.svg" },
  { name: "SecurityScorecard", img: "/assets/comp/logo4.svg" },
];
export default function Card() {
 const containerRef = useRef(null);

  // 1. Container ke scroll progress ko track karein
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = Jab card ka top screen ke bottom se enter karega
    // "center center" = Jab card screen ke bilkul center mein pahunchega
    // "end start" = Jab card screen ke top se poora bahar nikal jayega
    offset: ["start end", "center center", "end start"],
  });

  // 2. 3D Transforms: Shuruat mein 3D tilt -> Center mein normal (0) -> Baahar jaate waqt fir se 3D tilt
  // scrollYProgress:  [   0,     0.5,      1   ]  (0 = Bottom, 0.5 = Center, 1 = Top)
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]); // X axis par tilt
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-25, 0, 25]); // Y axis par tilt
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);  // Center mein aate hi zoom-in hoga
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1, 0.5, 0]); // Fade effect

  return (
    <div     ref={containerRef}    style={{ perspective: "1000px" }}  className="flex items-center justify-center min-h-screen px-6 md:px-10 lg:px-20 ">
      {/* Main Parent Container */}
      <motion.div style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          transformStyle: "preserve-3d", // Child elements ko 3D space mein rakhne ke liye
        }} className="w-full flex flex-col md:flex-row overflow-hidden rounded-xl  bg-[#1a1a1a]">
        
        {/* LEFT DIV: 70% Width */}
        <div className="md:flex-[6] w-full p-6 md:p-8 lg:p-10 flex flex-col justify-between items-start">
          <div className="w-full">
            <h5 className="text-[#ff004e] uppercase text-xs md:text-base font-jb-mono mb-6">
              Your Perfect Fit
            </h5>
            <h1 className="text-white text-2xl md:text-[35px] lg:text-[40px]  font-mulish font-medium mb-8">
              Connect with top companies <br className="hidden lg:block" /> 
              that share your vision
            </h1>
            <p className="text-gray-400 text-xs md:text-sm lg:text-base font-mulish font-semibold">
              Want to build on your experience in a space, find a company working on the
              next big thing, or align with purpose-focused organizations? Find them all on
              Pangea, right when they're looking for you.
            </p>
          </div>

          <div className="mt-12">
            <button className="group flex items-center justify-center gap-2 bg-[#ff004e] hover:bg-[#ff185e] transition-all text-black px-8 py-4 rounded-full font-bold text-sm md:text-lg">
              Get Started
              <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT DIV: 30% Width */}
        <div className="md:flex-[4] w-full bg-[#40000b] p-6 md:p-8 flex flex-col gap-4 justify-center ">
          {companies?.map((comp, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] rounded-2xl py-6 px-4 flex items-center justify-center border border-white/5 shadow-2xl min-h-[80px]"
            >
              <div
                className="w-full max-w-[140px] h-10 md:h-12 bg-[#ff004e]"
                style={{
                  maskImage: `url('${comp.img}')`,
                  WebkitMaskImage: `url('${comp.img}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  )
}