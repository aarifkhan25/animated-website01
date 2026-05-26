"use client";
import { useState, useRef } from "react";
import Main from "@/pages/Home/Main.jsx";
import Team from "@/pages/Home/Team.jsx";
import Company from "@/pages/Home/Company.jsx";
import Talent from "@/pages/Home/Talent.jsx";
import StartHiring from "@/pages/Home/StartHiring.jsx";
import FractionalTalent from "@/pages/Home/FractionalTalent.jsx";
import ChooseUs from "@/pages/Home/ChooseUs.jsx";
import YourExpectations from "@/pages/Home/YourExpectations.jsx";
import Quesitons from "@/pages/Home/Quesitons.jsx";
import { homeData } from '@/data/home.js';

export default function Home() {
  // FIX: ऑब्जेक्ट {} की जगह ऐरे [] डिकंस्ट्रक्शन का इस्तेमाल किया
  const [show, setShow] = useState(true);
  const { talent, factionalTalent, clientInfo, comptition, sections,faqData } = homeData;

  return (
    <>
      {/* hero section */}
      <Main />

      {/* team section */}
      <Team />

      {/* Company section */}
      <Company />

      {/* talent section */}
      <Talent
        talent={talent}
        textColor="#f35400"
        bgColor="#370c00"
        title="Pick from high-quality fractional talent"
        heading={
          <>
            Access the <br /> talent you need
          </>   
        }
        subheading="Interview curated candidates for every role you're hiring for, hand-picked to select the world's best fractional talent"
        show={show}
      />

      {/* start hiring */}
      <StartHiring />

      {/* FractionalTalent */}
      <FractionalTalent
        factionalTalent={factionalTalent}
        textColor="#009de4"
        bgColor="#002036"
        title="The best fractional talent in the world"
        heading={
          <>
            Build with Pangeans,
            <br /> grow with Pangea
          </>
        }
        subheading="Expand your team's capabilities quickly with high-quality operators from Pangea's private talent network, available in 48 or less"
      />

      {/* why choose us */}
      <ChooseUs
        textColor="#9070ff"
        bgColor="#1c143d"
        title="Why companies choose Pangea"
        heading={
          <>
            A trusted partner <br /> for growth
          </>
        }
        subheading="Pangea's proudly helped thousands of clients connect with talent"
      />

      {/* your expectations */}
      <YourExpectations
        textColor="#fb00c6"
        bgColor="#3a002b"
      />

      {/* hire Fractionally */}
      <FractionalTalent
        factionalTalent={factionalTalent}
        textColor="#ff0056" // FIX: यहाँ से एक्स्ट्रा 's' हटा दिया गया है
        bgColor="#40000b"
        title="The fastest way to hire fractionally"
        heading={
          <>
            Hiring fractionally is <br />
            easier than you think
          </>
        }
        subheading="Expand your team's capabilities quickly with high-quality operators from Pangea's private talent network, available in 48 or less"
      />

      {/* help for hire */}
      <ChooseUs
        textColor="#ff4d00"
        bgColor="#2a1205"
        title="End-to-End fractional hiring"
        heading={
          <>
            Here to help <br className="block sm:hidden" /> you hire <br /> from beginning to end
          </>
        }
        subheading={
          <>
            Hiring with Pangea doesn't just get you access to our private
            network of <br className="hidden md:block" /> fractional experts. Our fully-featured fractional
            work platform is fine-tuned to <br className="hidden md:block" /> save you hours at every step
            of the way.
          </>
        }
      />

      {/* frictional growth */}
      <Talent
        talent={talent}
        textColor="#00ae6c"
        bgColor="#002611"
        title="From 1 to 100 to 1000"
        heading={
          <>
            Fractional hiring at <br /> every stage of growth
          </>
        }
        subheading="Interview curated candidates for every role you're hiring for, hand-picked to select the world's best fractional talent"
        show={show}
      />

      {/* start hiring */}
      <StartHiring />

      {/* our client */}
      <Talent
        clientInfo={clientInfo}
        textColor="#009de4"
        bgColor="#002036"
        title="Why Innovators hire with Pangea"
        heading={
          <>
            What our clients have
            <br /> to say about us
          </>
        }
        subheading="Interview curated candidates for every role you're hiring for, hand-picked to select the world's best fractional talent"
        role="client"
      />

      {/* competition */}
      <FractionalTalent
        comptition={comptition}
        textColor="#9070ff"
        bgColor="#1c143d"
        show={show}
        title="The best of the best"
        heading={
          <>
            There's no comparison <br /> to our efficiency
          </>
        }
        subheading="Pangea outpaces other hiring platforms in speed, value, and efficiency. See how we stack up against the biggest names in the world, across over 160 countries worldwide."
      />

      {/* work */}
      <FractionalTalent
        sections={sections}
        textColor="#fb00c6"
        bgColor="#3a002b"
        role="work"
        title="The talent you need to build faster"
        heading={
          <>
            Work with <br />
            world-class talent
          </>
        }
        subheading="Finding the right people is about hiring for the right role. Thankfully, we've got 'em covered."
      />

      {/* questions */}
      <Quesitons faqData={faqData} />

      <YourExpectations
        textColor="#ff4d00"
        bgColor="#2a1205"
      />
    </>
  );
}