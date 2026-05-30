import React from 'react'
import {pressData} from "@/data/about/press.js";
import FadeContent from '@/components/FadeContent.jsx';
import AnimatedContent from '@/components/AnimatedContent';
export default function page() {
  const innerGlowStyle = {
    boxShadow: "inset 0px 0px 40px rgba(0, 157, 228, 0.45), inset 0px 0px 15px rgba(0, 157, 228, 0.3)",
  };
  return (
 <section className="w-full mt-15 lg:mt-0  flex flex-col gap-3 md:gap-6 lg:gap-10 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30">
  <div className="w-full ">
                <FadeContent
              blur={true}
              duration={1000}
              delay={0.3}
              easing="ease-out"
              initialOpacity={0}
             
            >  
        <div
          style={innerGlowStyle}
          className="w-full h-36 md:h-44 lg:h-67 flex items-center justify-center 
                     bg-[#002534] border border-[#004f75] rounded-[4px] 
                     px-6 transition-all duration-300 hover:border-[#007cb8]/60"
          role="banner"
          aria-label="Pangea in the News Heading"
        >
        
          <h1 className="text-white font-mulish text-2xl sm:text-4xl md:text-5xl lg:text-7xl 
                         font-medium tracking-wide  text-center select-none antialiased">
            Pangea in the News
          </h1>
        </div></FadeContent>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-6 lg:gap-10">
    {pressData?.map((item,i)=>{
        return(<AnimatedContent
                      distance={20}
                      direction="vertical"
                      reverse
                      duration={0.8}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.2}
                      delay={0.1}
                      
                    > <div key={i} className="w-full bg-[#002534]  rounded-[4px] p-5 md:p-7 lg:p-10 flex flex-col justify-between gap-3 md:gap-6 hover:bg-[#063a4e] transition-colors duration-300">
        
  
        <div className="flex items-center justify-between w-full">
          <span className="text-[#99e5fd] font-mulish text-xs md:text-lg lg:text-2xl font-semibold tracking-wide">
          {item.source}
          </span>
          <span className="text-[#00c2ee]/70 font-mulish text-[10px] md:text-sm lg:text-base">
           {item.date}
          </span>
        </div>

 
        <div className="w-full">
          <h2 className="text-[#ccf4ff] font-mulish text-base md:text-3xl lg:text-[40px] font-medium font-mulish leading-snug max-w-5xl">
           {item.title}
          </h2>
        </div>

      </div></AnimatedContent>)
    })
      }
    </div>
    </section>

    
  )
}
