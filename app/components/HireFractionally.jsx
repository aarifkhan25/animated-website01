"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent.jsx"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HireFractionally() {
     const targetRef = useRef(null);
          // 1. Vertical Scroll track 
          const { scrollYProgress } = useScroll({
            target: targetRef,
           
          });
const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
          
        
 const talent=[{
        title:"step 1",
        name:'Design',
        des:"The graphic, UI/UX, and content designers you need to differentiate your company"
      },
    {
      
      title:"step 2",
      name:"Oprations",
      des:"Project + Product Managers to keep your team running smoothly"
    },
    
    {
     
      title:"step 3",
      name:"Engineering",
      des:"Front-End, Back-End, and Full-Stack devs that know your tech stack"
    },
    {
    
      title:"step 4",
      name:"Marketing",
      des:"From GTM Strategy, to Growth Management, to Social Media Management"
    },
    
    
]
const data=[{name:"160+",title:"Countries",delay:1},
    {name:"4.6/5",title:"Rating on G2",delay:2},
    {name:"1st",title:"Product Hunt Approved ",delay:3}
]
  return (
    <><section className="w-full  text-white py-0 px-10 md:px-20 lg:px-32">
        <div className="w-full mx-auto flex flex-col justify-between  gap-10">
          {/* Left Content */}
          <div className="flex-1">
            {/* Orange Badge */}
            <AnimatedContent
              distance={20}
              direction="horizontal"
              reverse
              duration={0.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.2}
            >
              <div className="mb-8">
                <span className="px-4 py-1.5 rounded-full   bg-[#40000b] text-[#ff0044] text-[8px] md:text-[12px] font-jb-mono font-bold uppercase">
              The fastest way to hire fractionally
                </span>
              </div>
            </AnimatedContent>

            {/* Heading */}
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1}   baseRotation={0}>
              {" "}
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-mulish leading-[1] tracking-tight mb-12">
              Hiring fractionally is  <br/>easier than you think
              </h2>
              {/* Subtext */}
              <div className="flex justify-between gap-5 items-center">
                <div>

              <p className="max-w-xl text-white text-xs md:text-sm lg:text-base font-mulish font-semibold leading-relaxed">
               Expand your team's capabilities quickly with high-quality operators from Pangea's private talent network, available in 48 or less
              </p>
                </div>
                <div>

          <div className="flex  gap-4 ">
            <button className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:bg-white/10 transition-colors">
              <FiChevronLeft className='md:w-8 md:h-8' />
            </button>
            <button className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <FiChevronRight className='md:w-8 md:h-8' />
            </button>
          </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          
          
        </div>
      </section>
      <section ref={targetRef} className="relative h-[200vh] -mt-10 sm:-mt-70 md:-mt-70 xl:-mt-15 2xl:-mt-50">
    
      <div className="sticky top-0 flex md:h-screen h-[50vh] items-center overflow-hidden scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        
   
        <motion.div style={{ x }} className="flex gap-5 md:gap-7 lg:gap-10 p-5 md:p-7 lg:p-10">
          {talent?.map((item, i) => (
            <div 
              key={i} 
              className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[350px] md:h-[200px] lg:w-[450px] lg:h-[250px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl"
            >

           
              <div className=" grid h-full gap-5 lg:gap-10  justify-between">
                <div className="">
                  <span className=" text-[#ff0044] text-[8px] md:text-xs font-jb-mono font-semibold uppercase tracking-wider ">
                     {item.title}
                  </span>
                </div>

                <h2 className="  text-xl md:text-2xl lg:text-3xl font-mulish font-bold text-white">
                  {item.name}
                </h2>

                <p className="flex text-xs md:text-sm lg:text-base  font-mulish font-medium text-white">
                  {item.des}
                </p>

               
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    <div className="md:px-10 lg:px-32 pb-10 -mt-40  flex gap-1 md:gap-3 lg:gap-5 justify-center items-center">
        {
            data?.map((curE,i)=>{
                return <span key={i}>
                     <FadeContent blur={true} duration={1000} delay={curE.delay} easing="ease-out" initialOpacity={0}>
  

        <div  className="md:w-[200px] lg:w-[320px] grid gap-3 h-auto rounded-xl bg-[#141414] p-3  shadow-2xl">
<h2 className="font-jb-mono text-xl md:text-2xl lg:text-5xl">{curE.name}</h2>
<p className="text-sm md:text-base lg:text-gl font-mulish ">{curE.title}</p>
        </div></FadeContent></span>
            })
        }
    </div>
    </>
  )
}
