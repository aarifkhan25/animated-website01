
"use client"
import Image from "next/image";
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
          move:'-170px'
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
          move:'-100px'
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
          move:'-10px'
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
          move:'-100px'
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
          move:'-170px'
        },
      ];
  return (
   <section className=" bg-[url(/assets/talentbg.png)] gradient-overlay bg-cover bg-no-repeat  w-full  grid items-center   justify-center gap-0 ">
    <div className="flex justify-center"> 
       <Image
                  src="/assets/Y.svg"
                  width={500}
                  height={500}
                  alt="Y"
                  loading="lazy"
                  className="w-[150px] md:w-[220px]  "
                /></div>
        <div className="flex   gap-10 justify-center mb-5 md:mb-15 ">
          {items?.map((item, i) => {
            return (
              <div
              key={i}
            
    
                style={{
                  borderColor: item.borderColor,
                  backgroundColor: item.borderColor,
                  '--move-y': item.move // Har card ki apni alag movement
                }}
                className=" card-scroll-animation relative group w-[200px] h-[300px] md:w-[280px] md:h-[380px] rounded-[14px] border-[15px] overflow-hidden shadow-2xl  transition-all duration-300 hover:border-[5px]"
                
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.borderColorHover;
                  e.currentTarget.style.backgroundColor = item.borderColorHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = item.borderColor;
                  e.currentTarget.style.backgroundColor = item.borderColor;
                }}
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
                  className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-200"
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
              </div>
            );
          })}
        </div>
      </section>
  )
}
