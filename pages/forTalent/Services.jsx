"use client"

import  { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";


const services=['Full Stack Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Product Manager', 'Data Scientist', 'DevOps Engineer', 'App Developer', 'QA Engineer', 'Cloud Architect'];
const reversedServices = [...services].reverse();

export default function Services({textColor}) {
     // for track a scroll position of a section
      const containerRef = useRef(null);
      

    
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Jab section screen par aayega tabhi se scroll track shuru hoga
      });
    
      const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
    
    
      const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <div 
        ref={containerRef}
        className="w-full overflow-hidden   relative flex flex-col gap-5 "
      >
      

        {/* ================= ROW 1: on scroll right ================= */}
   <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xRight }} // attech the scroll transform value
        >
          {services?.map((item) => (
          <div
              key={item}
              className="px-2 md:px-8 py-1 md:py-3 border      rounded-lg shadow-xl "
              style={{borderColor:textColor}}
            >
            
              <p style={{color:textColor}} className="   text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div>

        {/* ================= ROW 2: scroll to right ================= */}
  <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xLeft }} // attech the scroll transform value
        >
          {reversedServices.map((item) => (
             <div
              key={item}
              className="px-2 md:px-8 py-1 md:py-3 border      rounded-lg  shadow-xl "
                   style={{borderColor:textColor}}
            >
            
              <p      style={{color:textColor}} className="   text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
  )
}
