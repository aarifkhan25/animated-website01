"use client";
import React from 'react';
import Step from "./Step.jsx";
// स्टैट्स डेटा ऐरे


export default function TrackRecords({textColor, borderColor,tag,statsData}) {
  return (
    <section className="w-full  text-white px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80    py-5 md:py-10 1xl:py-15  ">
      <div className="w-full border border-[#3a002b] rounded-lg">
        <Step title="fractional hiring you can trust
        " heading={<>A track record <br/> of success</>} textColor={textColor} borderColor={borderColor} />
  
        <div 

          className="w-full grid grid-cols-3    md:gap-6 lg:gap-12 "
        >
            {tag?.map((t, index) => (
            <div 
          key={index}
              className="flex flex-col justify-start items-start p-2 md:p-5 "
            >
              <div>
            
                <span  style={{ color: textColor }} className=" font-jb-mono text-[8px] md:text-xs lg:text-base    uppercase">
                  {t}
                </span>
             
</div></div>   ))}     </div>
             
              <div 

          className="w-full grid grid-cols-3    md:gap-6 lg:gap-12 border border-[#3a002b] border-t"
        >
          
       {  statsData?.map((stat,i)=>{
        return ( <div 
          key={i}
              className="flex flex-col justify-start items-start p-2 md:p-5  gap-3 md:gap-7  lg:gap-10"
            ><h2 className="text-white text-lg sm:text-5xl lg:text-[56px] font-mulish font-semibold ">
                {stat.value}
              </h2>

          
              <p className=" text-[10px] md:text-lg lg:text-2xl  font-mulish">
                {stat.label}
              </p></div>)
       })  }
     
   
        </div>

      </div>
    </section>
  );
}