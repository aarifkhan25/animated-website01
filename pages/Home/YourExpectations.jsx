import React from 'react'
import ScrollReveal from '@/components/ScrollReveal.jsx';
import { GoArrowRight } from "react-icons/go";
export default function YourExpectations({textColor,bgColor}) {
  return (
    <section className=" flex flex-col py-10 lg:py-20 1xl:py-30 items-center justify-center   text-white   overflow-hidden">
                
                {/* Top Badge */}
                
                  <div className="">
                    <ScrollReveal
                           baseOpacity={0.1}
                           enableBlur
                           blurStrength={1}
                           baseRotation={0}
                         >
                    <span className="px-4 py-1.5 rounded-full   font-jb-mono   text-xs  md:text-base uppercase"
                    style={{color:textColor,backgroundColor:bgColor}}
                    >
                     Expand your expectations

                    </span></ScrollReveal>
                  </div>
                
        
                {/* Main Heading */}
                <div className=" text-center  ">
                
                     <ScrollReveal
                                baseOpacity={0.1}
                                enableBlur
                                blurStrength={1}
                                baseRotation={0}
                              >
                                {" "}
                                <h2 className="text-[45px] md:text-[65px] lg:text-[72px] font-mulish font-semibold leading-[1] tracking-tight mb-12">
                                  Grow your team <br/> in 48 hours
                                </h2>
                                </ScrollReveal>
                </div>
        
                {/* Subtext */}
                <div className=" text-center max-w-3xl ">
                   <ScrollReveal
                           baseOpacity={0.1}
                           enableBlur
                           blurStrength={1}
                           baseRotation={0}
                         >
                    <p className="text-white text-xs md:text-base font-mulish">
                     Book a call with a talent expert, start hiring in 48 hours or less.
                    </p>
                  </ScrollReveal>
                </div>
        
                {/* CTA Button */}
                <div className="">
                 <ScrollReveal
                           baseOpacity={0.1}
                           enableBlur
                           blurStrength={1}
                           baseRotation={0}
                         >
                    {" "}
                    <button className="group flex items-center gap-2  transition-colors text-black p-3 md:py-2  lg:py-3   md:px-4 lg:px-6 rounded-full font-mulish font-bold text-base md:text-xl"
                    style={{backgroundColor:textColor}}>
                      <div className="flex justify-center   items-center gap-1">
                        Start Hiring
                        <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </ScrollReveal>
                </div>
              </section>
  )
}
