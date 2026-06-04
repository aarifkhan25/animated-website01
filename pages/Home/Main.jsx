"use client"
import { GoArrowRight } from "react-icons/go";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent.jsx";
import Link from "next/link";
export default function Main() {
  return (
    <section className="flex flex-col sm:gap-10 lg:gap-0 items-center justify-center w-full text-white py-10 px-4 md:px-6 md:py-5 overflow-hidden">
      
      {/* Top Badge */}
      <div className="mt-15 md:mt-25 mb-5 md:mb-0">
      <AnimatedContent
                            distance={20}
                            direction="vertical"
                            reverse
                            duration={1.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.5} // Staggered delay for smooth rendering
                          >
                            <FadeContent blur={true} duration={1.5} delay={0.5} easing="ease-in" initialOpacity={0}>
<span className="px-4 py-1.5 rounded-full bg-sky-500/10 text-[#009ded] font-jb-mono text-[10px] md:text-sm lg:text-base uppercase inline-block">
            Build faster with fractional hiring
          </span>
                            </FadeContent>
          

</AnimatedContent>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-5xl">
       
          <h1 className="text-[47px] md:text-7xl lg:text-9xl/32 tracking-wide leading-[1.1] mb-9 mt-5 md:mt-0 font-mulish">
          <AnimatedContent
                            distance={20}
                            direction="vertical"
                            reverse
                            duration={1.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.3 } // Staggered delay for smooth rendering
                          >
                            <FadeContent blur={true} duration={1.5} delay={0.3} easing="ease-in" initialOpacity={0}>
                               Hire High <br/> quality humans
                              </FadeContent> </AnimatedContent>
          </h1>
   
      </div>

      {/* Subtext */}
      <div className="text-center max-w-3xl">
   
            <AnimatedContent
                            distance={20}
                            direction="vertical"
                           
                            duration={1.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.5 } // Staggered delay for smooth rendering
                          >
                            <FadeContent blur={true} duration={1.5} delay={0.3} easing="ease-in" initialOpacity={0}>
          <p className="text-white text-base md:text-2xl font-mulish">


            The best marketing, design, ops, and engineering operators in the
            world, ready to hire in 24 hours. AI-supported, human selected,
            and flexible to work with.

          </p>
                            </FadeContent></AnimatedContent>
       
      </div>

      {/* CTA Button */}
      <div className="mt-7">
      <AnimatedContent
                            distance={20}
                            direction="horizontal"
                          
                            duration={1.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={0.2 } 
                          >
                            <FadeContent blur={true} duration={1.5} delay={0.2} easing="ease-in" initialOpacity={0}>
          <Link href="/starthiring" className="group flex items-center gap-2 bg-[#009de4] hover:bg-[#0082cc] transition-colors text-black py-2 px-3 md:py-2 md:px-4 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-base md:text-xl cursor-pointer">
            <div className="flex justify-center items-center gap-1">
              Start Hiring      
              <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link >

          
        </FadeContent></AnimatedContent>
      </div>

    </section>
  );
}