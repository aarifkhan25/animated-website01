'use client'
import React from 'react'
import AnimatedContent from '@/components/AnimatedContent.jsx';
import FadeContent from '@/components/FadeContent';
const data = [
  { name: "3x", title: "Longer projects", subTitle: "than average Upwork project",delay:0.5 },
  { name: "2x", title: "Higher hourly rates", subTitle:"than US freelance average",delay:1 },
  { name: "$4M", title: "Earned on platform", subTitle:"by freelancers on Pangea",delay:1.5 },
];
export default function Work() {
  return (
     <section className="  w-full   py-10 px-4 md:px-6 md:py-5 overflow-hidden">
                <div className="flex flex-col gap-0 md:gap-5  lg:gap-0 items-center justify-center text-white">
                {/* Top Badge */}
                <AnimatedContent
                  distance={20}
                  direction="vertical"
               
                  duration={1.5}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={3}
                >
                  <div className="mt-10 md:mt-25 mb-10 md:mb-0">
    
                    <span className=" text-[#ff004e]  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase">
                     The new way to work
                    </span>
                  </div>
                </AnimatedContent>
        
                {/* Main Heading */}
                  <FadeContent
                    blur={true}
                    duration={1.5}
                    delay={3}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                <div className=" text-center  ">
                
                  <h1 className="text-2xl md:text-5xl lg:text-6xl  tracking-wide leading-[1.1] mb-9 font-mulish ">Build longer relationships <br/> with Fractional Hiring</h1>
                </div>
        </FadeContent>
                {/* Subtext */}
                <div className=" text-center max-w-3xl ">
                  <FadeContent
                    blur={true}
                    duration={1.5}
                    easing="ease-in"
                    initialOpacity={0}
                    delay={3}
                  >
                    <p className="text-white text-sm md:text-2xl font-mulish">
                     Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project.
                    </p>
                  </FadeContent>
                </div>
        
               </div>
               <div className=" px-6 md:px-10 py-10 lg:px-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 justify-center items-stretch">
                             {data?.map((curE, i) => {
                               return (
                                 <FadeContent
                                   blur={true}
                                   duration={1000}
                                   delay={curE.delay}
                                   easing="ease-out"
                                   initialOpacity={0}
                                   key={i}
                                   className="h-full flex"
                                 >
                                   <div className="w-full flex-1 flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5 rounded-xl bg-[#141414] p-2 md:p-4 lg:p-6 shadow-2xl border border-white/5">
                                    
                                       
                                         <h2 className="font-mulish text-xl md:text-6xl lg:text-7xl font-bold text-[#ff004e]">
                                           {curE.name}
                                         </h2>
                                       
                                    
                                     <p className="text-sm md:text-lg lg:text-2xl font-mulish  leading-tight">
                                       {curE.title}
                                     </p>
                                     <p className="text-[8px] md:text-[10px] lg:text-xs font-mulish">{curE.subTitle}</p>
                                   </div>
                                 </FadeContent>
                               );
                             })}
                           </div>
              </section>
  )
}
