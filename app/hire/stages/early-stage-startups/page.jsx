import React from 'react'
import Main from "./Main.jsx"
import Services from "@/pages/forTalent/Services.jsx";
import Work from '@/pages/forTalent/Work.jsx';
import Card from "@/pages/forTalent/Card.jsx"
import FindNextRoleCTA from '@/pages/forTalent/FindNextRoleCTA.jsx';
import {forTalentData} from "@/data/forTalent.js"

export default function page() {
    const {companies,data,freelance,freelance2}=forTalentData;
  return (<>
  <Main textColor="#f35400" />
  <Services textColor="#f35400" />
  <Card  title="Worldwide network" heading={<>Currently active in 165+ <br/> Countries
       </>}   textColor="#f35400" bgColor="#370c00"
            role="remote"
              subheading="Pangea supports payouts in your currency via our payment processing partner Stripe. Check the list below to see if your country is currently enabled for payouts on Pangea.
      "/>
   <Work title=" The new way to work" heading={<>Build longer relationships <br/> with Fractional Hiring </>}
         data={data}  textColor="#f35400" 
          subheading="Jobs on Pangea last longer, pay better, and bill more hours than the average freelance project."/>
          <Card textColor="#f35400"  bgColor="#370c00" title=" Your Perfect Fit" heading={<>Connect with top companies <br/>
          that share your vision 
           </>}
                companies={companies}
                  subheading="Want to build on your experience in a space, find a company working on the next big thing, or align with purpose-focused organizations? Find them all on Pangea, right when they're looking for you.
          "/>
           <FindNextRoleCTA textColor="#f35400"/>
            <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
            </>} freelance={freelance} textColor="#f35400" bgColor="#370c00"
                  role="freelance"
                   subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
           "/>
            <Work title=" Discover the difference" heading={<>We’re not just another <br/> freelance site
            </>} freelance2={freelance2} textColor="#f35400" bgColor="#370c00"
                  role="work"
                   subheading="Built different, from the ground up, by people who wanted a better way to work with interesting clients.
           "/>
             <FindNextRoleCTA textColor="#f35400"/>
  </>
  
  )
}
