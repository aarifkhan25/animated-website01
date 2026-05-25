"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

import Image from "next/image";

const scrollData = [
  {
    id: 1,
    title: "step 01 / 04",
    heading: <>Create your account <br /> on the easy way</>,
    subheading: "Link your LinkedIn or upload your Resume. We'll parse and fill out your profile.",
    img: "/assets/S1.svg",
  },
  {
    id: 2,
    title: "step 02 / 04",
    heading: <>Get matched to <br /> an open role</>,
    subheading: "When job goes live, we'll send you a notification. You can apply with one click and track your application status in real time.",
    img: "/assets/S2.svg",
  },
  {
    id: 3,
    title: "step 03 / 04",
    heading: "Apply within 48 hours",
    subheading: "Get shortlisted for roles that match your skills and experience.",
    img: "/assets/S3.svg",
  },
  {
    id: 4,
    title: "step 04 / 04",
    heading: "Dial in your interview",
    subheading: "Prepare for your interview with our AI-powered practice tool.",
    img: "/assets/S4.svg",
  },
];

export default function PageScrollSpyAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // पूरे पेज के स्क्रॉल को ट्रैक करना
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // टेक्स्ट को ऊपर की तरफ ले जाने के लिए ट्रांसफॉर्म मोशन
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // FIX: टाइमिंग को थोड़ा आगे (Delay) बढ़ा दिया है ताकि टेक्स्ट के सेंटर में आने पर ही इमेज बदले
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.30) {
      setActiveIndex(0); // पहला टेक्स्ट सेंटर में है
    } else if (latest >= 0.30 && latest < 0.58) {
      setActiveIndex(1); // दूसरा टेक्स्ट सेंटर में है
    } else if (latest >= 0.58 && latest < 0.85) {
      setActiveIndex(2); // तीसरा टेक्स्ट सेंटर में है
    } else {
      setActiveIndex(3); // जब चौथा टेक्स्ट बिल्कुल सेंटर में लॉक होगा, तभी चौथी इमेज आएगी
    }
  });

  return (
    <div ref={sectionRef} className="relative w-full h-[400vh] bg-[#0b0c10] ">
      
      {/* Sticky कंटेनर */}
      <div className="sticky  w-full h-screen top-[10%] md:top-[0%] lg:top-[7%] flex items-center justify-center overflow-hidden ">
        
        {/* मुख्य फ्लेक्स बॉक्स */}
        <div className=" w-full h-screen md:h-[58vh] lg:h-[80vh] flex flex-col-reverse md:flex-row overflow-hidden items-center gap-4 md:gap-0">
          
          {/* 1st DIV: टेक्स्ट वाला हिस्सा */}
         <div className="h-[50vh] md:h-full flex-[6] w-full overflow-hidden relative flex flex-col px-6 md:px-12 lg:px-20 1xl:px-25 2xl:px-30 py-[20vh] md:py-[2vh] lg:py-[30vh]">
            <motion.div 
              style={{ y: textY }} 
              className="w-full flex flex-col"
            >
              {scrollData.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                   key={item.id}
                    className={`min-h-[25vh] flex flex-col justify-center items-start transition-all duration-500 mb-[50vh] md:mb-[20vh] lg:mb-[50vh] ${
                      isActive ? "opacity-100 scale-100 filter blur-0" : "opacity-10 scale-95 filter blur-[1px]"
                    }`}
                  >
                    <div className="w-full">
                      <h5 className="text-[#ff004e] uppercase text-xs md:text-sm lg:text-base font-jb-mono mb-2 md:mb-5">
                        {item.title}
                      </h5>
                      <h1 className="text-white text-xl md:text-[32px] lg:text-[46px] font-mulish font-medium mb-2 md:mb-6 leading-tight">
                        {item.heading}
                      </h1>
                      <p className="text-gray-300 text-[12px] md:text-base lg:text-2xl font-mulish font-normal leading-relaxed max-w-xl">
                        {item.subheading}
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* आखिरी स्टेप को रोकने के लिए खाली ब्लॉक */}
              <div className="min-h-[30vh] w-full" />
            </motion.div>
          </div>

          {/* 2nd DIV: इमेज वाला हिस्सा */}
          <div className="h-[50vh] md:h-full w-[92%] md:w-full flex-[4] bg-[#40000b] overflow-hidden relative flex items-center justify-center  shadow-2xl mt-4 md:mt-0">
            {scrollData.map((item, index) => (
              <motion.div
                key={item.id}
                className="absolute inset-0 py-2 md:py-0 md:px-7 lg:p-10 1xl:px-15 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.95,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    priority={index === 0}
                    className="object-contain rounded-2xl" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}