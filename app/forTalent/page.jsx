"use client";
import React, { useState } from 'react';

import Main from "@/pages/forTalent/Main.jsx";
import Services from "@/pages/forTalent/Services.jsx"

import Work from '@/pages/forTalent/Work.jsx';
import Card from '@/pages/forTalent/Card.jsx';
import FindNextRoleCTA from "@/pages/forTalent/FindNextRoleCTA.jsx";
import FAQ from "@/pages/forTalent/FAQ.jsx";
import ScrollSpyAnimation from '@/pages/forTalent/ScrollSpyAnimation.jsx';
import {forTalentData} from "@/data/forTalent.js"
export default function ForTalent() {
const {companies,data,freelance,freelance2}=forTalentData
  return (
    <>
      <Main   />
      <section className="w-full pt-10">
        <div
          className="w-full h-[100px] md:h-[200px] lg:h-[350px] bg-[#ff004e] object-contain opacity-20 hover:opacity-100  transition duration-500"
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
<Services textColor="#ff004e" />

<Card textColor="#ff004e" title=" Your Perfect Fit" heading={<>Connect with top companies <br/>
that share your vision
 </>} bgColor="#40000b"
      companies={companies}
        subheading="Want to build on your experience in a space, find a company working on the next big thing, or align with purpose-focused organizations? Find them all on Pangea, right when they're looking for you.
"/>

      {/* Main Container jise hum scroll ke liye track kar rahe hain */}

      <Work title=" The new way to work" heading={<>Build longer relationships <br/> with Fractional Hiring </>}
       data={data} textColor="#ff004e"
        subheading="Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project."/>



          <ScrollSpyAnimation/>




        <FindNextRoleCTA textColor="#ff004e"/>
 <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
 </>} freelance={freelance} textColor="#ff004e" bgColor="#40000b"
       role="freelance"
        subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
"/>

        
 <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
 </>} freelance2={freelance2} textColor="#ff004e" bgColor="#1A1A1A"
       role="work"
        subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
"/>



<FAQ bgColor="#1A1A1A"   textColor="#ff004e" />



<FindNextRoleCTA  textColor="#ff004e"/>

    </>
  );
}