import React from 'react';
import FadeContent from '@/components/FadeContent.jsx';

export default function Main({ textColor }) {
  return (
    <section className="w-full text-white py-10 md:py-20 pt-20 md:pt-15 lg:pt-25 px-6 md:pl-10 lg:pl-20 1xl:pl-25 2xl:pl-35 overflow-hidden">
   
      <div className=" grid justify-center items-center md:flex    ">
        
      
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 justify-center items-center  md:justify-start md:items-start">
          {/* Main Heading */}
          <div>
            <FadeContent
              blur={true}
              duration={1.5}
              delay={0.5}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1 className="text-3xl md:text-5xl text-center md:text-start lg:text-6xl xl:text-8xl tracking-wide leading-[1.1] font-mulish">
                Hire fractional experts for <span style={{ color: textColor }}>early - stage startups</span>
              </h1>
            </FadeContent>
          </div>

          {/* Subheading */}
          <div>
            <FadeContent
              blur={true}
              duration={1.5}
              easing="ease-in"
              initialOpacity={0}
              delay={0.7}
            >
              <p className="text-white text-center md:text-start text-sm md:text-lg font-medium lg:text-2xl font-mulish">
                Top designers, marketers, developers, and more <br/> with experience at early-stage startup companies,<br/> ready to work in 48 hours. Are you ready to discover<br/> Pangea?
              </p>
            </FadeContent>
          </div>
        </div>

      
        <div className="flex  justify-center items-center ">
           <FadeContent
              blur={true}
              duration={1.5}
              easing="ease-in"
              initialOpacity={0}
              delay={0.5}
            >
          <div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[500px] xl:h-full aspect-square transition-all duration-300  md:-mr-30 overflow-hidden "
            style={{
              maskImage: `url('/assets/hire/stages/E1.png')`,
              WebkitMaskImage: `url('/assets/hire/stages/E1.png')`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            
              backgroundColor: textColor
            }}
          /></FadeContent>
        </div>

      </div>
    </section>
  );
}