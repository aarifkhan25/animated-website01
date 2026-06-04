"use client";
import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// टैलेंट डेटा ऐरे (मैचिंग इमेजेस और पिछले एक्सपीरिएंस के साथ)


export default function DesignTalent({textColor,bgColor,talentData}) {
  return (
    <section className="w-full   px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 py-10 lg:py-20 1xl:py-30">
      <div className="">
        
   
        <header className="mb-6 md:mb-12 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-[56px]  font-mulish text-white ">
            Explore top fractional Design talent on Pangea
          </h1>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {talentData.map((talent, index) => (
            <div 
              key={index} style={{backgroundColor:bgColor}}
              className="rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(254,0,199,0.1)] group"
            >
              {/* इमेज कंटेनर */}
              <div className="relative w-full aspect-[4/3] overflow-hidden ">
                <Image width={500}
                height={500}
                  src={talent.image}
                  alt={`${talent.name} - Fractional Design Talent`}
                  className={`w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 ${
                    talent.isGrayscale ? 'grayscale contrast-115' : ''
                  }`}
                  loading="lazy"
                />
              </div>
   <div className="p-4 md:p-7 lg:p-10  flex flex-col flex-grow justify-between gap-3 lg:gap-5">
               
                  {/* नाम */}
               <div>  <h2 className="text-white text-lg font-mulish md:text-2xl lg:text-4xl font-medium">
                    {talent.name}
                  </h2></div> 
                  
                  {/* पूर्व कंपनी सबटेक्स्ट */}
                 <div><p style={{color:textColor}} className="font-jb-mono  text-[10px] md:text-xs lg:text-base uppercase">
                    FORMERLY @ {talent.formerCompany}
                  </p></div> 
     

                {/* एक्शन बटन */}
                <div className="">
                  <button style={{backgroundColor:textColor}}
                    className="inline-flex items-center gap-2 font-mulish font-bold  text-black  text-xs md:text-sm lg:text-base px-5 py-2.5 rounded-full transition-all duration-300  active:scale-95 0"
                    aria-label={`View ${talent.name}'s Profile`}
                  >
                    View Profile
                    <FiArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}