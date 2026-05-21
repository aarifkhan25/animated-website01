"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const talent = [
  {
    title: " Fractional designers",
    title1: "step 1",
    name: "Design",
    des: "The graphic, UI/UX, and content designers you need to differentiate your company",
  },
  {
    title: " Fractional ops props",
    title1: "step 2",
    name: "Oprations",
    des: "Project + Product Managers to keep your team running smoothly",
  },
  {
    title: " Fractional devs",
    title1: "step 3",
    name: "Engineering",
    des: "Front-End, Back-End, and Full-Stack devs that know your tech stack",
  },
  {
    title: " Fractional Marketers",
    title1: "step 4",
    name: "Marketing",
    des: "From GTM Strategy, to Growth Management, to Social Media Management",
  },
];

const sections = [
  {
    title: "Top fractional design roles",
    roles: [
      "UX Designer",
      "Brand Designer",
      "Product Designer",
      "UI Designer",
      "Graphic Designer",
      "Graphic Designer",
      "Web Designer",
    ],
  },
  {
    title: "Top fractional marketing roles",
    roles: [
      "Marketing Writer",
      "Marketer",
      "Email Marketer",
      "Growth Marketer",
      "Product Marketer",
    ],
  },
  {
    title: "Top fractional operations roles",
    roles: ["Product Analyst", "Product Manager"],
  },
  {
    title: "Top fractional engineering roles",
    roles: ["Web Developer"],
  },
];

const data = [
  { name: "160+", title: "Countries", delay: 0.5 },
  { name: "4.6/5", title: "Rating on G2", delay: 1 },
  { name: "1st", title: "Product Hunt Approved", delay: 1.5, img: '/assets/product1.svg' },
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
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [visibleCards, setVisibleCards] = useState(talent);
  const [isMobileOnly, setIsMobileOnly] = useState(false);
  const [transformXValue, setTransformXValue] = useState("-60%"); 
  
  // Smart Button Disable States
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        // --- CALIBRATED FOR TABLET: Keeps Framer Motion active but fixes flying bounds ---
        setVisibleCards(talent);
        setIsMobileOnly(false);
        setTransformXValue("-48%"); 
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

  // --- LOGIC: Mobile Native Swiping Scroll Tracker ---
  const checkScrollPosition = () => {
    if (horizontalScrollRef.current && isMobileOnly) {
      const { scrollLeft, scrollWidth, clientWidth } = horizontalScrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  // --- LOGIC: Desktop & Tablet Wheel/Progress Tracker ---
  useEffect(() => {
    if (!isMobileOnly) {
      return scrollYProgress.on("change", (latest) => {
        setCanScrollLeft(latest > 0.02);
        setCanScrollRight(latest < 0.98);
      });
    }
  }, [scrollYProgress, isMobileOnly]);

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

  // Sync state initially for Mobile view bounds
  useEffect(() => {
    if (isMobileOnly) {
      checkScrollPosition();
    }
  }, [isMobileOnly]);

  const scrollHorizontal = (direction) => {
    if (isMobileOnly) {
      if (horizontalScrollRef.current) {
        const { scrollLeft, clientWidth } = horizontalScrollRef.current;
        const scrollAmount = clientWidth * 0.75; 
        horizontalScrollRef.current.scrollTo({
          left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
        // Delay checks to ensure coordinates settled down after scroll completion
        setTimeout(checkScrollPosition, 300);
      }
    } else {
      setIsManualOverride(true);
      const currentProgress = manualXProgress.get();
      // Step size optimization for cleaner skips across different viewport breaks
      const step = window.innerWidth < 1025 ? 0.30 : 0.25;
      let nextProgress = direction === "left" ? currentProgress - step : currentProgress + step;
      nextProgress = Math.max(0, Math.min(1, nextProgress));
      manualXProgress.set(nextProgress);

      setCanScrollLeft(nextProgress > 0);
      setCanScrollRight(nextProgress < 1);

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

  const comptition = [
    { img: "/assets/comperision/img1.png", name: "Upwork" },
    { img: "/assets/comperision/img2.png", name: "Toptal" },
    { img: "/assets/comperision/img3.jpg", name: "Marketerhire" },
    { img: "/assets/comperision/img4.jpg", name: "Braintrust" },
    { img: "/assets/comperision/img5.png", name: "Fivver" },
  ];

  return (
    <>
      <section className="w-full text-white py-0 px-10 md:px-20 lg:px-32">
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

            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              blurStrength={1}
              baseRotation={0}
            >
              <h2 className="text-3xl md:text-[65px] lg:text-[72px] font-mulish leading-[1] tracking-tight mb-12">
                {heading}
              </h2>
              <div className="grid md:flex justify-between gap-5 items-center">
                <div>
                  <p className="max-w-xl text-white text-xs md:text-sm lg:text-base font-mulish leading-relaxed">
                    {subheading}
                  </p>
                </div>
                <div>
                  <div className="flex gap-4">
                    {/* --- IMPLEMENTED: Smart disabled and unified state toggling --- */}
                    <button 
                      disabled={!canScrollLeft}
                      onClick={() => scrollHorizontal("left")}
                      className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-25 disabled:pointer-events-none"
                    >
                      <FiChevronLeft className="md:w-8 md:h-8" />
                    </button>
                    <button 
                      disabled={!canScrollRight}
                      onClick={() => scrollHorizontal("right")}
                      className="w-8 md:w-13 h-8 md:h-13 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all z-30 disabled:opacity-25 disabled:pointer-events-none"
                    >
                      <FiChevronRight className="md:w-8 md:h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          ref={targetRef}
          className={`relative ${
            textColor === "#ff0044" 
              ? "h-auto md:h-[180vh] lg:h-[160vh]" 
              : "h-auto md:h-[230vh] lg:h-[200vh]"
          } ${role === "work" ? "hidden" : "block"} `}
        >
          {/* --- IMPLEMENTED: Added native onScroll layout bind and container lock conditions --- */}
          <div 
            ref={horizontalScrollRef}
            onScroll={checkScrollPosition}
            className="static md:sticky md:top-0 h-auto md:h-[80vh] w-full flex flex-col justify-start overflow-x-auto md:overflow-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory md:snap-none"
          >
            <motion.div
              style={isMobileOnly ? {} : { x: dynamicX }}
              className="flex gap-5 md:gap-7 lg:gap-10 px-5 pb-10 md:px-20 md:pb-12 lg:px-32 lg:pb-16"
            >
              {bgColor !== "#1c143d"
                ? visibleCards?.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[350px] md:h-[200px] lg:w-[450px] lg:h-[250px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl snap-center"
                    >
                      <div className="grid h-full gap-5 lg:gap-10 justify-between">
                        <div>
                          <span
                            className="text-[8px] md:text-xs font-jb-mono font-semibold uppercase tracking-wider"
                            style={{ color: textColor }}
                          >
                            {textColor === "#009ded" ? item.title : item.title1}
                          </span>
                        </div>

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-mulish font-bold text-white">
                          {item.name}
                        </h2>

                        <p className="flex text-xs md:text-sm lg:text-base font-mulish font-medium text-white">
                          {item.des}
                        </p>
                      </div>
                    </div>
                  ))
                : comptition?.map((curE, i) => {
                    return (
                      <div
                        key={i}
                        className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[330px] md:h-[200px] lg:w-[430px] lg:h-[250px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl snap-center"
                      >
                        <div className="grid h-full gap-5 lg:gap-10 justify-between">
                          <div>
                            <img
                              alt={curE.name}
                              src={curE.img}
                              className="w-11 h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 rounded-xl"
                            />
                          </div>

                          <h2 className="text-lg md:text-2xl lg:text-3xl font-mulish text-white">
                            Pangeya vs {curE.name}
                          </h2>

                          <button
                            className="group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-sm lg:text-base rounded-full px-2 md:px-3 lg:px-5 py-1 md:py-1.5 lg:py-2 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95"
                            style={{ backgroundColor: textColor }}
                          >
                            Compare
                            <FiChevronRight className="h-3 w-3 md:h-5 md:w-5 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </motion.div>
          </div> 
        </div> 
      </section>

      <div className={`px-10 lg:px-32`}>
        <div
          className={`${role === "work" ? "block" : "hidden"} grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 w-full mx-auto`}
        >
          {sections.map((section, index) => (
            <FadeContent
              blur={true}
              duration={1000}
              delay={0.5}
              easing="ease-out"
              initialOpacity={0}
              key={index}
            >
              <div className="bg-[#141414] rounded-xl p-8 lg:p-12 border border-white/5 flex flex-col h-full">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-mulish font-semibold leading-[1.2] mb-3 md:mb-5 lg:mb-10 max-w-[90%]">
                  {section.title}
                </h2>
                <ul className="space-y-1 md:space-y-2 lg:space-y-4">
                  {section.roles.map((role, idx) => (
                    <li
                      key={idx}
                      className="text-[#f5f5f5] font-mulish text-xs md:text-base lg:text-lg font-medium opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      {role}
                    </td>
                  ))}
                </ul>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </>
  );
}