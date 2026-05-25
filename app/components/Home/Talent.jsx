"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPlayer from "react-player";
import { HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";
const talent = [
  {
    img: "/assets/talent/t1.avif",
    title: "Fractional designers",
    name: "Design",
    des: "The graphic, UI/UX, and content designers you need to differentiate your company",
  },
  {
    img: "/assets/talent/t5.avif",
    title: "Fractional ops props",
    name: "Oprations",
    des: "Project + Product Managers to keep your team running smoothly",
  },
  {
    img: "/assets/talent/t3.avif",
    title: "Fractional devs",
    name: "Engineering",
    des: "Front-End, Back-End, and Full-Stack devs that know your tech stack",
  },
  {
    img: "/assets/talent/t4.avif",
    title: "Fractional Marketers",
    name: "Marketing",
    des: "From GTM Strategy, to Growth Management, to Social Media Management",
  },
];

const clientInfo = [
  {
    id: 1,
    name: "Anam",
    post: "co-founder & co-ceo",
    img: "/assets/clientImg/img.svg",
    video: "https://www.youtube.com/watch?v=zxjfxrXfROc",
  },
  {
    id: 2,
    name: "Jae",
    post: "founder & managing principal",
    img: "/assets/clientImg/img2.png",
    video: "https://vimeo.com/949215348",
  },
  {
    id: 3,
    name: "Arianna",
    post: "Founder & ceo",
    img: "/assets/clientImg/img3.svg",
    video: "https://www.youtube.com/watch?v=zxjfxrXfROc",
  },
];

export default function FractionalTalent({
  textColor,
  bgColor,
  title,
  heading,
  subheading,
  role,
}) {
  const targetRef = useRef(null);
  const horizontalScrollRef = useRef(null); 
  const containerRef = useRef(null); 
    const clientScrollRef = useRef(null); 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [visibleCards, setVisibleCards] = useState(talent);
  const [isMobileOnly, setIsMobileOnly] = useState(false);
  
  const [maxScrollX, setMaxScrollX] = useState(-1000); 
  const [dynamicSectionHeight, setDynamicSectionHeight] = useState("200vh");
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const manualXProgress = useMotionValue(0);
  const smoothManualX = useSpring(manualXProgress, { stiffness: 60, damping: 15 });
  const [isManualOverride, setIsManualOverride] = useState(false);

  useEffect(() => {
    const calculateScrollValues = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setVisibleCards(talent?.slice(0, -1));
        setIsMobileOnly(true);
        setDynamicSectionHeight("auto");
        setMaxScrollX(0);
      } else {
        setIsMobileOnly(false);
        setVisibleCards(talent);
        
        if (containerRef.current) {
          const scrollWidth = containerRef.current.scrollWidth; 
          const clientWidth = containerRef.current.clientWidth; 
          
          const scrollDistance = scrollWidth - clientWidth;
          
          if (scrollDistance > 0) {
            setMaxScrollX(-scrollDistance); 
            // यहाँ 400px हमारी ट्रैक हाइट (sticky height) को बैलेंस करता है
            setDynamicSectionHeight(`${400 + scrollDistance}px`);
          }
        }
      }
    };

    const timer = setTimeout(() => {
      calculateScrollValues();
    }, 50);

    const observer = new ResizeObserver(() => {
      calculateScrollValues();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    window.addEventListener("resize", calculateScrollValues);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", calculateScrollValues);
    };
  }, [bgColor, visibleCards]);

  const scrollTransform = useTransform(scrollYProgress, [0, 1], [0, maxScrollX], { clamp: true });
  const manualTransform = useTransform(smoothManualX, [0, 1], [0, maxScrollX], { clamp: true });
  
  const dynamicX = isManualOverride ? manualTransform : scrollTransform;

  const checkScrollPosition = () => {
    if (horizontalScrollRef.current && isMobileOnly) {
      const { scrollLeft, scrollWidth, clientWidth } = horizontalScrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    if (!isMobileOnly) {
      return scrollYProgress.on("change", (latest) => {
        if (!isManualOverride) {
          setCanScrollLeft(latest > 0.01);
          setCanScrollRight(latest < 0.99);
        }
      });
    }
  }, [scrollYProgress, isMobileOnly, isManualOverride]);

  useEffect(() => {
    const resetOverride = () => {
      if (isManualOverride) {
        setIsManualOverride(false);
        manualXProgress.set(scrollYProgress.get());
      }
    };
    window.addEventListener("wheel", resetOverride, { passive: true });
    window.addEventListener("touchmove", resetOverride, { passive: true });
    return () => {
      window.removeEventListener("wheel", resetOverride);
      window.removeEventListener("touchmove", resetOverride);
    };
  }, [isManualOverride, scrollYProgress, manualXProgress]);

  const scrollHorizontal = (direction) => {
    if (isMobileOnly) {
      if (horizontalScrollRef.current) {
        const { scrollLeft, clientWidth } = horizontalScrollRef.current;
        const scrollAmount = clientWidth * 0.75; 
        horizontalScrollRef.current.scrollTo({
          left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
        setTimeout(checkScrollPosition, 300);
      }
    } else {
      setIsManualOverride(true);
      
      if (manualXProgress.get() === 0 && scrollYProgress.get() !== 0) {
        manualXProgress.set(scrollYProgress.get());
      }

      const currentProgress = manualXProgress.get();
      const totalCards = bgColor === "#1c143d" ? comptition.length : visibleCards.length;
      const step = 1 / (totalCards - 1); 
      
      let nextProgress = direction === "left" ? currentProgress - step : currentProgress + step;
      nextProgress = Math.max(0, Math.min(1, nextProgress));
      
      manualXProgress.set(nextProgress);
      setCanScrollLeft(nextProgress > 0.01);
      setCanScrollRight(nextProgress < 0.99);
    }
  };

  return (
    <>
      {/* --- Upper Header Section --- */}
      <section className="w-full text-white py-0 px-10 md:px-20 lg:px-32 pt-10 md:pt-20 1xl:pt-30">
        <div className="w-full mx-auto flex flex-col justify-between gap-10">
          <div className="flex-1">
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
              <div className="mb-8">
                <span
                  className="px-4 py-1.5 rounded-full text-[8px] md:text-[12px] font-jb-mono font-semibold uppercase"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  {title}
                </span>
              </div>
            </AnimatedContent>

            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1} baseRotation={0}>
              <h2 className="text-[35px] md:text-[65px] lg:text-[72px] font-mulish leading-[1] tracking-tight mb-12">
                {heading}
              </h2>
              <div className="grid md:flex justify-between gap-5 items-center">
                <div>
                  <p className="max-w-xl text-white text-xs md:text-sm lg:text-base font-mulish leading-relaxed">
                    {subheading}
                  </p>
                </div>
                <div className={`${role !== "client" ? "block" : "hidden"}`}>
                  <div className="flex gap-4">
                    <button 
                      disabled={!canScrollLeft}
                      onClick={() => scrollHorizontal("left")}
                      className="w-8 md:w-13 h-8 md:h-13 1xl:h-15 1xl:w-15 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-25 disabled:pointer-events-none"
                    >
                      <FiChevronLeft className="md:w-8 md:h-8 1xl:w-10 1xl:h-10" />
                    </button>
                    <button 
                      disabled={!canScrollRight}
                      onClick={() => scrollHorizontal("right")}
                      className="w-8 md:w-13 h-8 md:h-13  1xl:h-15 1xl:w-15 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-25 disabled:pointer-events-none"
                    >
                      <FiChevronRight className="md:w-8 md:h-8 1xl:w-10 1xl:h-10" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- Horizontal Scroll Section --- */}
      <section className="relative">
        <div
          ref={targetRef}
          style={{ height: dynamicSectionHeight }}
          className={`relative w-full ${role === "client" ? "hidden" : "block"}`}
        >
          {/* --- FIX FIXED: md:h-screen को हटाकर md:h-[380px] किया ताकि गैप खत्म हो और md:top-[10%] से स्क्रीन के ऊपरी हिस्से में स्टिकी रहे --- */}
          <div 
            ref={horizontalScrollRef}
            onScroll={checkScrollPosition}
            className="static md:sticky md:top-[20%] h-auto md:h-[600px] w-full flex flex-col justify-start items-start overflow-x-auto md:overflow-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory md:snap-none pt-4"
          >
            <motion.div
              ref={containerRef}
              style={isMobileOnly ? {} : { x: dynamicX }}
              className="flex w-max gap-5 md:gap-7 lg:gap-10 px-10  md:px-20 lg:px-32"
            >
               {visibleCards?.map((item, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[280px] h-[400px] md:w-[420px] md:h-[450px] lg:w-[450px] lg:h-[450px] 1x:h-[500px] 2xl:h-[600px] overflow-hidden rounded-xl bg-[#141414] p-5 lg:p-8 2xl:p-10 shadow-2xl snap-center"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      width={500}
                      height={500}
                      src={item.img}
                      className="h-full w-full object-cover opacity-20 grayscale"
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:4px_4px] opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <div className="mb-auto">
                      <span
                        className="rounded-full px-3 py-1 text-[8px] md:text-[10px] 2xl:text-xs font-jb-mono uppercase tracking-wider"
                        style={{ backgroundColor: bgColor, color: textColor }}
                      >
                        {item.title}
                      </span>
                    </div>

                    <h2 className="mb-1 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-mulish text-white">
                      {item.name}
                    </h2>

                    <p className="mb-2 md:mb-5 lg:mb-8 text-xs md:text-base lg:text-lg font-mulish md:leading-relaxed text-white">
                      {item.des}
                    </p>

                    <button
                      className="group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-base lg:text-lg 2xl:text-xl rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95"
                      style={{ backgroundColor: textColor }}
                    >
                      Learn More
                      <FiChevronRight className="h-3 w-3 md:h-5 md:w-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div> 
        </div> 
      </section>
      {/* client section */}
<section className={`${role === "client" ? "block" : "hidden"} w-full`}>
        <div className="pb-10 md:pb-30 ">
          <div 
            ref={clientScrollRef}
            className="flex gap-5 md:gap-7 lg:gap-10 px-10 md:px-20 lg:px-32 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {clientInfo?.map((curE, i) => (
              <div
                key={curE.id}
                className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[600px] aspect-[9/16] bg-[#111] rounded-[2.5rem] overflow-hidden group snap-center"
              >
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <ReactPlayer
                    url={curE.video}
                 
                    loop={true}
                    width="100%"
                    height="100%"
                    playsinline
                    className="absolute top-0 left-0"
                 
                  
                  />
                </div>
                <div className="absolute inset-0 z-10 cursor-pointer bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

                <div className="absolute top-4 group-hover:hidden transition duration-500 left-4 right-4 bg-[#021d2e]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 z-20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-mulish font-medium text-white mb-0.5">
                        {curE.name}
                      </h2>
                      <p className="text-[9px] sm:text-[10px] font-jb-mono font-bold text-[#009ded] uppercase tracking-[0.2em] mb-4">
                        {curE.post}
                      </p>
                    </div>
                    <div className="p-1.5 border border-white/10 rounded-lg text-white/50">
                      <HiOutlineChevronRight size={18} />
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <Image
                      width={500}
                      height={500}
                      src={curE.img}
                      alt="log"
                      className="w-30 h-15 "
                    />
                  </div>
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </>
  );
}