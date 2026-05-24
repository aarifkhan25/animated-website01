"use client";
import React from "react";

import Main from '../components/forTalent/Main.jsx';
import Services from "../components/forTalent/Services.jsx"

import Work from '../components/forTalent/Work.jsx';
import Card from '../components/forTalent/Card.jsx';
import FindNextRoleCTA from "../components/forTalent/FindNextRoleCTA.jsx";
import FAQ from "../components/forTalent/FAQ.jsx";
export default function ForTalent() {
 
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
<Card title=" Your Perfect Fit" heading={<>Connect with top companies <br/>
that share your vision
 </>}
      
        subheading="Want to build on your experience in a space, find a company working on the next big thing, or align with purpose-focused organizations? Find them all on Pangea, right when they're looking for you.
"/>
      {/* Main Container jise hum scroll ke liye track kar rahe hain */}
      <Services />

      <Work title=" The new way to work" heading={<>Build longer relationships <br/> with Fractional Hiring </>}
       
        subheading="Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project."/>
        <FindNextRoleCTA/>
 <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
 </>}
       role="freelance"
        subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
"/>
        <FindNextRoleCTA/>

<FAQ/>
       
    </>
  );
}