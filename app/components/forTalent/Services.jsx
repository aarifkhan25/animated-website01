"use client"

import  { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
const items = [
  { id: 1, name: "Design", color: "#009ded" },
  { id: 2, name: "Operations", color: "#ff0044" },
  { id: 3, name: "Engineering", color: "#1c143d" },
  { id: 4, name: "Marketing", color: "#00ffcc" },
  { id: 5, name: "Product Hunt", color: "#da552f" },
];
const services=['Full Stack Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Product Manager', 'Data Scientist', 'DevOps Engineer', 'App Developer', 'QA Engineer', 'Cloud Architect'];
export default function Services() {
     // Humne poore section ko track karne ke liye ek ref banaya
      const containerRef = useRef(null);
      
      const duplicatedItems = [...items, ...items];
    
      // useScroll ki madad se is specific section ki scroll progress track hogi
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Jab section screen par aayega tabhi se scroll track shuru hoga
      });
    
      // Row 1: Scroll karne par Left to Right jayegi (e.g., -30% se lekar 0% tak)
      const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
    
      // Row 2: Scroll karne par Right to Left jayegi (e.g., 0% se lekar -30% tak)
      const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <div 
        ref={containerRef}
        className="w-full overflow-hidden  pb-20 relative flex flex-col gap-5 mt-5 lg:mt-0"
      >
      

        {/* ================= ROW 1: SCROLL HONE PAR LEFT TO RIGHT ================= */}
        <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xRight }} // Scroll transform value attach ki
        >
          {services?.map((item, index) => (
          <div
              key={index}
              className="px-2 md:px-8 py-1 md:py-3 border border-[#ff004e] rounded-lg md:rounded-xl shadow-xl "
              
            >
            
              <p className="text-[#ff004e] text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= ROW 2: SCROLL HONE PAR RIGHT TO LEFT ================= */}
        <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xLeft }} // Scroll transform value attach ki
        >
          {services?.reverse()?.map((item, index) => (
             <div
              key={index}
              className="px-2 md:px-8 py-1 md:py-3 border border-[#ff004e] rounded-lg md:rounded-xl shadow-xl "
              
            >
            
              <p className="text-[#ff004e] text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
  )
}
