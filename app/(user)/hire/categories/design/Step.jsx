import React from 'react'

export default function Step({title,heading,textColor}) {
  return (
     <div className="flex flex-col gap-3 md:gap-5 lg:gap-7   items-center justify-center p-3 md:p-5 lg:p-10 text-white ">
           
        
              <div className=" ">
                <span style={{color:textColor}} className="    font-jb-mono  text-xs  md:text-sm lg:text-base uppercase">
                  {title}
                </span>
              </div>

    
            {/* Main Heading */}
         
              <div className=" text-center  ">
                <h1 className="text-2xl md:text-[45px] lg:text-[56px]   leading-[1.1]  font-mulish ">
                 
                  {heading}
                </h1>
              </div>
         
           
          </div>
  
  )
}
