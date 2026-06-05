import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import FadeContent from '@/components/FadeContent.jsx';
import AnimatedContent from "@/components/AnimatedContent.jsx";
import Link from 'next/link';
export default function FindNextRoleCTA({textColor}) {
  return (
    <section className="relative w-full h-[400px] md:h-[600px]   py-5 md:py-10 1xl:py-15 lg:h-screen bg-[#0b0c10] flex items-center justify-center overflow-hidden ">
     
    
      <div 
className={`absolute top-0 left-0 w-[20%] md:w-[30%] h-[60%] md:h-full opacity-60 md:opacity-80 pointer-events-none
    ${textColor === "#ff004e" 
      ? "bg-gradient-to-br from-[#ff004e] via-[#ff004e]/60 to-transparent" 
      : textColor ==="#00b365"?"bg-gradient-to-br from-[#00b365] via-[#00b365]/60 to-transparent": "bg-gradient-to-br from-[#f35400] via-[#f35400]/60 to-transparent"
    }`}        style={{
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
        className={`absolute bottom-0 right-0 w-[20%] md:w-[30%] h-[60%] md:h-full opacity-60 md:opacity-80 pointer-events-none
   ${textColor === "#ff004e" 
      ? "bg-gradient-to-br from-[#ff004e] via-[#ff004e]/60 to-transparent" 
      : textColor ==="#00b365"?"bg-gradient-to-br from-[#00b365] via-[#00b365]/60 to-transparent": "bg-gradient-to-br from-[#f35400] via-[#f35400]/60 to-transparent"
    }`}        style={{
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
        
       
       <div><span style={{color:textColor}} className="  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase ">
         <AnimatedContent
                                    as="span"
                                    distance={20}
                                    direction="vertical"
                                    reverse
                                    duration={1.5}
                                    ease="power3.out"
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.2}
                                    delay={0.1} // Staggered delay for smooth rendering
                                  > Stop Waiting, Start Matching </AnimatedContent> 
        </span></div>

       <div> <h2 className="text-2xl md:text-[45px] lg:text-[56px]  tracking-wide leading-[1.1]  font-mulish">
          <FadeContent as="span" blur={true} duration={1.5} delay={0.3} easing="ease-in" initialOpacity={0}>Find your next role on <br/>  Pangea Today</FadeContent> 
        </h2></div>

        
      <div>  <p className="text-white text-sm md:text-2xl font-mulish">
           <FadeContent as="span" blur={true} duration={1.5} delay={0.3} easing="ease-in" initialOpacity={0}>Create your free account now to get started</FadeContent>
        </p></div>

      <div> <FadeContent blur={true} duration={1.5} delay={0.3} easing="ease-in" initialOpacity={0}>  <Link href="/auth/createaccount" style={{backgroundColor:textColor}} className="group flex items-center justify-center gap-2 py-2 px-6 md:py-4  md:px-12  text-black text-base md:text-xl lg:text-2xl font-bold font-mulish  rounded-full transition-all duration-300  hover:scale-105 active:scale-95 shadow-lg ">
          Get Started
          <HiOutlineArrowRight className="text-base md:text-lg stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
        </Link></FadeContent></div>

      </div>
    </section>
  );
}