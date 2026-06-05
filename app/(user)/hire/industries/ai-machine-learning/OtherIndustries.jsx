"use client";
{/* FIX: useState को react से इंपोर्ट किया */}
import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimatedContent from "@/components/AnimatedContent.jsx";

const otherIndus = [
  { title: "Direct to Consumer", img: "/assets/hire/industries/I1.png" },
  { title: "Business to Business", img: "/assets/hire/industries/I2.png" },
  { title: "Marketing & Design Agencies", img: "/assets/hire/industries/I3.png" },
  { title: "Blockchain and Web3", img: "/assets/hire/industries/I4.png" },
  { title: "Healthcare", img: "/assets/hire/industries/I5.png" },
];

export default function OtherIndustries({ textColor }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // स्क्रॉल की पोजीशन चेक करने वाला फंक्शन
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // अगर स्क्रॉल थोड़ा भी आगे बढ़ा है तो Left बटन इनेबल होगा
      setCanScrollLeft(scrollLeft > 2);
      
      // अगर स्क्रॉल बिल्कुल अंत तक पहुँच गया है तो Right बटन डिसेबल होगा (10px का मार्जिन बफर के लिए)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  // पेज लोड होने पर इनिशियल पोजीशन चेक करने के लिए
  useEffect(() => {
    checkScrollPosition();
    // स्क्रीन रीसाइज़ होने पर भी पोजीशन दोबारा कैलकुलेट होगी
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  // स्क्रॉल हैंडलर फंक्शन
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; 
      
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full text-white py-5 md:py-10 1xl:py-15 overflow-hidden">
    
      <div className="w-full mx-auto flex justify-between items-center px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80">
        <div className="flex">
          <AnimatedContent
            distance={20}
            direction="horizontal"
            reverse
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.2}
          >
            <div>
              <span style={{ color: textColor }} className="font-jb-mono text-xs md:text-base lg:text-xl uppercase tracking-wider">
                other industries
              </span>
            </div>
          </AnimatedContent>
        </div>

        {/* नेविगेशन बटन्स */}
        <div>
          <div className="flex gap-4">
            <button 
              disabled={!canScrollLeft}
              onClick={() => handleScroll('left')}
              /* FIX: डिसेबल होने पर बटन का लुक बदलने के लिए disabled:opacity-30 जोड़ा */
              className="w-10 h-10 md:w-13 md:h-13 1xl:h-15 1xl:w-15 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll Left"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 1xl:w-8 1xl:h-8" />
            </button>
            <button 
              disabled={!canScrollRight}
              onClick={() => handleScroll('right')}
              /* FIX: डिसेबल होने पर बटन का लुक बदलने के लिए disabled:opacity-30 जोड़ा */
              className="w-10 h-10 md:w-13 md:h-13 1xl:h-15 1xl:w-15 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Scroll Right"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 1xl:w-8 1xl:h-8" />
            </button>
          </div>
        </div>
      </div>

      
      <div 
        ref={scrollContainerRef} 
        onScroll={checkScrollPosition} 
        className="flex gap-5 md:gap-10 1xl:gap-15 overflow-x-auto scroll-smooth snap-x snap-mandatory py-5 md:py-10 [scrollbar-width:none] [-ms-overflow-style:none]  ml-6 md:ml-10 lg:ml-20 1xl:ml-25 2xl:ml-50 3xl:ml-80 pr-6 md:pr-10 lg:pr-20 1xl:pr-25 2xl:pr-50 3xl:pr-80"
      >
        {otherIndus?.map((item, i) => {
          return (
            <div 
              key={i} 
              className="bg-[#141414] flex flex-row justify-between rounded-lg overflow-hidden snap-start flex-shrink-0 w-[250px] h-[200px] md:w-[300px] md:h-[250px] lg:w-[350px] lg:h-[300px] opacity-70 hover:opacity-100 transition duration-300"
            >
             
              <div className="flex flex-1 p-3 md:p-5">
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-mulish font-medium leading-snug">
                  {item.title}
                </h1>
              </div>

            
              <div className="flex justify-end mt-auto">
                <div
                  className="w-40 h-40 sm:w-50 sm:h-50 md:w-40 md:h-80 lg:w-50 lg:h-90 aspect-square transition-all duration-300"
                  style={{
                    maskImage: `url('${item.img}')`,
                    WebkitMaskImage: `url('${item.img}')`,
                    maskSize: 'contain', 
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    backgroundColor: textColor 
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}