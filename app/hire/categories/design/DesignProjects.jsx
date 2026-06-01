import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
const blog=[{title:"Design",heading:"How Fractional Product Designers Are Using AI to Move Faster Without Losing Their Edge"}, {title:"Working with Pangeans",heading:"The Strategic Importance of Design in Startups"},{title:"Business",heading:"Why Your Startup Needs a UI Designer for Success"},{title:"Working with Pangeans",heading:"The Essential Guide to Evaluating UI Designer Portfolios"},]
export default function DesignProjects({textColor,bgColor,title,role}) {
  return (
<div className="w-full px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30 ">
    <div className={`grid grid-cols-2  md:grid-cols-4 ${role!=="blog"?"lg:grid-rows-3":" "} border border-[#3a002b] rounded-t-lg `}  >
  {/* प्रत्येक आइटम को बेहतर दिखने के लिए थोड़ा बैकग्राउंड और पैडिंग दी गई है */}
  
  {/* आइटम 1: मोबाइल पर नॉर्मल, डेस्कटॉप पर 3 कॉलम घेरेगा */}
  <div className="flex justify-start items-center p-2 md:p-5  md:col-span-3 border border-[#3a002b]">
      <h1 className="text-base md:text-2xl lg:text-[40px]   font-semibold  font-mulish text-white ">
      {title}
          </h1>
  </div>
  
  {/* आइटम 2: डेस्कटॉप पर चौथे कॉलम पर लॉक होगा */}
  <div className="  flex justify-center items-center p-2 md:py-5 md:px-5 lg:px-10  md:col-start-4 border border-[#3a002b]">
        <button style={{backgroundColor:textColor}} className="group lg:w-full flex justify-center items-center gap-2 transition-colors text-black py-2 px-3 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-sm md:text-base lg:text-xl cursor-pointer">
                       <div className="flex justify-center items-center gap-1">
                         View More    
                         <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                       </div>
                     </button>
  </div>


 
  <div className={`${role==="blog"?"hidden":"block"}  flex flex-col justify-start items-start p-2 md:p-5 gap-2 md:gap-5 md:col-span-2 md:row-start-2 border border-[#3a002b]`}>
    <h1 className="text-xs md:text-base lg:text-lg   font-semibold  font-mulish text-white ">
      Create a cohesive brand identity and style guid
          </h1>

          {/* Subtext description */}
          <p style={{color:textColor}} className=" text-[10px]  md:text-xs lg:text-base font-mulish">
Find talent on Pangea    </p>
  </div>

  <div className={`${role==="blog"?"hidden":"block"}  flex flex-col justify-start items-start p-2 md:p-5 gap-2 md:gap-5 md:col-span-2 lg:col-start-3 md:row-start-2 border border-[#3a002b]`}>
 <h1 className="text-xs md:text-base lg:text-lg   font-semibold  font-mulish text-white ">
      Create a cohesive brand identity and style guid
          </h1>
          <p style={{color:textColor}} className=" text-[10px]  md:text-xs lg:text-base font-mulish">
Find talent on Pangea    </p>
  </div>
  
  {/* आइटम 5 */}
  <div className={`${role==="blog"?"hidden":"block"}  flex flex-col justify-start items-start p-2 md:p-5 gap-2 md:gap-5 md:col-span-2 lg:row-start-3 border border-[#3a002b]`}>
 <h1 className="text-xs md:text-base lg:text-lg   font-semibold  font-mulish text-white ">
      Create a cohesive brand identity and style guid
          </h1>

         
          <p style={{color:textColor}} className=" text-[10px]  md:text-xs lg:text-base font-mulish">
Find talent on Pangea    </p>
  </div>
  
  {/* आइटम 6 */}
  <div className={`${role==="blog"?"hidden":"block"}  flex flex-col justify-start items-start p-2 md:p-5 gap-2 md:gap-5 md:col-span-2 md:col-start-3 md:row-start-3 border border-[#3a002b]`}>
   <h1 className="text-xs md:text-base lg:text-lg   font-semibold  font-mulish text-white ">
      Create a cohesive brand identity and style guid
          </h1>





          {/* Subtext description */}
          <p style={{color:textColor}} className=" text-[10px]  md:text-xs lg:text-base font-mulish">
Find talent on Pangea    </p>

  </div>
  

</div>

{/* पैरेंट डिब: स्क्रॉल को इनेबल रखने के लिए [-ms-overflow-style:none] आदि क्लासेस जोड़ी हैं */}
<div className={`${role === "blog" ? "flex" : "hidden"} w-full gap-5 md:gap-7 lg:gap-10 overflow-x-auto scroll-smooth p-3 md:p-5 lg:p-10 border border-[#3a002b] rounded-b-lg `}>

  {blog?.map((item, i) => {
    return (
      <div 
        key={i} 
        /* FIX 1: flex-shrink-0 जोड़ा ताकि कार्ड पिचके नहीं, और एक फिक्स विड्थ (w-[280px] md:w-[350px]) सेट की */
        className="flex flex-col justify-between rounded-lg bg-[#141414] p-5 lg:p-6 flex-shrink-0 w-[280px] md:w-[350px] min-h-[220px] md:min-h-[280px] lg:w-[400px] lg:min-h-[350px] "
      >
        {/* टॉप सेक्शन: टाइटल */}
        <div> 
          <span style={{ color: textColor }} className="text-xs md:text-sm lg:text-base font-jb-mono uppercase block mb-3">
            {item.title}
          </span>
        </div>
        
        {/* मिडिल सेक्शन: हेडिंग */}
        <div className="my-4">
          <h1 className="text-base md:text-2xl lg:text-[32px] font-semibold font-mulish text-white ">
            {item.heading}
          </h1>
        </div>
        
        {/* बॉटम सेक्शन: बटन (Read Article की स्पेलिंग भी ठीक कर दी है) */}
        <div className="mt-auto pt-2"> 
          <button 
            style={{ backgroundColor: textColor }} 
            className="group flex items-center gap-2 transition-colors text-black py-2 px-4 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-xs md:text-sm lg:text-base cursor-pointer active:scale-95 transition-all"
          >
            <div className="flex justify-center items-center gap-1">
              Read Article
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    )
  })}
</div>


</div>
  )
}
