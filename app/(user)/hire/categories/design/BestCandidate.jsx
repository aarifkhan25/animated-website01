import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import Image from "next/image";
import Link from 'next/link';
export default function BestCandidate({textColor}) {
  return (
    <section className="w-full bg-[#141414] px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80  py-10 lg:py-20 1xl:py-30 ">
{/* div 1 */}
    <div className="w-full grid md:flex justify-between items-center gap-5 md:gap-10 lg:gap-15">
        <div className="flex flex-col justify-start gap-5 lg:gap-10">
<div className=""> <span style={{color:textColor}} className=" text-xs md:text-sm lg:text-base font-jb-mono uppercase block mb-3 md:mb-5">
 hiring without limits
          </span>
      <h1 className="text-base md:text-3xl lg:text-[48px]   font-semibold  font-mulish text-white ">
      The best candidates, selected by AI
          </h1>
</div>
<div className="md:pl-5 lg:pl-10">
    <p className="text-white text-[10px]  md:text-xs lg:text-base font-mulish mb-3 md:mb-5">
Sorting through resumes and profiles takes hours of precious time. Pangea cuts that down to seconds by selecting the best applicants with our proprietary AI matching algorithm, so you can focus on getting to work.      </p>
   {/* 🟢 'w-fit' और 'inline-flex' क्लास जोड़ी गई है */}
<Link 
  href="/starthiring" 
  style={{backgroundColor:textColor}} 
  className="group inline-flex justify-center items-center gap-2 transition-colors text-black py-2 px-3 lg:py-2 lg:px-4 xl:py-3 xl:px-6 rounded-full font-mulish font-bold text-sm md:text-base lg:text-xl cursor-pointer w-fit"
>
  <div className="flex justify-center items-center gap-1">
    Start Hiring  
    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </div>
</Link>
</div>
</div>
{/* div 2 */}
<div className="w-full h-full bg-black p-3 md:p-5">

 <Image
                          alt="hi"
                width={500}
                height={500}
                loading="lazy"
                          src="/assets/remoteImg.avif"
                          className="w-full h-full object-cover  rounded-xl"
                        />
        </div>

        
        
    </div>
    </section>
  )
}
