"use client";
import React from 'react';
import Step from "./Step.jsx";



export default function ComparisonTable({textColor,bgColor,comparisonData}) {
  return (
    <section className="w-full  text-white px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30 overflow-hidden">
           <Step title="3 easy steps to growth
        " heading={<>Pangea makes hiring fractional talent easy</>} textColor={textColor}  />
      <div className="w-full">
        
        {/* ─── मुख्य ग्रिड कंटेनर (3-कॉलम लेआउट) ─── */}
        {/* बड़ी स्क्रीन पर ग्रिड, मोबाइल पर यह क्लीन स्टैक्ड कार्ड्स में बदल जाएगा */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch relative">
          
          {/* ─── कॉलम हेडिंग्स (Headers) ─── */}
          {/* कॉलम 1: लेफ्ट स्पेस (मोबाइल पर छिपा हुआ) */}
          <div className="hidden md:block"></div>
          
          {/* कॉलम 2: Pangea लोगो हेडर */}
          <div style={{ borderColor: bgColor}} className="relative flex justify-center items-center pb-6 md:pb-10 z-20  rounded-xl">
            <div className="flex items-center gap-2 text-xl md:text-2xl ">
              {/* कस्टम एसवीजी ग्लोब लोगो (Pangea आइकॉन) */}
              <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              <span>Pangea</span>
            </div>
          </div>
          
          {/* कॉलम 3: अन्य प्लेटफॉर्म्स हेडर */}
          <div className="text-center pb-8 md:pb-10 flex flex-col justify-center items-center">
            <h3 className=" text-white text-sm md:text-lg lg:text-[28px] font-normal leading-snug  ">
              Freelance hiring platforms
            </h3>
          </div>

          {/* ─── ग्रिड रोज़ (Grid Rows Data) ─── */}
          {comparisonData.map((row, index) => {
         
            return (
              <React.Fragment key={index}>
                
                {/* मोबाइल व्यू कस्टमाइजेशन के लिए आउटर फ्लेक्स रैपर (सिर्फ md से छोटे स्क्रीन्स पर काम करेगा) */}
                <div className={`md:contents flex flex-col gap-3 p-5 mb-4 ${row.highlightRow ? 'bg-[#3a002b] rounded-l-xl ' : 'bg-[#121212]/30  md:bg-transparent'}`}>
                  
                  {/* 1. फीचर नाम (लेफ्ट कॉलम) */}
                  <div className={`flex items-center py-2 md:py-6 lg:py-10 text-base font-mulish sm:text-base md:text-xl lg:text-[26px]  md:pl-4 ${row.highlightRow ? 'text-white md:bg-[#3a002b] md:rounded-l-xl ' : ' text-white md:text-white'}`}>
                    {row.feature}
                  </div>

                  {/* 2. Pangea वैल्यू (सेंटर कॉलम) */}
                  <div  className={`flex items-center justify-start md:justify-center text-center  py-2 md:py-6 lg:py-10 text-sm sm:text-base font-semibold font-mulish md:text-xl lg:text-[26px] md:border-x md:border-[#3a002b]  md:px-6 z-10
                    ${row.highlightRow ? 'text-white md:bg-[#3a002b] ' : 'text-white md:bg-[#0d0d0d]/40'}`}
                  >
                    {/* मोबाइल पर विजुअल हिंट */}
                    <span className="text-xs uppercase  font-mulish mr-2 md:hidden">Pangea:</span>
                    {row.pangea}
                  </div>

                  {/* 3. अन्य प्लेटफॉर्म्स वैल्यू (राइट कॉलम) */}
                  <div className={`flex items-center justify-start md:justify-center py-2 md:py-6 lg:py-10 text-sm md:text-xl lg:text-[26px] 
                  l md:text-center md:pr-4 
                    ${row.highlightRow ? 'text-white md:bg-[#3a002b] md:rounded-r-xl' : ' text-white'}`}
                  >
                    {/* मोबाइल पर विजुअल हिंट */}
                    <span className="text-sm md:text-xl lg:text-[26px] uppercase    font-mulish mr-2 md:hidden">Others:</span>
                    {row.others}
                  </div>

                </div>

              </React.Fragment>
            );
          })}

          {/* ─── Pangea कॉलम का वर्टिकल बॉर्डर बॉक्स (सिर्फ डेस्कटॉप पर दिखेगा) ─── */}
          <div className="hidden md:block absolute top-[52px] bottom-0 left-[33.33%] right-[33.33%] border border-[#3a002b]/60 bg-transparent rounded-b-xl pointer-events-none z-0" />

        </div>
      </div>
    </section>
  );
}