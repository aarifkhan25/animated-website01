"use client";
import React from 'react';

// तुलना के लिए डेटा स्ट्रक्चर
const comparisonData = [
  {
    feature: "Time to match",
    pangea: "Within 48 Hours",
    others: "Up to a week",
    highlightRow: false
  },
  {
    feature: "Flexibility",
    pangea: "Built to scale up or down",
    others: "Hard to modify contracts",
    highlightRow: true // स्क्रीनशॉट के अनुसार हाइलाइटेड रो
  },
  {
    feature: "Hiring Process",
    pangea: "Streamlined & powered by AI",
    others: "Hours of manual work",
    highlightRow: false
  },
  {
    feature: "Talent Quality",
    pangea: "Category experts with referrals",
    others: "Unvetted & underskilled",
    highlightRow: true // स्क्रीनशॉट के अनुसार हाइलाइटेड रो
  },
  {
    feature: "Support",
    pangea: "White glove service",
    others: "Endless email chains",
    highlightRow: false
  }
];

export default function ComparisonTable({textColor,bgColor}) {
  return (
    <section className="w-full  text-white py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 font-sans overflow-hidden">
        
      <div className="w-full">
        
        {/* ─── मुख्य ग्रिड कंटेनर (3-कॉलम लेआउट) ─── */}
        {/* बड़ी स्क्रीन पर ग्रिड, मोबाइल पर यह क्लीन स्टैक्ड कार्ड्स में बदल जाएगा */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch relative">
          
          {/* ─── कॉलम हेडिंग्स (Headers) ─── */}
          {/* कॉलम 1: लेफ्ट स्पेस (मोबाइल पर छिपा हुआ) */}
          <div className="hidden md:block"></div>
          
          {/* कॉलम 2: Pangea लोगो हेडर */}
          <div className="relative flex justify-center items-center pb-6 md:pb-10 z-20 md:border-x md:border-[#30001f]/40  rounded-t-xl">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-medium tracking-wide">
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
            <h3 className="text-neutral-400 text-sm md:text-base lg:text-lg font-normal leading-snug max-w-[180px] md:max-w-none">
              Freelance hiring platforms
            </h3>
          </div>

          {/* ─── ग्रिड रोज़ (Grid Rows Data) ─── */}
          {comparisonData.map((row, index) => {
            // हाइलाइटेड रो के लिए बैकग्राउंड वेरिएशन्स
            const rowBgClass = row.highlightRow 
              ? "bg-[#30001f] text-white rounded-lg md:rounded-none" 
              : "text-neutral-300";

            return (
              <React.Fragment key={index}>
                
                {/* मोबाइल व्यू कस्टमाइजेशन के लिए आउटर फ्लेक्स रैपर (सिर्फ md से छोटे स्क्रीन्स पर काम करेगा) */}
                <div className={`md:contents flex flex-col gap-3 p-5 mb-4 ${row.highlightRow ? 'bg-[#30001f] rounded-xl' : 'bg-[#121212]/30 rounded-xl md:bg-transparent'}`}>
                  
                  {/* 1. फीचर नाम (लेफ्ट कॉलम) */}
                  <div className={`flex items-center py-2 md:py-6 text-sm sm:text-base font-medium md:pl-4 ${row.highlightRow ? 'text-white md:bg-[#30001f] md:rounded-l-xl' : 'text-neutral-400 md:text-white'}`}>
                    {row.feature}
                  </div>

                  {/* 2. Pangea वैल्यू (सेंटर कॉलम) */}
                  <div className={`flex items-center justify-start md:justify-center py-2 md:py-6 text-sm sm:text-base font-semibold md:text-center md:border-x md:border-[#30001f]/40 md:px-6 z-10
                    ${row.highlightRow ? 'text-white md:bg-[#30001f]' : 'text-white md:bg-[#0d0d0d]/40'}`}
                  >
                    {/* मोबाइल पर विजुअल हिंट */}
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mr-2 md:hidden">Pangea:</span>
                    {row.pangea}
                  </div>

                  {/* 3. अन्य प्लेटफॉर्म्स वैल्यू (राइट कॉलम) */}
                  <div className={`flex items-center justify-start md:justify-center py-2 md:py-6 text-sm sm:text-base font-normal md:text-center md:pr-4 md:text-neutral-300
                    ${row.highlightRow ? 'text-white md:bg-[#30001f] md:rounded-r-xl' : 'text-neutral-400'}`}
                  >
                    {/* मोबाइल पर विजुअल हिंट */}
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mr-2 md:hidden">Others:</span>
                    {row.others}
                  </div>

                </div>

              </React.Fragment>
            );
          })}

          {/* ─── Pangea कॉलम का वर्टिकल बॉर्डर बॉक्स (सिर्फ डेस्कटॉप पर दिखेगा) ─── */}
          <div className="hidden md:block absolute top-[52px] bottom-0 left-[33.33%] right-[33.33%] border border-[#30001f]/60 bg-transparent rounded-b-xl pointer-events-none z-0" />

        </div>
      </div>
    </section>
  );
}