import React from 'react'
import FadeContent from '@/components/FadeContent.jsx';
export default function Main({ heading, subheading, className }) {
  return (
    <div className="w-full grid  justify-center items-center gap-4 lg:gap-7  pt-10 md:pt-12 lg:pt-15 ">
            
           
               
           
   
               {/* Heading */}
            
      <div>
                  <FadeContent
        blur={true}
        duration={1.5}
        delay={0.3}
        easing="ease-out"
        initialOpacity={0}
      > 
                   <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-semibold font-mulish leading-[1] tracking-wide">
             {heading}
   
                 </h2></FadeContent>
                 </div>
                 {/* Subtext */}
               
                   <div>
         <FadeContent
        blur={true}
        duration={1.5}
        delay={0.3}
        easing="ease-out"
        initialOpacity={0}
      > 
                <p className={`text-white ${className} text-center font-mulish font-semibold leading-relaxed`}>
                   {subheading}
                 </p>
                  </FadeContent>
                   </div>
                
           
             </div>
  )
}
