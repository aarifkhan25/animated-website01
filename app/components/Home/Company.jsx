
"use client"
import ScrollReveal from '@/components/ScrollReveal.jsx';
import Image from 'next/image';
export default function Company() {
    const companies = [
    { img: "/assets/comp/logo1.svg",op:"1" },
    { img: "/assets/comp/logo2.png" },
    { img: "/assets/comp/logo3.svg",op:"1" },
    { img: "/assets/comp/logo4.svg",op:"1" },
    { img: "/assets/comp/logo5.avif" },
    { img: "/assets/comp/logo6.svg",op:"1" },
    { img: "/assets/comp/logo7.svg",op:"1" },
    { img: "/assets/comp/logo8.avif" },
    { img: "/assets/comp/logo9.svg",op:"1" },
  ];
  return (
    <section className="grid items-center justify-center w-full  text-white px-10 py-10 lg:py-20 md:px-16 -mt-5  overflow-hidden">
           <div>
             <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={1}   baseRotation={0}>
               <h1 className="text-center text-white text-sm md:text-lg font-jb-mono  uppercase ">
                 Trusted by leading companies
               </h1>
   
               <div className=" grid grid-cols-3 gap-3 mt-5">
                 {companies?.map((comp, i) => {
                   return (
                     <div
                       key={i}
                       className="flex items-center justify-center  p-3 md:p-4  hover:bg-[#333333] rounded-lg transition-colors duration-300"
                     >
                       <Image
                         src={comp.img}
                         width={500}
                         height={500}
                         alt="company logo"
                         loading="lazy"
                         className={`w-full h-10 object-contain ${comp.op === "1" ? "opacity-10" : "opacity-70"}   hover:opacity-100`}
                       />
                     </div>
                   );
                 })}
               </div>
             </ScrollReveal>
           </div>
         </section>
  )
}
