"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const items = [
    {
      img: "/assets/img4.avif",
      title: "Mark ",
      subtitle: "Developer",
      subtitleBgColor: "#002611",
      subtitleColor: "#00b164",
      handle: "markdev",
      Color: "#349760",
      borderColor: "#002611",
      borderColorHover: "#00b164",
      move: -130, // Number form me rakha hai framer motion ke liye
    },
    {
      img: "/assets/img1.avif",
      title: "Henry ",
      subtitle: "Back End Dev",
      subtitleBgColor: "#002036",
      subtitleColor: "#008fd8",
      handle: "Meta",
      Color: "#a5d4f0",
      borderColor: "#002036",
      borderColorHover: "#008fd8",
      move: -70,
    },
    {
      img: "/assets/img2.avif",
      title: "Mery ",
      subtitle: "UI Designer",
      subtitleBgColor: "#40000b",
      subtitleColor: "#de0042",
      handle: "Airbnb",
      Color: "#edaaaf",
      borderColor: "#40000b",
      borderColorHover: "#de0042",
      move: -10,
    },
    {
      img: "/assets/img3.avif",
      title: "Amanda",
      subtitle: "Growth Mark",
      subtitleBgColor: "#1c143d",
      subtitleColor: "#6c53c2",
      handle: "Duolingo",
      Color: "#c5c1f0",
      borderColor: "#1c143d",
      borderColorHover: "#6c53c2",
      move: -70,
    },
    {
      img: "/assets/img5.avif",
      title: "Harry",
      subtitle: "Project Man",
      subtitleBgColor: "#3a002b",
      subtitleColor: "#f800c2",
      handle: "Random",
      Color: "#f7aae6",
      borderColor: "#3a002b",
      borderColorHover: "#f800c2",
      move: -130,
    },
  ];

  return (
    <section
      className="relative w-full grid items-center justify-center  overflow-hidden pt-15
      before:content-[''] 
      before:absolute 
      before:inset-0 
      before:bg-[url(/assets/talentbg.png)] 
      before:bg-cover 
      before:bg-no-repeat 
      before:bg-center 
      before:opacity-40          
      before:-z-10"
    >
      <div className="flex justify-center mb-3">
        <Image
          src="/assets/Y.svg"
          width={500}
          height={500}
          alt="Y"
          priority
          className="w-[150px] md:w-[220px]"
        />
      </div>

      <div className="flex flex-nowrap gap-3 md:gap-10 justify-center mb-5 md:mb-10 px-6">
        {items?.map((item, i) => {
          return (
            <motion.div
              key={i}
              // 1. Initial State: Jab card screen ke bahar/edge par ho (Low opacity & scale)
              initial={{ 
                opacity: 0.3, 
                scale: 0.9, 
                y: 0,
                borderColor: item.borderColor,
                backgroundColor: item.borderColor
              }}
              // 2. Center Animation State: Jab card center zone me aaye
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: item.move 
              }}
              // 3. Hover State: Mouse le jaane par border color hover change hoga
              whileHover={{
                borderColor: item.borderColorHover,
                backgroundColor: item.borderColorHover,
                transition: { duration: 0.2 }
              }}
              // 4. Viewport Settings: Isse animation tabhi chalega jab card center me aane lagega
              viewport={{ 
                once: false,       // false matlab scroll up/down karne par baar-baar chalega
                amount: 0.3,       // Jab card ka 30% hissa screen ke active view me ho
                margin: "-20% 0px -20% 0px" // Top/Bottom se 20% area ko margin dekar center target kiya hai
              }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 15,
                delay: i * 0.05 // Ek ke baad ek card smooth uthega (Stagger effect)
              }}
              className="relative group w-[180px] h-[260px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[340px] lg:w-[280px] lg:h-[380px] rounded-[14px] border-[10px] hover:border-[5px] md:border-[15px] md:hover:border-[8px] overflow-hidden shadow-2xl hover:opacity-100 cursor-pointer"
            >
              {/* Top Badge */}
              <div className="absolute group-hover:top-2 top-0 left-1/2 -translate-x-1/2 z-20 transition-all duration-300">
                <div
                  style={{
                    backgroundColor: item.subtitleBgColor,
                    color: item.subtitleColor,
                  }}
                  className="text-[8px] md:text-[10px] font-black font-jb-mono tracking-widest uppercase px-2 py-[2px] rounded-[4px]"
                >
                  {item.subtitle}
                </div>
              </div>

              {/* Main Image */}
              <Image
                src={item.img}
                width={500}
                height={500}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
              />

              {/* Gradient Overlay Footer */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[100px] flex flex-col justify-end p-3 md:p-6"
                style={{
                  background: `linear-gradient(to top, ${item.borderColor} 0%, transparent 100%)`,
                }}
              >
                <h3 className="text-white text-xl md:text-3xl font-mulish md:mb-1">
                  {item.title}
                </h3>
                <p className="text-white font-mulish text-base md:text-lg">
                  <span
                    style={{ color: item.Color }}
                    className="font-medium text-sm md:text-base"
                  >
                    Prev. @
                  </span>{" "}
                  {item.handle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}