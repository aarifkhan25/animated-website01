import React from 'react'
import FadeContent from '@/components/FadeContent.jsx';
import { GoArrowRight } from "react-icons/go";
import Link from "next/link"
export default function Main() {
  return (
   <section className="grid w-full gap-15 justify-center md:justify-start text-white py-10 md:py-5 pt-30 md:pt-30 lg:pt-25 1xl:pt-50 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 overflow-hidden">
  
    {/* Main Heading */}
    <div>
      <FadeContent
        blur={true}
        duration={1.5}
        delay={3}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="flex flex-col justify-center items-center md:block text-4xl md:text-6xl lg:text-8xl tracking-wide leading-[1.1] font-mulish">
          Get matched to<br/> <span className="">the</span> <br className="block md:hidden"/> <span className="-mt-10 md:-mt-0"><span className="text-[#ff004e]">perfect</span> role</span> 
        </h1>
      </FadeContent>
    </div>

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

    {/* Button Wrapper */}
    <div className="flex justify-center md:justify-start">
      <FadeContent
        blur={true}
        duration={1.5}
        delay={2}
        easing="ease-out"
        initialOpacity={0}
      >
        <Link href="/auth/createaccount" className="flex justify-center items-center group gap-2 cursor-pointer bg-[#ff004e] hover:bg-[#ff185e] transition-colors text-black py-2.5 md:py-4 px-8 md:px-12 rounded-full font-mulish font-bold text-base md:text-xl lg:text-2xl w-max  shadow-lg shadow-[#ff004e]/20 hover:shadow-[#ff004e]/40">
          <div className="flex justify-center items-center gap-1">
            Get Started
            <GoArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link >
      </FadeContent>
    </div>

   </section>
  )
}