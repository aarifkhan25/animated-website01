import React from 'react';
import LogoLoop from "@/components/LogoLoop.jsx"
// Importing the ArrowRight icon from the Feather set within react-icons
import { FiArrowRight } from 'react-icons/fi';

export default function Main({textColor}) {
  const imageLogos=[  { alt: "SOMETHINGS", src: "/assets/comp/logo5.avif" },
  { alt: "Context", src: "/assets/comp/logo8.avif" }, 
  { alt: "Dorothy™", src: "/assets/comp/logo6.svg" },
  { alt: "SecurityScorecard", src: "/assets/comp/logo4.svg" },]
  return (
    <section className="w-full text-white py-10 md:py-20 pt-20 lg:pt-25 px-6 md:px-0 overflow-hidden">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Content Column */}
        <div className="space-y-8 lg:col-span-7 flex flex-col justify-center">
          {/* Top Label */}
         <div className='md:pl-10 lg:pl-20 1xl:pl-25 2xl:px-50 3xl:px-80 grid gap-5 md:gap-10'> <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block">
           Fractional Designers
          </span>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-[56px]  font-mulish text-white ">
            Hire Top Fractional Designers with Pangea
          </h1>

          {/* Subtext description */}
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-mulish">
            Discover curated, fractional Design talent from the US and 155+ other countries who can help you grow faster
          </p>

          {/* Call to Action Button */}
          <div className="pt-2">
            <button style={{backgroundColor:textColor}} className="group flex items-center gap-2 transition-colors text-black py-2 px-3 md:py-2 md:px-4 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-base md:text-lg lg:text-xl cursor-pointer">
                       <div className="flex justify-center items-center gap-1">
                         Start Hiring      
                         <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                       </div>
                     </button>
          </div>

          {/* Trusted Partners Section */}
          <div className="pt-10">
            <span style={{color:textColor}} className=" text-[10px] md:text-xs lg:text-sm font-jb-mono uppercase block ">
              Trusted Partners
            </span>
            </div>
            </div>
            {/* Flexbox container matching the exact layout of horizontal logos */}
            <div 
    style={{ height: '100px', position: 'relative', overflow: 'hidden'}}
    className="[&_img]:[filter:brightness(0)_saturate(100%)_invert(13%)_sepia(95%)_saturate(7080%)_hue-rotate(318deg)_brightness(102%)_contrast(109%)] -mt-5"
  >
  
    <LogoLoop
      logos={imageLogos}
      speed={100}
      direction="left"
      logoHeight={60}
      gap={60}
      hoverSpeed={0}
      scaleOnHover
      ariaLabel="Technology partners"
    />
  </div>
         
        </div>

        {/* Right Card Column */}
        <div className="lg:col-span-5 w-full h-full  hidden lg:block flex">
          <div className="relative w-full  rounded-xl overflow-hidden shadow-2xl group">
            
            {/* Main Portrait Image */}
            <img 
              src="/assets/hire/stages/F2.avif" 
              alt="Featured Fractional Designer Profile" 
              className="w-full h-full object-cover grayscale-[10%] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Subtle background overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Profile Info Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/95 backdrop-blur-md border border-white/5 p-3 md:p-5 rounded-lg shadow-xl">
              <span style={{color:textColor}} className="font-jb-mono text-[10px] md:text-xs lg:text-sm uppercase block mb-1">
                Designer
              </span>
              <h3 className="text-white text-base font-mulish md:text-lg lg:text-2xl font-medium ">
                First L.
              </h3>
              <p style={{color:textColor}} className="font-jb-mono  text-[10px] md:text-xs lg:text-base uppercase">
                Formerly @ {`{Company}`}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}