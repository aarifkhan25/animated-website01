import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default function FindNextRoleCTA() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px]  lg:h-screen bg-[#0b0c10] flex items-center justify-center overflow-hidden ">
     
      <div 
        className="absolute top-0 left-0 w-[20%] w md:w-[30%] h-[60%] md:h-full bg-gradient-to-br from-[#ff004e] via-[#ff004e]/60 to-transparent opacity-60 md:opacity-80 pointer-events-none"
        style={{
          maskImage: "url('/assets/fortalent1.png')",
          WebkitMaskImage: "url('/assets/fortalent1.png')",
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskPosition: 'bottom right', 
          WebkitMaskPosition: 'bottom right',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          transform: 'scale(-1)',
        }}
      />

      <div 
        className="absolute bottom-0 right-0 w-[20%] md:w-[30%] h-[60%] md:h-full bg-gradient-to-tl from-[#ff004e] via-[#ff004e]/60 to-transparent opacity-60 md:opacity-80 pointer-events-none"
        style={{
          maskImage: "url('/assets/fortalent1.png')",
          WebkitMaskImage: "url('/assets/fortalent1.png')",
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskPosition: 'bottom right',
          WebkitMaskPosition: 'bottom right',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />


      {/* --- CONTENT CENTER --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-7 md:gap-10 1xl:gap-15 items-center">
        
       
       <div><span className="text-[#ff004e]  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase ">
          Stop Waiting, Start Matching
        </span></div>

       <div> <h2 className="text-2xl md:text-[45px] lg:text-[56px]  tracking-wide leading-[1.1]  font-mulish">
          Find your next role on <br/>  Pangea Today
        </h2></div>

        
      <div>  <p className="text-white text-sm md:text-2xl font-mulish">
          Create your free account now to get started
        </p></div>

      <div>  <button className="group flex items-center justify-center gap-2 py-2.5 md:py-4 px-8 md:px-12 bg-[#ff004e] text-black text-base md:text-xl lg:text-2xl font-bold font-mulish  rounded-full transition-all duration-300 hover:bg-[#e6004c] hover:scale-105 active:scale-95 shadow-lg shadow-[#ff004e]/20">
          Get Started
          <HiOutlineArrowRight className="text-base md:text-lg stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
        </button></div>

      </div>
    </section>
  );
}