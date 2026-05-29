"use client";
import {useState} from "react";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import Image from "next/image";
import Card from '../forTalent/Card.jsx';



export default function Work({ title, heading, subheading,textColor, role,freelance,freelance2,data,bgColor }) {
   const [activeTab, setActiveTab] = useState(0);
  return (
  <>  <section style={{backgroundColor:`${role ==="work" ? bgColor : ""}`}} className={`  w-full   pb-10 lg:pb-20 1xl:pb-30 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-35  overflow-hidden `}>
      <div className="flex flex-col gap-0 md:gap-5  lg:gap-0 items-center justify-center text-white">
        {/* Top Badge */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.1}
        >
          <div className="mt-10 md:mt-25 mb-10 md:mb-0">
            <span style={{color:textColor}} className="    font-jb-mono  text-xs  md:text-sm lg:text-base uppercase">
              {title}
            </span>
          </div>
        </AnimatedContent>

        {/* Main Heading */}
        <FadeContent
          blur={true}
          duration={1.5}
          delay={0.3}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className=" text-center  ">
            <h1 className="text-2xl md:text-[45px] lg:text-[56px]  tracking-wide leading-[1.1] mb-5 font-mulish ">
              {" "}
              {heading}{" "}
            </h1>
          </div>
        </FadeContent>
        {/* Subtext */}
        <div className=" text-center max-w-3xl ">
          <FadeContent
            blur={true}
            duration={1.5}
            easing="ease-in"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="text-white text-sm md:text-2xl font-mulish">
              {subheading}
            </p>
          </FadeContent>
        </div>
      </div>
    { role !=="work"? (<div className=" py-10  grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8 justify-center items-stretch">
        {" "}
        {role !== "freelance"
          ? data?.map((curE, i) => {
              return (
                <FadeContent
                  blur={true}
                  duration={1000}
                  delay={curE.delay}
                  easing="ease-out"
                  initialOpacity={0}
                  key={i}
                  className="h-full flex"
                >
                  <div className="w-full flex-1 flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5 rounded-xl bg-[#141414] p-2 md:p-4 lg:p-6 shadow-2xl border border-white/5">
                    <h2 style={{color:textColor}} className="font-mulish text-xl md:text-6xl lg:text-7xl font-bold  ">
                      {curE.name}
                    </h2>

                    <p className="text-sm md:text-lg lg:text-2xl font-mulish  leading-tight">
                      {curE.title}
                    </p>
                    <p className="text-[8px] md:text-[10px] lg:text-xs font-mulish">
                      {curE.subTitle}
                    </p>
                  </div>
                </FadeContent>
              );
            })
          : freelance?.map((curE, i) => {
              return (
                 <FadeContent
                              blur={true}
                              duration={1000}
                              delay={0.3}
                              easing="ease-out"
                              initialOpacity={0}
                              key={i}
                            >
                <div
                 
                  className="rounded-xl bg-[#141414] shadow-2xl border border-white/5 h-full flex flex-col overflow-hidden"
                >
                  
                  {curE.title !== "Always remote" ? (
                    <div className="w-full p-2 md:p-4 lg:p-6  flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5 h-full">
                      <div className="flex justify-start gap-2 md:gap-3 lg:gap-5">
                        <div style={{color:textColor}} className="  tex-base md:text-xl lg:text-2xl">
                          {curE.icon}
                        </div>
                        <div style={{color:textColor}} className="   font-jb-mono  text-[10px]  md:text-xs lg:text-base uppercase">
                          {curE.title}
                        </div>
                      </div>

                      <div className="text-white text-base md:text-[20px] lg:text-3xl font-semibold font-mulish">
                        {curE.heading}
                      </div>

                      <div className=" text-xs md:text-[13px] lg:text-lg ">
                        {curE.subheading}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full absolute inset-0 flex flex-col ">
                      <Image
                        alt={curE.title}
              width={500}
              height={500}
              loading="lazy"
                        src="/assets/remoteImg.avif"
                        className="w-full h-full object-cover  rounded-xl"
                      />
                      <div className="absolute top-[70%]   p-2 md:p-5  left-0 w-full h-full  ">
                        <div className="flex justify-start gap-2 md:gap-3  lg:gap-5 p-1.5 md:p-3 rounded-lg bg-[#141414]  shadow-2xl border border-white/5">
                          <div style={{color:textColor}} className="  text-base md:text-xl lg:text-2xl">
                            {curE.icon}
                          </div>
                          <div style={{color:textColor}} className="   font-jb-mono  text-[10px]  md:text-xs lg:text-base uppercase">
                            {curE.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div></FadeContent>

              );
            })}
      </div>):(  <div className="w-full flex flex-col items-center">
            
            {/* 1. BUTTONS GRID */}
<div className="py-10 flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-7 lg:gap-10 justify-start md:justify-center overflow-x-auto md:overflow-hidden hide-scrollbar  w-full snap-x snap-mandatory">      
          {freelance2?.map((curE, i) => {
                const isActive = activeTab === i;
      
                return (
<div key={i} className="flex flex-col relative pb-1 shrink-0 w-[70%] sm:w-[45%] md:w-full snap-center">                    {/* बटन पर क्लिक करने से स्टेट बदलेगी */}
                    <button 
                      onClick={() => setActiveTab(i)}
                      className="w-full cursor-pointer pb-2 md:pb-4 lg:pb-7 flex flex-col justify-start items-start gap-2 md:gap-2 lg:gap-5 text-left transition-all duration-300"
                    >
                      <div className="flex justify-start gap-2 md:gap-5 items-center">

                        <div style={{color:textColor}} className={`  text-base md:text-xl lg:text-3xl transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          {curE.icon}
                        </div>
                        <div style={{color:textColor}} className={`  font-jb-mono text-[10px] md:text-sm lg:text-xl uppercase transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          {curE.title}
                        </div>
                      </div>
      
                      <div className={`text-white text-base md:text-[22px] lg:text-4xl font-semibold font-mulish transition-opacity ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                        {curE.heading}
                      </div>
                    </button>
      
                    <div 
                    style={{ backgroundColor: textColor }}
                      className={`absolute bottom-0 left-0 w-full h-1  transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-30"
                      }`} 
                    />
                  </div>
                );
              })}
            </div>
      
           
            <div className="w-full    transition-all duration-500 ease-in-out ">
              <div className="w-full relative overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                <Image
                       
                       width={500}
                       height={500}
                      
                       loading="lazy"
                  src={freelance2[activeTab].img} 
                  alt={freelance2[activeTab].heading} 
                  className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px] 2xl:max-h-[600px] " 
                />
                  <div
              className="absolute bottom-0 left-0 right-0 h-[20px] flex flex-col justify-end p-3 md:p-6"
              style={{
                background: `linear-gradient(to top,${bgColor}  0%, transparent 100%)`,
              }}
            ></div>
              </div>
            </div>
      
          </div>) }

      {/* star setion */}
     {  role !=="freelance"? (
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
      >
      <div className={`w-full ${role === "work" ? "hidden":"grid"}  justify-center items-center gap-5  md:mt-10`}>
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => {
              return star === 5 ? (
                <FaRegStarHalfStroke style={{color:textColor}}
                  key={star}
                  className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12  "
                />
              ) : (
                <FaStar style={{color:textColor}}
                  key={star}
                  className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12  "
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center ">
            <p className="text-white text-[8px] md:text-xs lg:text-sm font-mulish font-semibold">
              Rated 4.6/5 on G2
            </p>
          </div>
       
        </div>
      </ScrollReveal>
        )
        
    :(<Card className={`${role === "work" ? "hidden" : "block"}`} title="Worldwide network" heading={<>Currently active in 165+ <br/> Countries
     </>}  textColor={textColor}
      bgColor={bgColor}
          role="remote"
            subheading="Pangea supports payouts in your currency via our payment processing partner Stripe. Check the list below to see if your country is currently enabled for payouts on Pangea.
    "/>)
        }
    </section>

    </>
  );
}
