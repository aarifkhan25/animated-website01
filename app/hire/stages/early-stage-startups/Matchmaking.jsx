import React from 'react';
import Image from 'next/image';
import AnimatedContent from '@/components/AnimatedContent.jsx';
import FadeContent from "@/components/FadeContent.jsx"
export default function Matchmaking({textColor}) {
  // तैरते हुए सर्कल्स (Text Bubbles) का डेटा ऑब्जेक्ट
  const textBubbles = [
    { text: "RELATED WORK EXPERIENCE", size: "w-40 h-40 lg:w-48 lg:h-48 text-sm lg:text-base", bg: "bg-[#f35400]", textColor: "text-black", pos: "top-[25%] left-[12%] lg:left-[14%]" },
    { text: "DEGREES + CERTS", size: "w-24 h-24 lg:w-28 lg:h-28 text-xs lg:text-sm", bg: "bg-[#a63a00]", textColor: "text-[#f35400]", pos: "top-[10%] left-[28%]" },
    { text: "HOURLY RATE", size: "w-20 h-20 lg:w-24 lg:h-24 text-xs", bg: "bg-[#4d1300]", textColor: "text-[#f35400]", pos: "bottom-[20%] left-[10%] lg:left-[12%]" },
    { text: "INDURED EXPERIENCE", textDisplay: "INDUSTRY EXPERIENCE", size: "w-32 h-32 lg:w-36 lg:h-36 text-xs lg:text-sm", bg: "bg-[#f35400]", textColor: "text-black", pos: "top-[18%] right-[20%]" },
    { text: "SKILLS", size: "w-20 h-20 lg:w-24 lg:h-24 text-xs lg:text-sm", bg: "bg-[#3d0f00]", textColor: "text-[#f35400]", pos: "top-[43%] right-[12%] lg:right-[14%]" },
    { text: "DEGREES + CERTS", size: "w-32 h-32 lg:w-36 lg:h-36 text-xs lg:text-sm", bg: "bg-[#f35400]", textColor: "text-black", pos: "bottom-[8%] right-[8%]" },
  ];

  // छोटे अवतारों (Avatar Bubbles) का डेटा ऑब्जेक्ट
  const avatars = [
    { id: 1, size: "w-12 h-12 lg:w-14 lg:h-14", pos: "top-[32%] left-[4%]", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
    { id: 2, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[10%] left-[16%]", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { id: 3, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "bottom-[5%] left-[12%]", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    { id: 4, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[9%] right-[38%]", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" },
    { id: 5, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "top-[16%] right-[14%]", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
    { id: 6, size: "w-14 h-14 lg:w-16 lg:h-16", pos: "bottom-[30%] right-[4%]", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
  ];

  return (
    <section className="w-full h-auto  text-white flex items-center justify-center relative overflow-hidden font-mulish px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-35  py-10 lg:py-20 1xl:py-30">
      
      {/* ─── DESKTOP/TABLET ABSOLUTE LAYOUT (Hidden on Mobile) ─── */}
      <div className="hidden md:block absolute inset-0 w-full h-full max-w-[1600px] mx-auto pointer-events-none">
        
        {/* Render Text Bubbles */}
        {textBubbles.map((bubble, index) => (
            <FadeContent
          blur={true}
          duration={1.5}
          delay={0.3}
          easing="ease-out"
          initialOpacity={0}
        >
          <div
            key={`text-${index}`}
            className={`absolute ${bubble.pos} ${bubble.size} ${bubble.bg} ${bubble.textColor} 
                       rounded-full flex items-center justify-center text-center font-bold  font-mulish

                      p-2 lg:p-4 leading-tight tracking-wider transition-transform duration-500 hover:scale-110 shadow-lg select-none`}
          >
            {bubble.textDisplay || bubble.text}
          </div></FadeContent>
        ))}

        {/* Render Avatar Bubbles */}
        {avatars.map((avatar) => (
            <FadeContent
          blur={true}
          duration={1.5}
          delay={0.3}
          easing="ease-out"
          initialOpacity={0}
        >
          <div
            key={`avatar-${avatar.id}`}
            className={`absolute ${avatar.pos} ${avatar.size} rounded-full overflow-hidden 
                       border-2 border-transparent hover:border-[#f25400] transition-all duration-300 shadow-md`}
          >
            <Image width={500} height={500} loading="lazy"
              src={avatar.src}
              alt="Talent Avatar"
              className="w-full h-full object-cover grayscale opacity-90 contrast-125 saturate-150"
              style={{ filter: "sepia(0.3) hue-rotate(-15deg) saturate(2)" }} // इमेज को नियॉन ऑरेंज टोन देने के लिए
            />
          </div></FadeContent>
        ))}
      </div>

      {/* ─── CENTRAL CONTENT AREA (Responsive for All Screens) ─── */}
      <div className=" flex flex-col gap-0 md:gap-5  lg:gap-0 items-center justify-center text-white">
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
          <div className="mt-10 md:mt-25 mb-10 md:mb-0">
            <span style={{color:textColor}} className="    font-jb-mono  text-xs  md:text-sm lg:text-base uppercase">
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
          <div className=" text-center  ">
            <h1 className="text-2xl md:text-[38px] lg:text-[56px]  tracking-wide leading-[1.1]  font-mulish ">
   A+ fractional <br/> matchmaking
            </h1>
          </div>
        </FadeContent>
        {/* Subtext */}
        <div className=" text-center md:max-w-[400px] lg:max-w-3xl ">
          <FadeContent
            blur={true}
            duration={1.5}
            easing="ease-in"
            initialOpacity={0}
            delay={0.5}
          >
            <p className="text-white text-sm md:text-xl lg:text-2xl font-mulish">
       We use firmographic data and years of experience to find you the perfect match, every time. That’s how we’ll find the best early-stage startup-ready talent for you.

            </p>
          </FadeContent>
        </div>
      </div>

      {/* ─── MOBILE ONLY FLOATING WRAPPER (Visible on Mobile) ─── */}
      {/* मोबाइल पर अनुभव को ख़राब होने से बचाने के लिए इन्हें नीचे ग्रिड में सलीके से अरेंज किया गया है */}
      <div className="md:hidden w-full flex flex-wrap justify-center gap-4 mt-12 pt-6 border-t border-white/5 relative z-10">
        <div className="bg-[#f35400] text-black text-xs font-bold px-4 py-2 rounded-full">RELATED WORK EXPERIENCE</div>
        <div className="bg-[#a63a00] text-[#f35400] text-xs font-bold px-4 py-2 rounded-full">DEGREES + CERTS</div>
        <div className="bg-[#f35400] text-black text-xs font-bold px-4 py-2 rounded-full">INDUSTRY EXPERIENCE</div>
        <div className="bg-[#3d0f00] text-[#f35400] text-xs font-bold px-4 py-2 rounded-full">SKILLS</div>
      </div>
    </section>
  );
}