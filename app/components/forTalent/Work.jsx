'use client'
import React from 'react'
import AnimatedContent from '@/components/AnimatedContent.jsx';
import FadeContent from '@/components/FadeContent';
import ScrollReveal from '@/components/ScrollReveal.jsx';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const data = [
  { name: <div className='flex justify-center items-center'><div>3</div><div></div>x</div>, title: "Longer projects", subTitle: "than average Upwork project",delay:0.5 },
  { name: <div className='flex justify-center items-center'><div>2</div><div></div>x</div>, title: "Higher hourly rates", subTitle:"than US freelance average",delay:1 },
  { name:"$4M", title: "Earned on platform", subTitle:"by freelancers on Pangea",delay:1.5 },
];
export default function Work({ title, heading, subheading }) {
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
                  delay={0.5}
                >
                  <div className="mt-10 md:mt-25 mb-10 md:mb-0">
    
                    <span className=" text-[#ff004e]  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase">
                    {title}
                    </span>
                  </div>
                </AnimatedContent>
        
                {/* Main Heading */}
                  <FadeContent
                    blur={true}
                    duration={1.5}
                    delay={0.5}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                <div className=" text-center  ">
                
                  <h1 className="text-2xl md:text-5xl lg:text-6xl  tracking-wide leading-[1.1] mb-9 font-mulish "> {heading} </h1>
                </div>
        </FadeContent>
                {/* Subtext */}
                <div className=" text-center max-w-3xl ">
                  <FadeContent
                    blur={true}
                    duration={1.5}
                    easing="ease-in"
                    initialOpacity={0}
                    delay={1}
                  >
                    <p className="text-white text-sm md:text-2xl font-mulish">
                      {subheading}
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
                            <ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={0}
  blurStrength={4}
>
                           <div className="w-full  grid justify-center items-center gap-5  md:mt-10">
                           <div className="flex justify-center items-center gap-3">
                             {
                              [1, 2, 3, 4, 5].map((star) => {
                                return star === 5 ? (
                                  <FaRegStarHalfStroke key={star} className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#ff004e]" />
                                ) : (
                                  <FaStar key={star} className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#ff004e]" />
                                );
                              })
                            }
                           </div>
                           <div className="flex justify-center items-center ">
                            <p className="text-white text-[8px] md:text-xs lg:text-sm font-mulish font-semibold">
                             Rated 4.6/5 on G2
                            </p>
                           </div>
                           </div>
</ScrollReveal>
              </section>
  )
}
