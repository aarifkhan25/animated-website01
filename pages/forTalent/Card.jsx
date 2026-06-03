"use client";
import React, { useRef,useState,useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import { GoArrowRight } from "react-icons/go";
import Image from "next/image"

export default function Card({title,heading,subheading,role,textColor,bgColor,companies}) {
 const containerRef = useRef(null);
const [isMobile,setIsMobile]=useState(false);
 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = when card enters the screen from the bottom 
    // "center center" = when card is at the center of the screen
    // "end start" = when card leaves the screen from the top
    offset: ["start end", "center center", "end start"],
  });

  
  
    // 2. Base transforms variables
    const baseRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [22, 0, -22]);
    const baseRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 12]);
    const baseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1, 0.5, 0]);

    const rotateX = isMobile ? 0 : baseRotateX;
    const rotateY = isMobile ? 0 : baseRotateY;
    const scale = isMobile ? 1 : baseScale;
   useEffect(() => {
          const checkMobile = () => {
              setIsMobile(window.innerWidth < 768);
          };
          checkMobile(); // Initial check
          window.addEventListener("resize", checkMobile);
          return () => window.removeEventListener("resize", checkMobile);
      }, []);


  return (
    <div     ref={containerRef}    style={isMobile ? {} : { perspective: "1000px" }}   className={`flex items-center justify-center ${role !=="remote" ? " px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30  ":""}`}>
      {/* Main Parent Container */}
      <motion.div style={{
          rotateX,
          rotateY,
          scale,
          opacity,
         transformStyle: isMobile ? "flat" : "preserve-3d",
        }} className="w-full flex flex-col md:flex-row overflow-hidden rounded-xl  bg-[#1a1a1a]">
        
        {/* LEFT DIV: 70% Width */}
        <div className="md:flex-[6] w-full p-5 md:p-7 lg:p-10 flex flex-col justify-between items-start">
          <div className="w-full">
            <h5 style={{color:textColor}} className="        uppercase text-xs md:text-sm lg:text-base font-jb-mono mb-6">
              {title}
            </h5>
            <h1 className="text-white text-2xl md:text-[30px] lg:text-[40px]  font-mulish font-medium mb-8">
              {heading}
            </h1>
            <p className="text-white text-[10px] md:text-sm lg:text-[17px] 1xl:text-lg font-mulish font-semibold">
              {subheading}
            </p>
          </div>

          <div className="mt-12">
            <button style={{ backgroundColor: textColor }}className="group flex items-center justify-center gap-2       transition-all text-black  rounded-full font-bold font-mulish p-2.5 lg:py-3 lg:px-4  1xl:py-6 1xl:px-8 text-sm lg:text-lg 1xl:text-2xl ">
              Get Started
              <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT DIV: 30% Width */}

     {role==="remote"? <div style={{ backgroundColor: bgColor}} className="md:flex-[4] w-full h-[300px] md:h-auto  flex justify-center items-center">
          
          <div
            className="w-full  h-full      "
            style={{
              maskImage:`url('/assets/fortalent2.png')` ,
              WebkitMaskImage:`url('/assets/fortalent2.png')`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              backgroundColor: textColor
            }}
          >
        </div>
        </div>:role ==="world" ?  <div 
  style={{ backgroundColor: bgColor }} 
  className="md:flex-[4] relative w-full z-0 h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden flex items-center justify-center"
>
  {/* 1. इमेज मास्क डिब */}
  <div
    className="w-full h-full"
    style={{
      maskImage: `url('/assets/hire/stages/E2.png')`,
      WebkitMaskImage: `url('/assets/hire/stages/E2.png')`,
      maskSize: 'cover', // 'cover' से इमेज कट सकती है, 'contain' ज्यादा सेफ है
      WebkitMaskSize: 'cover',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      backgroundColor: textColor
    }}
  />

 
  <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center bg-[#0d0d0d] rounded-lg p-4 md:py-3 md:px-4 lg:py-6 lg:px-6 border border-white/10 shadow-2xl min-h-[60px] w-[90%] max-w-[400px]">
    <Image 
      src="/assets/hire/stages/E3.svg" 
      alt="Stage Detail" 
      width={400} 
      height={50} 
      className="w-full h-auto object-contain" 
    />
  </div>
</div>:
        <div style={{backgroundColor:bgColor}} className="md:flex-[4] w-full  p-6 md:p-8 flex flex-col gap-4 justify-center ">
         
          {companies?.map((comp, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] rounded-lg md:py-2 md:px-1 lg:py-6 lg:px-4 flex items-center justify-center border border-white/5 shadow-2xl min-h-[80px]"
            >
              <div
                className="w-full  h-10 md:h-12      "
                style={{
                  maskImage: `url('${comp.img}')`,
                  WebkitMaskImage: `url('${comp.img}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  backgroundColor: textColor
                }}
              />
            </div>
          ))}
          
        </div>}

      </motion.div>
    </div>
  )
}