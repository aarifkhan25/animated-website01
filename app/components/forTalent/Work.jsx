"use client";
import React from "react";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import FadeContent from "@/components/FadeContent";
import ScrollReveal from "@/components/ScrollReveal.jsx";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiBankLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import Image from "next/image";
import Card from '../forTalent/Card.jsx';
const freelance = [
  {
    icon: <BsArrowUpRightCircle />,
    title: "tip top jobs",
    heading: "Premium roles",
    subheading:
      "Clients are kept to a high standard so top talent like you don’t have to search through hundreds of listings to find the right role.",
  },
  {
    icon: <BsArrowUpRightCircle />,
    title: "Always remote",
    heading: "Premium roles",
    subheading:
      "Clients are kept to a high standard so top talent like you don’t have to search through hundreds of listings to find the right role.",
  },
  {
    icon: <IoMdSpeedometer />,
    title: "forget ghosting",
    heading: "Fast-paced hiring",
    subheading:
      "Roles start to interview matches in 48 hours or less, so you’re kept in the loop for the entire cycle.",
  },
  {
    icon: <IoIosNotificationsOutline />,
    title: "less leg work",
    heading: "Invoice Reminders",
    subheading:
      "We make sure you get paid on time. We’ll remind you to invoice and follow up with your clients to send payment.",
  },
  {
    icon: <RiBankLine />,
    title: "Flexible contracts",
    heading: "ACH + W2",
    subheading:
      "Go beyond traditional freelance contracts brokered by other sites. Receive payments directly in your bank account ASAP.",
  },
  {
    icon: <TbFileInvoice />,
    title: "WYSIWYG invoices",
    heading: "Fee-free payments",
    subheading:
      "What you see on your invoice is what you get in your bank account. All transfer fees are paid by your clients, not you.",
  },
];

const data = [
  {
    name: (
      <div className="flex justify-center items-center">
        <div>3</div>
        <div></div>x
      </div>
    ),
    title: "Longer projects",
    subTitle: "than average Upwork project",
    delay: 0.5,
  },
  {
    name: (
      <div className="flex justify-center items-center">
        <div>2</div>
        <div></div>x
      </div>
    ),
    title: "Higher hourly rates",
    subTitle: "than US freelance average",
    delay: 1,
  },
  {
    name: "$4M",
    title: "Earned on platform",
    subTitle: "by freelancers on Pangea",
    delay: 1.5,
  },
];
export default function Work({ title, heading, subheading, role }) {
  return (
  <>  <section className="  w-full   py-10 lg:py-20 1xl:py-30 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30  overflow-hidden">
      <div className="flex flex-col gap-0 md:gap-5  lg:gap-0 items-center justify-center text-white">
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
          delay={0.5}
        >
          <div className="mt-10 md:mt-25 mb-10 md:mb-0">
            <span className=" text-[#ff004e]  font-jb-mono  text-[11px]  md:text-sm lg:text-base uppercase">
              {title}
            </span>
          </div>
        </AnimatedContent>

        {/* Main Heading */}
        <FadeContent
          blur={true}
          duration={1.5}
          delay={0.5}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className=" text-center  ">
            <h1 className="text-2xl md:text-[45px] lg:text-[56px]  tracking-wide leading-[1.1] mb-9 font-mulish ">
              {" "}
              {heading}{" "}
            </h1>
          </div>
        </FadeContent>
        {/* Subtext */}
        <div className=" text-center max-w-3xl ">
          <FadeContent
            blur={true}
            duration={1.5}
            easing="ease-in"
            initialOpacity={0}
            delay={1}
          >
            <p className="text-white text-sm md:text-2xl font-mulish">
              {subheading}
            </p>
          </FadeContent>
        </div>
      </div>
      <div className=" py-10  grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8 justify-center items-stretch">
        {" "}
        {role !== "freelance"
          ? data?.map((curE, i) => {
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
                  <div className="w-full flex-1 flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-5 rounded-xl bg-[#141414] p-2 md:p-4 lg:p-6 shadow-2xl border border-white/5">
                    <h2 className="font-mulish text-xl md:text-6xl lg:text-7xl font-bold text-[#ff004e]">
                      {curE.name}
                    </h2>

                    <p className="text-sm md:text-lg lg:text-2xl font-mulish  leading-tight">
                      {curE.title}
                    </p>
                    <p className="text-[8px] md:text-[10px] lg:text-xs font-mulish">
                      {curE.subTitle}
                    </p>
                  </div>
                </FadeContent>
              );
            })
          : freelance?.map((curE, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl bg-[#141414] shadow-2xl border border-white/5 h-full flex flex-col overflow-hidden"
                >
                  
                  {curE.title !== "Always remote" ? (
                    <div className="w-full p-2 md:p-4 lg:p-6  flex flex-col justify-start items-start gap-3 md:gap-4 lg:gap-5 h-full">
                      <div className="flex justify-start gap-2  md:gap-5">
                        <div className="text-[#ff004e] tex-base md:text-xl lg:text-2xl">
                          {curE.icon}
                        </div>
                        <div className="text-[#ff004e]  font-jb-mono  text-[10px]  md:text-xs lg:text-base uppercase">
                          {curE.title}
                        </div>
                      </div>

                      <div className="text-white text-base md:text-[20px] lg:text-3xl font-semibold font-mulish">
                        {curE.heading}
                      </div>

                      <div className=" text-xs md:text-[13px] lg:text-lg ">
                        {curE.subheading}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full absolute inset-0 flex flex-col ">
                      <Image
                        alt={curE.title}
              width={500}
              height={500}
              loading="lazy"
                        src="/assets/remoteImg.avif"
                        className="w-full h-full object-cover  rounded-xl"
                      />
                      <div className="absolute top-31 md:top-30 lg:top-43 p-2 md:p-5  left-0 w-full h-full  ">
                        <div className="flex justify-start gap-2  md:gap-5 p-1.5 md:p-3 rounded-lg bg-[#141414]  shadow-2xl border border-white/5">
                          <div className="text-[#ff004e] text-base md:text-xl lg:text-2xl">
                            {curE.icon}
                          </div>
                          <div className="text-[#ff004e]  font-jb-mono  text-[10px]  md:text-xs lg:text-base uppercase">
                            {curE.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
      </div>

      {/* star setion */}
     {  role !=="freelance"? (
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={0}
        blurStrength={4}
      >
      <div className={`w-full grid justify-center items-center gap-5  md:mt-10`}>
          <div className="flex justify-center items-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => {
              return star === 5 ? (
                <FaRegStarHalfStroke
                  key={star}
                  className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#ff004e]"
                />
              ) : (
                <FaStar
                  key={star}
                  className=" w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#ff004e]"
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center ">
            <p className="text-white text-[8px] md:text-xs lg:text-sm font-mulish font-semibold">
              Rated 4.6/5 on G2
            </p>
          </div>
        </div>
      </ScrollReveal>
        )
        
    :(<Card  title="Worldwide network" heading={<>Currently active in 165+ <br/> Countries
     </>}
          role="remote"
            subheading="Pangea supports payouts in your currency via our payment processing partner Stripe. Check the list below to see if your country is currently enabled for payouts on Pangea.
    "/>)
        }
    </section>

    </>
  );
}
