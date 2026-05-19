"use client";
import React from "react";

import Main from '../components/forTalent/Main.jsx';
import Services from "../components/forTalent/Services.jsx"

import Work from '../components/forTalent/Work.jsx';
import Card from '../components/forTalent/Card.jsx';
export default function ForTalent() {
 
  return (
    <>
      <Main   />
      <section className="w-full pt-10">
        <div
          className="w-full h-[100px] md:h-[200px] lg:h-[350px] bg-[#ff004e] object-contain"
          style={{
            maskImage: "url('/assets/talent/forTalentBg.png')",
            WebkitMaskImage: "url('/assets/talent/forTalentBg.png')",
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        ></div>
      </section>
<Card/>
      {/* Main Container jise hum scroll ke liye track kar rahe hain */}
      <Services />

      <Work title=" The new way to work" heading={<>Build longer relationships <br/> with Fractional Hiring </>}
       
        subheading="Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project."/>

       
    </>
  );
}