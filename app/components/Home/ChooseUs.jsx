"use client"
import { useState, useRef, useEffect } from "react"
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent  from "@/components/FadeContent.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

import { FaRegCalendarAlt } from "react-icons/fa";
import { TbContract } from "react-icons/tb";
import { FaBlenderPhone } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image";
const sections = [
    { id: 'quick-view', title: 'Quick view', content: "Jeremy applied for the role of Graphic Designer with a proposed compensation of $75/hr." },
    { id: 'questions', title: 'Questions to Ask', content: "Standard interview questions and specific technical queries." },
    { id: 'talent-profile', title: 'Talent Profile', content: "Detailed resume, portfolio links, and skill assessments." },
    { id: 'job-description', title: 'Job Description', content: "Full breakdown of roles and responsibilities for this position." }
  ];


  const fractionalHringData=[{icon:<FaRegCalendarAlt  className="w-4 h-4 md:w-6 md:h-6" />,title:'Automatic Scheduling',des:"Book time directly on linked calenders. Reschedule at will.",delay:0.5},
    {icon:<TbContract className="w-4 h-4 md:w-6 md:h-6" />,title:'Flexible Contracts',des:"Choose from hourly and monthly options.  down at any time.",delay:1},
    {icon:<FaBlenderPhone className="w-4 h-4 md:w-6 md:h-6" />,title:'Painless Invoicing',des:"Schedule your contractors invoices, pay via ACH or CC with Stri",delay:1.5}]
export default function ChooseUs({textColor,bgColor,title,heading,subheading}) {

  const [openSection, setOpenSection] = useState('quick-view');
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile(); // Initial check
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    
  
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center", "end start"],
    });
    
    // 2. Base transforms variables
    const baseRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [22, 0, -22]);
    const baseRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 12]);
    const baseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.5, 1, 0.5, 0]);

    const rotateX = isMobile ? 0 : baseRotateX;
    const rotateY = isMobile ? 0 : baseRotateY;
    const scale = isMobile ? 1 : baseScale;
  return (
  <section className="w-full md:grid gap-5 md:gap-10 text-white   py-10 lg:py-20 1xl:py-30 px-10 md:px-20  lg:px-32">
        <div className="w-full mx-auto grid  justify-center items-center  ">
         
            {/* Orange Badge */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse
              duration={0.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.2}
            >
              <div className="text-center">
                <span className="px-4 py-1.5 rounded-full    text-[10px] md:text-xs font-semibold font-jb-mono  uppercase"
                style={{color:textColor,backgroundColor:bgColor}}
                >
{title}
                </span>
              </div>
            </AnimatedContent>

            {/* Heading */}
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1}   baseRotation={0}>
              {" "}
              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-center font-semibold font-mulish leading-[1] tracking-wide mb-12">
             {heading}

              </h2>
              </div>
              {/* Subtext */}
            
                <div>

              <p className=" text-white text-xs md:text-sm lg:text-base text-center font-mulish font-semibold leading-relaxed">
   {subheading}

              </p>
                </div>
               
             
            </ScrollReveal>
          </div>
        <div ref={containerRef} style={isMobile ? {} : { perspective: "1000px" }} >
   {textColor !=="#ff4d00"?   <motion.div 
                        style={{
                            rotateX,
                            rotateY,
                            scale,
                            opacity,
                            transformStyle: isMobile ? "flat" : "preserve-3d",
                        }} 
                        className="flex flex-col md:flex-row bg-[#1A1141] w-full md:h-[350px] lg:h-[470px] rounded-xl overflow-hidden shadow-2xl"
                    >
        {/* Left Side (Text Content) */}
        <div className="w-full md:w-1/2 p-5 md:p-8 lg:p-12  flex flex-col justify-center order-2 md:order-1">
          <p className="text-xs md:text-sm lg:text-base font-semibold  uppercase font-jb-mono tracking-wider mb-6"
          style={{color:textColor}}
          >
            Customer Story
          </p>
          <h2 className="text-3xl  lg:text-5xl font-medium text-white leading-snug font-mulish  mb-10">
            Pangea helped LuxCitizenship launch a new product
          </h2>
          <button className="flex w-fit items-center gap-2 rounded-full bg-[#8B7FF1] px-5 py-3 text-sm md:text-base lg:text-lg font-bold text-black transition-all hover:bg-[#A59DF5] ">
            See How
           <FaArrowRightLong/>
           
          </button>
        </div>

        {/* Right Side (Image Content) */}
        <div className="w-full md:w-1/2 p-5 md:p-9 lg:p-12  bg-[#D6D0F8] rounded-xl flex items-center justify-center order-1 md:order-2">

            <Image
              src="/assets/story.png"
              alt="Man walking past large billboard advertisement"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          
        </div>
      </motion.div> : 
 <div  className="grid gap-6 md:gap-10 overflow-hidden"> 

  <motion.div style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          transformStyle: "preserve-3d", // Child elements ko 3D space mein rakhne ke liye
        }} className="w-full h-auto flex flex-col lg:flex-row items-stretch gap-5 lg:gap-10 rounded-xl bg-[#141414] overflow-hidden">
    
    {/* Left Side: Mockup Card - Mobile par order change aur height fix */}
    <div className="w-full lg:w-1/2 relative bg-[#1a1a1a] rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden shadow-2xl order-2 lg:order-1">
      {/* Aspect ratio mobile par hata kar min-height di taaki content dikhe */}
      <div className="flex h-full min-h-[300px] md:min-h-[400px]">
        {/* Image Part */}
        <div className="w-1/4 h-full flex-shrink-0">
          <img 
            src='/assets/story2.avif'
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Interface Part */}
        <div className="w-full h-full bg-white p-4 md:p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-4 md:mb-8">
            <h3 className="text-sm md:text-xl font-bold text-black">Interview Co-Pilot</h3>
            <div className="p-1 border border-black/10 rounded-md">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4">
            {sections.map((sec) => (
              <div key={sec.id} className="border-b border-black/5 pb-2">
                <button 
                  onClick={() => setOpenSection(sec.id)}
                  className="w-full cursor-pointer flex justify-between items-center py-1 md:py-2 text-left text-[9px] md:text-sm font-bold text-black"
                >
                  {sec.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${openSection === sec.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <AnimatePresence>
                  {openSection === sec.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[8px] md:text-[10px] text-gray-500 mb-2 leading-relaxed">
                        {sec.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Right Side: Text Content */}
    <div className="w-full lg:w-1/2 p-5 md:p-8 flex flex-col justify-center order-1 lg:order-2">
      <div className="mb-4">
        <span className="bg-[#2a1205] text-[#ff4d00] text-[8px] lg:text-xs font-jb-mono font-bold uppercase tracking-[0.2em] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#ff4d00]/20 inline-block">
          Every Step of Hiring
        </span>
      </div>
      
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-mulish font-bold text-white mb-4 lg:mb-8 leading-tight">
        Hire with Clarity
      </h1>
      
      <p className="text-[11px] md:text-sm lg:text-base text-gray-300 font-mulish font-medium leading-relaxed max-w-lg">
        We've tuned our web-based platform to support you at every step of the way, from scheduling interviews, to sitting shotgun for your calls, to making the next steps feel obvious.
      </p>
    </div>
  </motion.div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 items-stretch">
    {fractionalHringData?.map((curE, i) => (
      <FadeContent
        key={i}
        blur={true}
        className={`${i === 2 ? "col-span-2 md:col-span-1" : "col-span-1"} h-full`}
      >
        <div className="w-full h-full flex gap-2 md:gap-3 rounded-xl bg-[#141414] p-2 md:p-4 lg:p-5 shadow-2xl border border-white/5">
          <div className="flex-shrink-0 text-sm md:text-base">{curE.icon}</div>
          <div className="flex flex-col gap-1">
            <h2 className="font-mulish text-[10px] md:text-sm lg:text-base font-bold text-white leading-tight">
              {curE.title}
            </h2>
            <p className="font-mulish text-[9px] md:text-xs lg:text-sm font-normal text-gray-400 leading-snug">
              {curE.des}
            </p>
          </div>
        </div>
      </FadeContent>
    ))}
  </div>
</div>
            

            
            
            
            
            }

</div>
          
          
      
      </section>
  )
}
