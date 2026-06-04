
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function OurClient({textColor}) {
  return (
    <section className="px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 py-10 lg:py-20 1xl:py-30">
  
  <div className="flex flex-col md:flex-row bg-[#141414] rounded-lg overflow-hidden items-stretch">
    

    <div className="w-full md:flex-1 flex flex-col justify-between gap-10 md:gap-15 lg:gap-30 p-5 md:p-7 lg:p-10">
      <div> 
        <span style={{ color: textColor }} className="text-xs md:text-sm lg:text-base font-jb-mono uppercase block mb-3 tracking-wider">
          real pangea client
        </span>
    
        <h1 className="text-xl md:text-2xl lg:text-[38px] xl:text-[40px] font-semibold font-mulish text-white leading-[1.25]">
          "Working with Pangea allowed us to do full-time hires in a more efficient, risk-free way."
        </h1>
      </div>
      
      <div className="flex justify-between items-center"> 
        <div className="flex flex-col ">
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold font-mulish text-white">
            Arianna
          </h2>
          <span style={{ color: textColor }} className="text-xs md:text-sm lg:text-base font-mulish block">
            Dorothy
          </span>
        </div> 
          <div className={` flex gap-4`}>
                            <button 
                          
                              className="w-8 md:w-13 h-8 md:h-13 1xl:h-15 1xl:w-15 rounded-full  bg-[#5a006c] flex items-center justify-center font-bold text-white   "
                            >
                              <FaArrowLeft className="md:w-8 md:h-8 1xl:w-10 1xl:h-10" />
                            </button>
                            <button 
                           
                              className="w-8 md:w-13 h-8 md:h-13  1xl:h-15 1xl:w-15 rounded-full  bg-[#5a006c] flex items-center font-bold justify-center text-white   "
                            >
                              <FaArrowRight className="md:w-8 md:h-8 1xl:w-10 1xl:h-10" />
                            </button>
                          </div>
      </div>
    </div>

    
    <div className="w-full md:w-[320px] lg:w-[400px] aspect-[4/3] md:aspect-auto md:min-h-[350px] relative flex-shrink-0 overflow-hidden">
      <img 
        src="/assets/hire/stages/F2.avif" 
        alt="Featured Fractional Designer Profile" 
        className="w-full h-full object-cover grayscale-[10%] brightness-95 hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>

  </div>
</section>
  )
}
