"use client";
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from "next/image";
export default function TailoredResults({textColor}) {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80    py-5 md:py-10 1xl:py-15  flex items-center justify-center font-sans">
      <div className=" w-full relative flex flex-col md:flex-row items-stretch">
        
      
         <div className=" w-full p-5 lg:p-10 flex flex-col justify-between items-start bg-[#1a1a1a] rounded-lg">
                 <div className="w-full">
               
                   <h1 className="text-white text-2xl md:text-[35px] lg:text-[48px]  font-mulish font-medium mb-4 lg:mb-8">
                     Get results tailored to <br/> your company
                   </h1>
                   <p className="text-white text-[10px] md:text-sm lg:text-[17px] 1xl:text-lg font-mulish font-semibold">
                  Let our matching algorithm take on your hardest talent sourcing <br className="hidden lg:block" /> problems. We identify top candidates that relate to your industrys,<br className="hidden lg:block" /> location, and company culture to find the right matc
                   </p>
                 </div>
       
                 <div className="mt-6 lg:mt-12">
                   <button style={{ backgroundColor: textColor }}className="group flex items-center justify-center gap-2       transition-all text-black  rounded-full font-bold font-mulish p-2.5 lg:py-3 lg:px-4  1xl:py-6 1xl:px-8 text-sm lg:text-lg 1xl:text-2xl ">
                     Get Started
                     <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                   </button>
                 </div>
               </div>

        <div className="w-full h-full md:h-full md:w-[42%] md:absolute md:top-12 md:bottom-6 md:right-0 mt-6 md:mt-0 z-20">
          <div className="w-full h-full rounded-xl overflow-hidden relative shadow-2xl">
          
            <div className="absolute inset-0 bg-[#e15a2c]" />
     
            <Image
            width={500}
            height={500}
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
              alt="Diverse team representing company culture alignment"
              className="w-full h-full object-cover relative z-10 contrast-105"
              loading="lazy"
            />

          </div>
        </div>

       
        <div className="hidden md:block md:w-[35%] flex-shrink-0 pointer-events-none" />

      </div>
    </section>
  );
}