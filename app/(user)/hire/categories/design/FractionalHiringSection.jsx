"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
// Sample Cards Data Array to simulate the continuous row
const sampleCards = [
  { id: 1, img: "/assets/hire/stages/F1.avif" ,classname:"w-72 xl:w-82 h-full blur-sm"},
  { id: 2, img: "/assets/hire/stages/F2.avif",classname:"w-56 xl:w-62 h-80 xl:h-88 mt-[5%] lg:mt-[10%]",h:"h-44 xl:h-50" },
  { id: 3, img: "/assets/hire/stages/F3.avif" ,classname:"w-56 xl:w-62 h-80 xl:h-88 mt-[5%] lg:mt-[10%]",h:"h-44 xl:h-50"},
  { id: 4, img: "/assets/hire/stages/F4.avif",classname:"w-72 xl:w-82 h-full blur-sm"},
];

export default function FractionalHiringSection({textColor, bgColor}) {
  const targetRef = useRef(null);

  // Binding the 3D scroll matrix tightly to viewport steps
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Left Line Animation
  const leftX = useTransform(scrollYProgress, [0, 0.4], [-380, -40]);
  const leftSkewY = useTransform(scrollYProgress, [0, 0.4], [12, 0]);
  const leftRotateY = useTransform(scrollYProgress, [0, 0.4], [28, 0]);

  // Right Line Animation
  const rightX = useTransform(scrollYProgress, [0, 0.4], [380, 40]);
  const rightSkewY = useTransform(scrollYProgress, [0, 0.4], [-12, 0]);
  const rightRotateY = useTransform(scrollYProgress, [0, 0.4], [-28, 0]);

  // Fade control
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [0.1, 1]);

  return (
    <div ref={targetRef} className="text-white  relative flex flex-col justify-center items-center overflow-hidden  py-10 lg:py-20 1xl:py-30 px-4">
      
      {/* Fixed Layout Map: Default to vertical flex grid structure, expands to 12 columns above 'lg' desktop screens */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 items-center justify-center gap-10 lg:gap-0 relative min-h-[500px]">
        
        {/* ========================================== */}
        {/* LEFT COLUMN: Infinite Row 1 (Skewed Inward)*/}
        {/* ========================================== */}
        <div className="w-full flex lg:col-span-4 justify-center lg:justify-end z-10" style={{ perspective: "1000px" }}>
          <motion.div 
            style={{ x: leftX, skewY: leftSkewY, rotateY: leftRotateY, opacity: contentOpacity }}
            className="flex justify-center items-center gap-5 lg:gap-10 pointer-events-none transform-gpu"
          >
            {sampleCards.slice(0, 2).map((card) => (
              <div key={`left-${card.id}`} className={`${card.classname} rounded-xl overflow-hidden flex-shrink-0 shadow-2xl`}>
                <div className="w-full">
                  <img src={card.img} alt="Designer Profile" className={`w-full ${card.h || 'h-full'} object-cover`} />
                </div>
                <div style={{backgroundColor:bgColor}} className="p-5 border-t border-white/5">
                  <div className="flex flex-col justify-start gap-5"> 
                    <h4 className="text-white text-base md:text-lg lg:text-2xl font-mulish">Name</h4>
                    <p style={{color:textColor}} className="text-[10px] md:text-xs lg:text-base font-jb-mono uppercase leading-tight">
                      THIS IS SOME TEXT INSIDE OF A DIV BLOCK.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ========================================== */}
        {/* CENTER COLUMN: Perfectly Anchored Layout   */}
        {/* ========================================== */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center col-span-1 lg:col-span-4 text-center space-y-5 z-20 relative py-8 px-4 lg:px-2">
          <span style={{color:textColor}} className="text-[10px] md:text-xs lg:text-base font-jb-mono uppercase block tracking-wider">
            Fractional Hiring At Scale
          </span>
          <h3 className="text-2xl md:text-4xl lg:text-[44px] xl:text-[48px] font-mulish text-white leading-[1.15]">
            Find your next Designer today
          </h3>
          <p className="text-[10px] md:text-xs lg:text-base font-mulish opacity-80">
            Start in seconds. Match in minutes. Hire without limits.
          </p>
          <div className="pt-2 flex justify-center">
            <Link href="/starthiring" 
              style={{backgroundColor:textColor}}  
              className="inline-flex items-center justify-center gap-2 text-black py-2 px-4 lg:py-2.5 lg:px-5 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer hover:opacity-90 active:scale-98 transition-all"
            >
              Start Hiring
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
            </Link>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: Infinite Row 2 (Skewed Inward)*/}
        {/* ========================================== */}
        <div className="w-full flex lg:col-span-4 justify-center lg:justify-start z-10" style={{ perspective: "1000px" }}>
          <motion.div 
            style={{ x: rightX, skewY: rightSkewY, rotateY: rightRotateY, opacity: contentOpacity }}
            className="flex justify-center items-center gap-5 lg:gap-10 pointer-events-none transform-gpu"
          >
            {sampleCards.slice(2, 4).map((card) => (
              /* Fixed Key to avoid mapping issues and updated responsive layout container boundaries */
              <div key={`right-${card.id}`} className={`${card.classname} rounded-xl overflow-hidden flex-shrink-0 shadow-2xl`}>
                <div className="w-full">
                  <img src={card.img} alt="Designer Profile" className={`w-full ${card.h || 'h-full'} object-cover`} />
                </div>
                <div style={{backgroundColor:bgColor}} className="p-5 border-t border-white/5">
                  <div className="flex flex-col justify-start gap-5"> 
                    <h4 className="text-white text-base md:text-lg lg:text-2xl font-mulish">Name</h4>
                    <p style={{color:textColor}} className="text-[10px] md:text-xs lg:text-base font-jb-mono uppercase leading-tight">
                      THIS IS SOME TEXT INSIDE OF A DIV BLOCK.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}