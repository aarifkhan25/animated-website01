import React from 'react'
import FadeContent from '@/components/FadeContent.jsx';
import { GoArrowRight } from "react-icons/go";
export default function Main() {
  return (
    <section className=" grid w-full  gap-8 sm:gap-10 lg:gap-0  justify-center md:justify-start w-full  text-white  py-10 md:py-5 pt-20 md:pt-30 px-6 md:px-10 lg:px-20 overflow-hidden">
            
           
    
            {/* Main Heading */}
              <FadeContent
                blur={true}s
                duration={1.5}
                delay={3}
                easing="ease-out"
                initialOpacity={0}
              >
            <div className="  ">
            
              <h1 className="text-4xl md:text-6xl lg:text-8xl  tracking-wide leading-[1.1] mb-9 font-mulish ">Get matched to<br/> the <span className="text-[#ff004e]">perfect</span> role</h1>
            </div>
    </FadeContent>
            {/* Subtext */}
            <div className=" grid justify-center md:justify-start gap-5 md:gap-10 lg:gap-15  ">
              <div className="text-center md:text-start">
 <FadeContent
                blur={true}
                duration={1.5}
                easing="ease-in"
                initialOpacity={0}
                delay={3}
              >
                <p className="text-white text-base md:text-xl lg:text-2xl font-mulish">
                Fractional jobs for top talent, open <br/>
for 48 hours only.<span className="font-bold"> Are you ready to <br/>
discover Pangea?</span>
                </p>
              </FadeContent>
              </div>
                 <div className="flex justify-center md:justify-start  ">
                      <FadeContent
                        blur={true}
                        duration={1.5}
                        delay={3}
                        easing="ease-out"
                        initialOpacity={0}
                      >
                        {" "}
                        <button className="md:w-full flex justify-center  group  gap-2 bg-[#ff004e] hover:bg-[#ff185e] transition-colors text-black py-2 md:py-3   px-4 md:px-5  rounded-full font-mulish font-bold text-base md:text-xl lg:text-3xl max-w-[380px]">
                          <div className="flex justify-center   items-center gap-1">
                            Get Started
                            <GoArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      </FadeContent>
                    </div>
            </div>
    
        
          </section>
  )
}
