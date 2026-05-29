import React from 'react';
import FadeContent from '@/components/FadeContent.jsx';
import AnimatedContent from '@/components/AnimatedContent.jsx';

import { GoArrowRight } from "react-icons/go";
export default function Main({ textColor,heading,subheading,img }) {
  return (
    <section className="w-full text-white py-10 md:py-20 pt-20 lg:pt-25 px-6 md:pl-10 lg:pl-20 1xl:pl-25 2xl:pl-35 overflow-hidden">
   
      <div className=" grid md:justify-center md:items-center md:flex    ">
        
      
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10  justify-start items-start">
          {/* Main Heading */}
          <div>
            <FadeContent
              blur={true}
              duration={1.5}
              delay={0.5}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1 className="text-3xl md:text-5xl text-start lg:text-6xl xl:text-8xl tracking-wide leading-[1.1] font-mulish">
{heading}
              </h1>
            </FadeContent>
          </div>

          {/* Subheading */}
          <div>
            <FadeContent
              blur={true}
              duration={1.5}
              easing="ease-in"
              initialOpacity={0}
              delay={0.7}
            >
              <p className="text-white text-start text-sm md:text-lg font-medium lg:text-2xl font-mulish">
               {subheading}
              </p>
            </FadeContent>
          </div>
            {/* Button Wrapper */}
              <div className="flex justify-center md:justify-start">
                <FadeContent
                  blur={true}
                  duration={1.5}
                  delay={0}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <button style={{backgroundColor:textColor}} className="flex justify-center items-center group gap-2  transition-colors text-black py-2.5 md:py-4 px-8 md:px-12 rounded-full font-mulish font-bold text-base md:text-xl lg:text-2xl w-max  ">
                    <div className="flex justify-center items-center gap-1">
                      Get Started
                      <GoArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </FadeContent>
              </div>
        </div>

      
        <div className="flex  justify-center items-center ">
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
>
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[500px] xl:h-full 2xl:w-[550px] aspect-square transition-all duration-300  md:-mr-30 overflow-hidden "
            style={{
              maskImage: `url('${img}')`,
              WebkitMaskImage:`url('${img}')`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            
              backgroundColor: textColor
            }}
          /></AnimatedContent>
        </div>

      </div>
    </section>
  );
}