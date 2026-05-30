import React from 'react'

import Main from "../../stages/early-stage-startups/Main.jsx";
import Matchmaking from "../../stages/early-stage-startups/Matchmaking.jsx";

import Services from "@/pages/forTalent/Services.jsx";
import Card from "@/pages/forTalent/Card.jsx";
import Work from "@/pages/forTalent/Work.jsx";

import FindNextRoleCTA from "@/pages/forTalent/FindNextRoleCTA.jsx";
import FAQ from "@/pages/forTalent/FAQ.jsx";
import OtherIndustries from './OtherIndustries.jsx';
import {forTalentData} from "@/data/forTalent.js"

export default function page() {
      const {companies,data,freelance,freelance2}=forTalentData;
  
  return (
    <>
      <Main textColor="#00b365" heading={<>Hire fractional experts for <span className="text-[#00b365]">ai startups</span></>}
      subheading={<> Top designers, marketers, developers, and more <br/> with experience at early-stage startup companies,<br/> ready to work in 48 hours. Are you ready to discover<br/> Pangea?</>}
      img="/assets/hire/stages/E4.png"
      />
      <Services textColor="#00b365" />
       <Card textColor="#00b365"  bgColor="#002611" title=" Your Perfect Fit" heading={<>Connect with top companies <br/>
                that share your vision 
                 </>}
                      companies={companies}
                        subheading="Want to build on your experience in a space, find a company working on the next big thing, or align with purpose-focused organizations? Find them all on Pangea, right when they're looking for you.
                "/>
                 <Work title=" The new way to work" heading={<>Build longer relationships <br/> with Fractional Hiring </>}
                         data={data}  textColor="#00b365" 
                          subheading="Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project."/>
      <Matchmaking textColor="#00b365" bgColor="#002611" textColor2="black" />
       <FindNextRoleCTA textColor="#00b365"/>
           <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
                   </>} freelance={freelance} textColor="#00b365" bgColor="#002611"
                         role="freelance"
                          subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
                  "/>
                   <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
                   </>} freelance2={freelance2} textColor="#00b365" bgColor="#002611"
                         role="work"
                          subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
                          "/>
                 <FAQ bgColor="#002611"   textColor="#00b365" />
                          <FindNextRoleCTA textColor="#00b365"/>


                          <OtherIndustries textColor="#00b365"/>
    </>
  )
}
