import React from 'react';
import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent.jsx';
import FadeContent from "@/components/FadeContent.jsx";

export default function Matchmaking({ textColor,bgColor,textColor2 }) {

  const textBubbles = [
    { text: "RELATED WORK EXPERIENCE", size: "w-40 h-40 lg:w-48 lg:h-48 text-sm lg:text-base", bg: textColor, textColor: textColor2, pos: "bottom-[55%] left-[7%] lg:left-[10%]" },
    { text: "DEGREES + CERTS", size: "w-24 h-24 lg:w-28 lg:h-28 text-xs lg:text-sm", bg:bgColor, textColor: textColor, pos: "top-[15%] left-[28%]" },
    { text: "HOURLY RATE", size: "w-20 h-20 lg:w-24 lg:h-24 text-xs", bg: bgColor, textColor: textColor, pos: "bottom-[42%] left-[20%] lg:left-[12%]" }, // FIX: bottom-50% से बाहर जा रहा था, 20% किया
    { text: "INDURED EXPERIENCE", textDisplay: "INDUSTRY EXPERIENCE", size: "w-32 h-32 lg:w-36 lg:h-36 text-xs lg:text-sm", bg: textColor, textColor: textColor2, pos: "top-[15%] right-[25%]" },
    { text: "SKILLS", size: "w-20 h-20 lg:w-24 lg:h-24 text-xs lg:text-sm", bg: bgColor, textColor: textColor, pos: "top-[35%] right-[12%] lg:right-[10%]" },
    { text: "DEGREES + CERTS", size: "w-32 h-32 lg:w-36 lg:h-36 text-xs lg:text-sm", bg: textColor, textColor: textColor2, pos: "bottom-[45%] right-[20%]" }, // FIX: bottom-50% से 15% किया
  ];

  const avatars = [
    { id: 1, size: "w-12 h-12 lg:w-14 lg:h-14", pos: "top-[22%] left-[5%]", src: "/assets/hire/stages/F1.avif" },
    { id: 2, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[12%] left-[22%]", src: "/assets/hire/stages/F2.avif" },
    { id: 3, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "bottom-[35%] left-[17%]", src: "/assets/hire/stages/F3.avif" },
    { id: 4, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[9%] right-[38%]", src: "/assets/hire/stages/F4.avif" },
    { id: 5, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[27%] right-[20%]", src: "/assets/hire/stages/F5.avif" },
    { id: 6, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "bottom-[39%] right-[18%]", src: "/assets/hire/stages/F6.avif" },
  ];

  return (
    /* FIX: min-h-[650px] या md:min-h-[750px] दिया ताकि absolute एलिमेंट्स को पूरा स्पेस मिले */
    <section className="w-full min-h-[700px] md:min-h-[750px] lg:min-h-[850px] text-white flex items-center justify-center relative overflow-hidden font-mulish px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 py-10 lg:py-20 1xl:py-30">
      
      {/* ─── DESKTOP/TABLET ABSOLUTE LAYOUT ─── */}
    <div className="hidden md:block absolute inset-0 w-full h-full max-w-[1600px] mx-auto pointer-events-none">
        
        {/* Render Text Bubbles */}
        {textBubbles.map((bubble, index) => (
          <div
            key={`text-${index}`}
            style={{color:bubble.textColor,backgroundColor:bubble.bg}}
            className={`absolute ${bubble.pos} ${bubble.size} 
                       rounded-full flex items-center justify-center text-center font-bold 
                       p-4 leading-tight tracking-wider transition-transform duration-500 hover:scale-110 shadow-lg select-none`}
          >
            {bubble.textDisplay || bubble.text}
          </div>
        ))}

        {/* Render Avatar Bubbles */}
        {avatars.map((avatar) => (
          <div
            key={`avatar-${avatar.id}`}
            className={`absolute ${avatar.pos} ${avatar.size} rounded-full overflow-hidden 
                       border-2 border-transparent hover:border-[#f25400] transition-all duration-300 shadow-md`}
          >
            <img
              src={avatar.src}
              alt="Talent Avatar"
              className="w-full h-full object-cover grayscale opacity-90 contrast-125 saturate-150"
              style={{ filter: "sepia(0.3) hue-rotate(-15deg) saturate(2)" }} // इमेज को नियॉन ऑरेंज टोन देने के लिए
            />
          </div>
        ))}
      </div>

      {/* ─── CENTRAL CONTENT AREA ─── */}
      <div className="relative z-30 max-w-3xl text-center flex flex-col items-center justify-center gap-6 mt-12 md:mt-0">
        {/* Top Badge */}
        <AnimatedContent
          distance={20}
          direction="vertical"
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.1}
        >
          <div className="mb-4 md:mb-0">
            <span style={{ color: textColor }} className="font-jb-mono text-xs md:text-sm lg:text-base uppercase ">
              Move over, cupid
            </span>
          </div>
        </AnimatedContent>

        {/* Main Heading */}
        <FadeContent
          blur={true}
          duration={1.5}
          delay={0.3}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="text-center">
            <h1 className="text-3xl md:text-[44px] lg:text-[56px] xl:text-[64px] tracking-wide leading-[1.1] mb-5 font-mulish font-medium">
              A+ fractional <br /> matchmaking
            </h1>
          </div>
        </FadeContent>

        {/* Subtext */}
        <div className="text-center max-w-2xl">
          <FadeContent
            blur={true}
            duration={1.5}
            easing="ease-in"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="text-neutral-300 text-sm md:text-lg lg:text-xl font-mulish leading-relaxed">
              We use firmographic data and years of experience to find you the perfect match, every time. That’s how we’ll find the best early-stage startup-ready talent for you.
            </p>
          </FadeContent>
        </div>
      </div>

      {/* ─── MOBILE ONLY FLOATING WRAPPER ─── */}
      <div className="md:hidden w-full flex flex-wrap justify-center gap-4 mt-12 pt-6 border-t border-white/5 relative z-10">
        <div className="bg-[#f35400] text-black text-xs font-bold px-4 py-2 rounded-full">RELATED WORK EXPERIENCE</div>
        <div className="bg-[#a63a00] text-[#f35400] text-xs font-bold px-4 py-2 rounded-full">DEGREES + CERTS</div>
        <div className="bg-[#f35400] text-black text-xs font-bold px-4 py-2 rounded-full">INDUSTRY EXPERIENCE</div>
        <div className="bg-[#3d0f00] text-[#f35400] text-xs font-bold px-4 py-2 rounded-full">SKILLS</div>
      </div>
    </section>
  );
}