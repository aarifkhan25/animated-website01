"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  { name: "160+", title: "Countries", delay: 0.3 },
  { name: "4.6/5", title: "Rating on G2", delay: 0.7 },
  { name: "1st", title: "Product Hunt Approved", delay: 1.1, img: '/assets/product1.svg' },
];
const comptition = [
  { img: "/assets/comperision/img1.png", name: "Upwork" },
  { img: "/assets/comperision/img2.png", name: "Toptal" },
  { img: "/assets/comperision/img3.jpg", name: "Marketerhire" },
  { img: "/assets/comperision/img4.jpg", name: "Braintrust" },
  { img: "/assets/comperision/img5.png", name: "Fivver" },
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
                <div>
                  <div className={`${role === "work" ? "hidden" : "block"} flex gap-4`}>
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
          className={`relative w-full ${role === "work" ? "hidden" : "block"}`}
        >
          <div 
            ref={horizontalScrollRef}
            onScroll={checkScrollPosition}
            className={`static md:sticky md:top-[20%] h-auto ${textColor === "#ff0056" ?"md:h-[230px] lg:h-[280px] 1xl:h-[300px] 2xl:h-[350px]": "md:h-[400px]"}     w-full flex flex-col justify-start items-start overflow-x-auto md:overflow-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory md:snap-none pt-4`}
          >
            <motion.div
              ref={containerRef}
              style={isMobileOnly ? {} : { x: dynamicX }}
              className="flex w-max gap-5 md:gap-7 lg:gap-10 px-10 pb-10 md:px-20 lg:px-32"
            >
              {bgColor !== "#1c143d"
                ? visibleCards?.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[350px] md:h-[200px] lg:w-[450px] lg:h-[250px] 1xl:h-[270px] 2xl:h-[320px]  overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl snap-center"
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
                : comptition?.map((curE, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-[240px] h-[180px] md:w-[330px] md:h-[200px] lg:w-[430px] lg:h-[250px] 1xl:h-[270px] 2xl:h-[320px] overflow-hidden rounded-xl bg-[#141414] p-3 lg:p-5 font-sans shadow-2xl snap-center"
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
                          className="group flex w-fit items-center gap-1 md:gap-2 text-[10px] md:text-sm lg:text-base 2xl:text-xl rounded-full px-2 md:px-3 lg:px-5 py-1 md:py-1.5 lg:py-2 font-mulish font-bold text-black transition-transform hover:scale-105 active:scale-95"
                          style={{ backgroundColor: textColor }}
                        >
                          Compare
                          <FiChevronRight className="h-3 w-3 md:h-5 md:w-5 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  ))}
            </motion.div>
          </div> 
        </div> 
      </section>
  {textColor === "#ff0056" ? (
            <div className="relative z-20 pb-10 px-5 md:px-20 lg:px-32 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 justify-center items-stretch">
              {data?.map((curE, i) => {
                return (
                  <FadeContent
                    blur={true}
                    duration={1000}
                    delay={curE.delay}
                    easing="ease-out"
                    initialOpacity={0}
                    key={i}
                    className="h-full flex"
                  >
                    <div className="w-full flex-1 flex flex-col justify-center rounded-xl bg-[#141414] p-4 md:p-5 lg:p-6 shadow-2xl border border-white/5">
                      <div className="mb-2 md:mb-3 flex items-center justify-start">
                        {curE.delay !== 1.5 ? (
                          <h2 className="font-jb-mono text-lg md:text-2xl lg:text-5xl font-bold text-white">
                            {curE.name}
                          </h2>
                        ) : (
                          <Image
                            src={curE.img}
                            width={500}
                            height={500}
                            alt="Product"
                            loading="lazy"
                            className="w-[70px] md:w-[130px] lg:w-[180px] object-contain"
                          />
                        )}
                      </div>
                      <p className="text-[10px] md:text-sm lg:text-lg font-mulish text-gray-300 leading-tight">
                        {curE.title}
                      </p>
                    </div>
                  </FadeContent>
                );
              })}
            </div>
          ) : null}

      {/* --- Grid Roles Section --- */}
      <div className="px-10 lg:px-32">
        <div
          className={`${role === "work" ? "block" : "hidden"} grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 lg:gap-10 w-full mx-auto`}
        >
          {sections.map((section, index) => (
            <FadeContent
              blur={true}
              duration={1000}
              delay={0.3}
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
                    </li>
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