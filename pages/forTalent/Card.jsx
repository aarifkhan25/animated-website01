"use client";
import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Image from "next/image"
import Link from "next/link";

export default function Card({title, heading, subheading, role, textColor, bgColor, companies}) {
  // 1. FIX: शुरुआत में फ़ॉल्स रखें ताकि सर्वर-साइड मैचिंग में दिक्कत न आए
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    // 2. FIX: Next.js DOM को ठीक से रीड कर पाए, इसलिए हल्का सा डिले देकर init करें
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: false, 
      });
    }, 100);

    window.addEventListener("resize", checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isMobile]);

  return (
    <div  
      data-aos={!isMobile ? "flip-up" : undefined}   
      className={`flex items-center justify-center ${role !== "remote" ? "px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80   py-5 md:py-10 1xl:py-15" : ""}`}
    >
      {/* बाकी पूरा नीचे का कोड बिल्कुल पहले जैसा ही रहेगा */}
      <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-xl bg-[#1a1a1a]">
        {/* ... (आपका पूरा पुराना डिजाइन कोड) ... */}
        <div className="md:flex-[6] w-full p-5 md:p-7 lg:p-10 flex flex-col justify-between items-start">
          <div className="w-full">
            <h5 style={{color:textColor}} className="uppercase text-xs md:text-sm lg:text-base font-jb-mono mb-6">{title}</h5>
            <h1 className="text-white text-2xl md:text-[30px] lg:text-[40px] font-mulish font-medium mb-8">{heading}</h1>
            <p className="text-white text-[10px] md:text-sm lg:text-[17px] 1xl:text-lg font-mulish font-semibold">{subheading}</p>
          </div>
          <div className="mt-12">
            <Link href="/auth/createaccount" style={{ backgroundColor: textColor }} className="group flex items-center justify-center gap-2 transition-all text-black rounded-full font-bold font-mulish p-2.5 lg:py-3 lg:px-4 1xl:py-6 1xl:px-8 text-sm lg:text-lg 1xl:text-2xl">
              Get Started <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        {role === "remote" ? (
          <div style={{ backgroundColor: bgColor}} className="md:flex-[4] w-full h-[300px] md:h-auto flex justify-center items-center">
            <div className="w-full h-full" style={{ maskImage:`url('/assets/fortalent2.png')`, WebkitMaskImage:`url('/assets/fortalent2.png')`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center', backgroundColor: textColor }} />
          </div>
        ) : role === "world" ? (
          <div style={{ backgroundColor: bgColor }} className="md:flex-[4] relative w-full z-0 h-[300px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
            <div className="w-full h-full" style={{ maskImage: `url('/assets/hire/stages/E2.png')`, WebkitMaskImage: `url('/assets/hire/stages/E2.png')`, maskSize: 'cover', WebkitMaskSize: 'cover', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center', backgroundColor: textColor }} />
            <div className="absolute bottom-[40%] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center bg-[#0d0d0d] rounded-lg p-4 md:py-3 md:px-4 lg:py-6 lg:px-6 border border-white/10 shadow-2xl min-h-[60px] w-[90%] max-w-[400px]">
              <Image src="/assets/hire/stages/E3.svg" alt="Stage Detail" width={400} height={50} className="w-full h-auto object-contain" />
            </div>
          </div>
        ) : (
          <div style={{backgroundColor:bgColor}} className="md:flex-[4] w-full p-6 md:p-8 flex flex-col gap-4 justify-center">
            {companies?.map((comp, i) => (
              <div key={i} className="bg-[#0d0d0d] rounded-lg md:py-2 md:px-1 lg:py-6 lg:px-4 flex items-center justify-center border border-white/5 shadow-2xl min-h-[80px]">
                <div className="w-full h-10 md:h-12" style={{ maskImage: `url('${comp.img}')`, WebkitMaskImage: `url('${comp.img}')`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center', backgroundColor: textColor }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}