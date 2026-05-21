
"use client"
import AnimatedContent from '@/components/AnimatedContent.jsx';

export default function StartHiring() {
  return (
      <section className=" px-10 md:px-25 lg:px-35  py-10 md:py-20 lg:py-30 w-full   lg:-mt-20">
       <AnimatedContent
          distance={100}
          direction="vertical"
          
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.2}
        >
      <div className="border border-gray-400 h-[50px] md:h-[100px] flex justify-between items-center px-3 md:px-4 lg:px-5   rounded-lg  bg-[#0d0d0d]">
        <div><h3 className="text-base md:text-[26px] lg:text-4xl font-semibold text-white font-monish">Ready to get started?</h3></div>

        <div> <button
                    
                    className=" flex justify-between gap-1 items-center bg-[#ffffff] hover:bg-white cursor-pointer text-black font-semibold  p-1.5 md:px-4   md:py-2 lg:px-5 lg:py-3  rounded-full text-xs md:text-lg lg:text-xl transition duration-150"
                  >
                    Start Hiring 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-2 md:h-5 w-3 md:w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  </button> </div>
      </div></AnimatedContent>
    </section>
  )
}
