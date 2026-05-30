"use client"

import  { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedContent from "@/components/AnimatedContent.jsx";
const items = [
  { id: 1, name: "Design", color: "#009ded" },
  { id: 2, name: "Operations", color: "#ff0044" },
  { id: 3, name: "Engineering", color: "#1c143d" },
  { id: 4, name: "Marketing", color: "#00ffcc" },
  { id: 5, name: "Product Hunt", color: "#da552f" },
];
const services=['Full Stack Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Product Manager', 'Data Scientist', 'DevOps Engineer', 'App Developer', 'QA Engineer', 'Cloud Architect'];
export default function Services({textColor}) {
     // for track a scroll position of a section
      const containerRef = useRef(null);
      
      const duplicatedItems = [...items, ...items];
    
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
      <AnimatedContent
  distance={100}
  direction="horizontal"
  reverse={false}
  duration={0.8}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0.5}
> <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xRight }} // attech the scroll transform value
        >
          {services?.map((item, index) => (
          <div
              key={index}
              className="px-2 md:px-8 py-1 md:py-3 border      rounded-lg shadow-xl "
              style={{borderColor:textColor}}
            >
            
              <p style={{color:textColor}} className="   text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div></AnimatedContent> 

        {/* ================= ROW 2: scroll to right ================= */}
      <AnimatedContent
  distance={100}
  direction="horizontal"
  reverse={true}
 
  duration={0.8}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0.5}
> <motion.div
          className="flex gap-3 md:gap-6 w-max"
          style={{ x: xLeft }} // attech the scroll transform value
        >
          {services?.reverse()?.map((item, index) => (
             <div
              key={index}
              className="px-2 md:px-8 py-1 md:py-3 border      rounded-lg  shadow-xl "
                   style={{borderColor:textColor}}
            >
            
              <p      style={{color:textColor}} className="   text-sm md:text-2xl font-mulish">{item}</p>
            </div>
          ))}
        </motion.div></AnimatedContent>
      </div>
  )
}
