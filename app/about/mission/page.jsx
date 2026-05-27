import React from 'react'
import Main from "./Main.jsx";
import { missionData } from "@/data/about/mission.js";
import Image from 'next/image';
import FadeContent from '@/components/FadeContent.jsx';
export default function page() {
    const {values,team}=missionData;
    const innerGlowStyle = {
    boxShadow: "rgb(90, 0, 108) 0px 0px 72px 0px inset, rgb(193, 0, 228) 0px 0px 48px 0px inset",
  };
  return (
    <section className="w-full mt-10 md:mt-15 lg:mt-10     py-10 lg:py-15  1xl:py-20">
  <div className="w-full px-3 md:px-5 lg:px-10 1xl:px-20 2xl:px-25 pb-5 1xl:pb-10">
    <FadeContent
        blur={true}
        duration={1.5}
        delay={0.3}
        easing="ease-out"
        initialOpacity={0}
      ><div
    style={innerGlowStyle}
  
    className="w-full h-full flex flex-col justify-center items-center gap-5 lg:gap-10 
               bg-[#390046] border border-[#390046] rounded-[4px] 
               py-10 md:py-15 lg:py-20 transition-all duration-300 hover:border-[#390046]/60"
    role="banner"
    aria-label="Pangea in the News Heading"
  >
    <div> 
      <h1 className="text-[#ffd6ff] font-mulish text-2xl sm:text-4xl md:text-5xl lg:text-7xl 
                     font-medium tracking-wide text-center select-none antialiased">
        Empowering fractional work across the globe
      </h1>
    </div>
    
    <div className="flex justify-center px-4">
      <p className="text-[#fdb6ff] font-mulish text-base md:text-xl lg:text-2xl text-center ">
        We've built a network of the world's top Marketing & Design talent because we think <br className="hidden lg:block"/> everyone should have access to the best of the best
      </p>
    </div>
  </div></FadeContent>
</div>
<div className="w-full px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-35">

<Main heading="Our Mission" subheading={<>   We believe that great teams build great products. That’s why we built this platform - for you, the top <br/> talent and teams of the future. Our mission is simple: to empower you to work on your own terms. Our <br/> platform makes it easy for teams to find top talent, and for talent to find their next opportunity. We <br/> know that the way we build relationships is evolving, and our platform is designed to help you keep up <br/> with the trend toward flexible and meaningful work. Join us on this journey, and let’s build <br/> great products together!
</>}
className="text-xs md:text-sm lg:text-base"
/>
{/* value section */}
<Main  heading="Our Values" subheading="Powered by Purpose"
className="text-base md:text-xl lg:text-2xl"
/>
  <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 py-5 justify-center ">
             
                 {
                    values.map((item,i)=>{
                        return(
                            <FadeContent
                                        blur={true}
                                        duration={1000}
                                        delay={0.3}
                                        easing="ease-out"
                                        initialOpacity={0}
                                  
                                      >

                    <div key={i} className="w-full flex-1 flex flex-col justify-start rounded-[6px] bg-[#141414] p-4 md:p-7 lg:p-10 shadow-2xl border border-white/5">
                      <div className=" flex flex-col   justify-start gap-3 md:gap-5 lg:gap-10">
                    
                          <h2 className="font-mulish font-semibold text-lg md:text-2xl lg:text-3xl text-white">
                            {item.heading}
                          </h2>
                       
                      <p className="text-[10px] md:text-sm lg:text-base font-mulish text-white ">
                        {item.subheading}
                      </p>
                    </div>
              
              
              
            </div>
                                      </FadeContent>
            )
                    })
                 }
</div>
{/* our team section */}
<Main heading="Our Team" subheading="Built by Pangeans, for Pangeans"
className="text-base md:text-xl lg:text-2xl"
/>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 py-5">
          {team.map((member, index) => (
         <FadeContent
              blur={true}
              duration={1000}
              delay={0.3}
              easing="ease-out"
              initialOpacity={0}
             
            >    <div 
              key={index} 
              className="flex flex-col rounded-[6px] overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              
              <div className={`w-full aspect-square  flex items-center justify-center  relative`}>
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  width={500} 
                  height={500} 
                  className="object-contain w-full h-full rounded-[6px]"
                  priority
                /> 
               
              </div>

              <div style={{backgroundColor:member.bgColor}} className={`w-full  p-3 md:p-4 lg:p-5 flex flex-col gap-2 md:gap-3 lg:gap-5 justify-center`}>
                <h3 style={{color:member.nameColor}} className={`font-mulish text-xl  lg:text-3xl font-semibold tracking-wide`}>
                  {member.name}
                </h3>
                <p style={{color:member.roleColor}} className={`font-mulish text-xs  lg:text-base font-medium opacity-90`}>
                  {member.role}
                </p>
              </div>

            </div></FadeContent> 
          ))}
        </div>


</div>
       
        </section>)}