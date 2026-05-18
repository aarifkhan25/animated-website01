import React from 'react'
import FadeContent from '@/components/FadeContent.jsx';
import { GoArrowRight } from "react-icons/go";
export default function Main() {
  return (
    <section className=" grid h-screen gap-8 sm:gap-10 lg:gap-0  justify-start w-full  text-white  py-10 md:py-5 md:pt-30 px-6 md:px-10 lg:px-14 overflow-hidden">
            
           
    
            {/* Main Heading */}
              <FadeContent
                blur={true}s
                duration={1.5}
                delay={3}
                easing="ease-out"
                initialOpacity={0}
              >
            <div className="  ">
            
              <h1 className="text-[47px] md:text-6xl lg:text-8xl  tracking-wide leading-[1.1] mb-9 font-mulish ">Get matched to<br/> the <span className="text-[#ff004e]">perfect</span> role</h1>
            </div>
    </FadeContent>
            {/* Subtext */}
            <div className="   ">
              <FadeContent
                blur={true}
                duration={1.5}
                easing="ease-in"
                initialOpacity={0}
                delay={3}
              >
                <p className="text-white text-base md:text-2xl font-mulish">
                Fractional jobs for top talent, open <br/>
for 48 hours only.<span className="font-bold"> Are you ready to <br/>
discover Pangea?</span>
                </p>
              </FadeContent>
            </div>
    
            <div className=" mt-7 max-w-[400px] ">
                      <FadeContent
                        blur={true}
                        duration={1.5}
                        delay={3}
                        easing="ease-out"
                        initialOpacity={0}
                      >
                        {" "}
                        <button className="group flex items-center gap-2 bg-[#ff004e] hover:bg-[#ff185e] transition-colors text-black py-1 md:py-2  pb-2 md:pb-4 px-2 md:px-4  rounded-full font-mulish font-bold text-base md:text-xl">
                          <div className="flex justify-center   items-center gap-1">
                            Get Started
                            <GoArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </FadeContent>
                    </div>
          </section>
  )
}
