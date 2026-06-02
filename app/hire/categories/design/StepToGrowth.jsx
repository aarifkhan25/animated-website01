import React from 'react'
import Step from  "./Step.jsx"

import Image from "next/image";

export default function StepToGrowth({textColor,borderColor,stepstoGrowth}) {
  
  return (
    <>
    <div className="w-full px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30 ">
<div className="w-full border border-[#3a002b] rounded-lg">
    <Step title="3 easy steps to growth
" heading={<>Pangea makes hiring <br/> fractional talent easy</>} textColor={textColor} borderColor={borderColor} />
     <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   ">
  {/* div 1 */}
  <div style={{borderColor:borderColor}} className="p-2 border md:p-3  lg:p-5 flex flex-col justify-start  gap-2 md:gap-3 lg:gap-5       ">
    <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block">
     Step 1
          </span>
        </div>
{/* div 2 */}
        <div style={{borderColor:borderColor}}   className="p-2 border md:p-3  lg:p-5 flex flex-col justify-start  gap-2 md:gap-3 lg:gap-5       ">
    <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block">
     Step 2
          </span>
        </div>

        {/* div 3 */}
        <div style={{borderColor:borderColor}}   className="p-2 border md:p-3  lg:p-5 flex flex-col justify-start  gap-2 md:gap-3 lg:gap-5       ">
    <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block">
     Step 3
          </span>
        </div>
{/* div 4 */}
  <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex flex-col justify-start        gap-2 md:gap-3 lg:gap-5">  <h1 className="text-base md:text-2xl lg:text-[32px]  font-semibold  font-mulish text-white ">
          Tell us whatyou need
          </h1>

          {/* Subtext description */}
          <p className="text-white text-[10px]  md:text-xs lg:text-base font-mulish">
      Talk to our team, or our on-demand AI agent, and give us some background on your company. We’ll identify skills and capabilities to target for our talent search.
          </p></div>
{/* div 5 */}
          <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex flex-col justify-start        gap-2 md:gap-3 lg:gap-5 ">
              <h1 className="text-base md:text-2xl lg:text-[32px]   font-semibold  font-mulish text-white ">
         We match you with talent
          </h1>

          {/* Subtext description */}
          <p className="text-white text-[10px]  md:text-xs lg:text-base font-mulish">
"Our best-in-class matching algorithm looks for candidates with past work experiences and projects that relate to your company & select the best Pangeans for you.          </p>
</div>

          {/* div 6 */}
          <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex flex-col justify-start        gap-2 md:gap-3 lg:gap-5 ">  <h1 className="text-base md:text-2xl lg:text-[32px]   font-semibold  font-mulish text-white ">
      Schedule interviews and make your pick
          </h1>

          {/* Subtext description */}
          <p className="text-white text-[10px]  md:text-xs lg:text-base font-mulish">
Book time on your matchs’ calendars and meet face-to-face. It’s the most time you ever have to spend on Pangea, and we promise it’s worth it.          </p></div>

  {/* div 7*/}
  <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex flex-col justify-start          md:col-span-2">
    <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block">
      And why fractional hiring?
          </span>
  </div>
  
  {/* div 8 */}
  <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex flex-col justify-start    gap-2 md:gap-3 lg:gap-5 rounded-bl-lg      md:col-span-2 md:col-start-1 md:row-start-4">
    <h1 className="text-base md:text-2xl lg:text-[32px]   font-semibold  font-mulish text-white ">
           Hire experts that become part of your team for a few hours a week
          </h1>

          {/* Subtext description */}
          <p className="text-white text-[10px]  md:text-xs lg:text-base font-mulish">
      "Make your runway go further with a roster of fractional hires. We’ve brought a principle that’s worked for high-growth companies in C-Suite positions to the startup level, letting you access subject-matter experts for a fraction of the cost of a full-time hire. Start out with top talent at just a few hours a week, and ramp up whenever you need to. That’s the power of fractional hiring, powered by Pangea.
          </p>
  </div>
  
  {/* div 9 */}
  <div style={{borderColor:borderColor}}   className="p-2  border md:p-3  lg:p-5 flex  justify-center   rounded-br-lg       md:row-span-2 md:col-start-3 md:row-start-3">
      <Image
                          alt="hi"
                width={500}
                height={500}
                loading="lazy"
                          src="/assets/remoteImg.avif"
                          className="w-full h-full object-cover  rounded-xl"
                        />
  </div>
      
  
</div></div>
</div>
</>
  )
}
