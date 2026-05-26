import React from 'react'
import {pressData} from "@/data/about/press.js"
export default function page() {
  return (
 <div className="w-full mt-20 flex flex-col gap-3 md:gap-6 lg:gap-10 px-6 md:px-10 lg:px-20">
    {pressData?.map((item,i)=>{
        return <div key={i} className="w-full bg-[#002534]  rounded-[4px] p-5 md:p-7 lg:p-10 flex flex-col justify-between gap-3 md:gap-6 hover:bg-[#063a4e] transition-colors duration-300">
        
  
        <div className="flex items-center justify-between w-full">
          <span className="text-[#99e5fd] font-mulish text-xs md:text-lg lg:text-2xl font-semibold tracking-wide">
          {item.source}
          </span>
          <span className="text-[#00c2ee]/70 font-mulish text-[10px] md:text-sm lg:text-base">
           {item.date}
          </span>
        </div>

 
        <div className="w-full">
          <h2 className="text-[#ccf4ff] font-mulish text-base md:text-3xl lg:text-[40px] font-medium font-mulish leading-snug max-w-5xl">
           {item.title}
          </h2>
        </div>

      </div>
    })
      }
    
    </div>

    
  )
}
