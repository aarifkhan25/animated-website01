"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ReactPlayer from "react-player";

import { IoPlay, IoPause, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiArrowRightLine } from "react-icons/ri";
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
    name: "Anam",
    post: "co-founder & co-ceo",
    img: "/assets/clientImg/img.svg",
    video: "https://www.youtube.com/watch?v=zxjfxrXfROc",
  },
  {
    name: "Jae",
    post: "founder & managing principal",
    img: "/assets/clientImg/img2.png",
    video: "https://vimeo.com/949215348",
  },
  {
    name: "Arianna",
    post: "Founder & ceo",
    img: "/assets/clientImg/img3.svg",
    video: "https://www.youtube.com/watch?v=zxjfxrXfROc",
  },
];

export default function Talent({
  textColor,
  bgColor,
  title,
  heading,
  subheading,
  role,
}) {
  
 const targetRef = useRef(null);
  const horizontalScrollRef = useRef(null); 
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [visibleCards, setVisibleCards] = useState(talent);
  const [isMobileOnly, setIsMobileOnly] = useState(false);
  const [transformXValue, setTransformXValue] = useState("-60%"); 
  
  // Custom motion value for absolute sync override on button click
  const manualXProgress = useMotionValue(0);
  const smoothManualX = useSpring(manualXProgress, { stiffness: 60, damping: 15 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(talent?.slice(0, -1));
        setIsMobileOnly(true);
      } else if (width >= 768 && width < 1025) {
        setVisibleCards(talent);
        setIsMobileOnly(false);
        setTransformXValue("-110%"); 
      } else {
        setVisibleCards(talent);
        setIsMobileOnly(false);
        setTransformXValue("-60%"); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync scrollYProgress or manual click progress into the layout transformation
  const scrollTransform = useTransform(scrollYProgress, [0, 1], ["0%", transformXValue]);
  const manualTransform = useTransform(smoothManualX, [0, 1], ["0%", transformXValue]);
  
  // Dynamic handler that switches source of truth automatically
  const [isManualOverride, setIsManualOverride] = useState(false);
  const dynamicX = isManualOverride ? manualTransform : scrollTransform;

  // Listen to wheel/scroll resets to give control back to standard scrolling
  useEffect(() => {
    const resetOverride = () => setIsManualOverride(false);
    window.addEventListener("wheel", resetOverride);
    window.addEventListener("touchmove", resetOverride);
    return () => {
      window.removeEventListener("wheel", resetOverride);
      window.removeEventListener("touchmove", resetOverride);
    };
  }, []);

  const scrollHorizontal = (direction) => {
    if (isMobileOnly) {
      if (horizontalScrollRef.current) {
        const { scrollLeft, clientWidth } = horizontalScrollRef.current;
        const scrollAmount = clientWidth * 0.75; 
        horizontalScrollRef.current.scrollTo({
          left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      setIsManualOverride(true);
      const currentProgress = manualXProgress.get();
      // Increments motion path frame calculations by 25% steps per click
      let nextProgress = direction === "left" ? currentProgress - 0.25 : currentProgress + 0.25;
      nextProgress = Math.max(0, Math.min(1, nextProgress));
      manualXProgress.set(nextProgress);

      // Also scroll viewport safely to align track position
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const totalScrollableHeight = targetRef.current.offsetHeight - window.innerHeight;
        const targetScrollTop = window.scrollY + rect.top + (nextProgress * totalScrollableHeight);
        
        window.scrollTo({
          top: targetScrollTop,
          behavior: "smooth"
        });
      }
    }
  };


  // player
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };



  





  return (
    <>
      {/* --- Upper Header Section --- */}
      <section className="w-full text-white pt-10 lg:pt-20 px-10 md:px-20 lg:px-32 xl:px-38">
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
                  className="px-4 py-1.5 rounded-full text-[10px] md:text-xs font-jb-mono font-bold uppercase"
                  style={{ backgroundColor: bgColor, color: textColor }}
                >
                  {title}
                </span>
              </div>
            </AnimatedContent>

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              blurStrength={1}
              baseRotation={0}
            >
              <h2 className="text-[50px] md:text-[65px] lg:text-[72px] font-mulish leading-[1] tracking-tight mb-12">
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
                      onClick={() => scrollHorizontal("left")}
                      className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30"
                    >
                      <FiChevronLeft className="md:w-8 md:h-8" />
                    </button>
                    <button 
                      onClick={() => scrollHorizontal("right")}
                      className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30"
                    >
                      <FiChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- FIXED SECTION: Space issue fixed here --- */}
   <section className="relative">
        <div
          ref={targetRef}
          className={`relative ${
            textColor === "#ff0044" 
              ? "h-auto md:h-[180vh] lg:h-[160vh]" 
              : "h-auto md:h-[230vh] lg:h-[200vh]"
          } ${role === "client" ? "hidden" : "block"}  `}
        >
          <div 
            
            className="static md:sticky md:top-0 h-auto md:h-[80vh] w-full flex flex-col justify-start  overflow-x-auto md:overflow-hidden scrollbar-hide"
          >
            <motion.div
            ref={horizontalScrollRef}
              style={isMobileOnly ? {} : { x: dynamicX }}
              className="flex gap-5 md:gap-7 lg:gap-10 px-5  md:px-20  lg:px-32 "
            >
            {visibleCards?.map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[280px] h-[400px] md:w-[420px] md:h-[450px] lg:w-[450px] lg:h-[450px] 2xl:h-[600px] overflow-hidden rounded-xl bg-[#141414] p-5 lg:p-8 2xl:p-10 shadow-2xl snap-center md:snap-none"
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

      {/* --- Client Section --- */}
      <section className={`${role === "client" ? "block" : "hidden"} w-full`}>
        <div className="pb-10 md:pb-30 ">
          <div className="flex gap-5 md:gap-7 lg:gap-10 px-5 md:px-20 lg:px- 1xl:px-32  overflow-x-auto  scrollbar-style scrollbar-hide">
            {clientInfo?.map((curE, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[600px] aspect-[9/16] bg-[#111] rounded-[2.5rem] overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <ReactPlayer
                    url={curE.video}
                    playing={isPlaying}
                    muted={isMuted}
                    loop={true}
                    width="100%"
                    height="100%"
                    playsinline
                    className="absolute top-0 left-0"
                    onProgress={(state) => setProgress(state.played * 100)}
                    config={{
                      youtube: {
                        playerVars: {
                          controls: 0,
                          showinfo: 0,
                          modestbranding: 1,
                          rel: 0,
                          iv_load_policy: 3,
                        },
                      },
                    }}
                  />
                </div>
                <div className="absolute inset-0 z-10 cursor-pointer bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

                <div className="absolute top-4 group-hover:hidden transition duration-500  left-4 right-4 bg-[#021d2e]/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 z-20">
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

                <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlay}
                      className="text-white text-xl sm:text-2xl hover:scale-110 transition-transform"
                    >
                      {isPlaying ? <IoPause /> : <IoPlay />}
                    </button>

                    <div className="flex-grow h-1 bg-white/20 rounded-full relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <span className="text-[10px] sm:text-xs font-medium text-white tabular-nums">
                      00:
                      {Math.floor(videoRef.current?.currentTime || 0)
                        .toString()
                        .padStart(2, "0")}
                    </span>

                    <button
                      onClick={toggleMute}
                      className="text-white text-lg sm:text-xl hover:opacity-80 transition-opacity"
                    >
                      {isMuted ? <IoVolumeMute /> : <IoVolumeMedium />}
                    </button>
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