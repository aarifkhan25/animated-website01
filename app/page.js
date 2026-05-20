"use client";
import { useState, useRef } from "react";
import Main from "./components/Home/Main.jsx";
import Team from "./components/Home/Team.jsx";
import Company from "./components/Home/Company.jsx";
import Talent from "./components/Home/Talent.jsx";
import StartHiring from "./components/Home/StartHiring.jsx";
import FractionalTalent from "./components/Home/FractionalTalent.jsx";
import ChooseUs from "./components/Home/ChooseUs.jsx";
import YourExpectations from "./components/Home/YourExpectations.jsx";
import Quesitons from "./components/Home/Quesitons.jsx";

export default function Home() {
  const { show, setShow } = useState(true);

  return (
    <>
      {/* // hero section */}
      <Main></Main>

      {/* //team section */}
      
      <Team></Team>

      {/* //Company section */}
      <Company></Company>

      {/* //talent section */}
      
      <Talent
        textColor="#f35400"
        bgColor="#370c00"
        title="Pick from high-quality fractional talent"
        heading={
          <>
            Access the <br /> talent you need
          </>
        }
        subheading=" Interview curated candidates for every role you're hiring
                         for, hand-picked to select the world's best fractional
                         talent"
        show={show}
      ></Talent>

      {/* start hiring */}
    <div className="md:-mt-60 lg:-mt-0">

      <StartHiring></StartHiring>
    </div>

      {/* FractionalTalent */}
      <FractionalTalent
        textColor="#009de4"
        bgColor="#002036"
        title="The best fractional talent in the world"
        heading={
          <>
            {" "}
            Build with Pangeans,
            <br /> grow with Pangea
          </>
        }
        subheading="Expand your team's capabilities quickly with high-quality operators from Pangea's private talent network, available in 48 or less"
      ></FractionalTalent>

      {/* why choose us */}

        <div className="md:-mt-80 lg:-mt-0">
      <ChooseUs
        textColor="#9070ff"
        bgColor="#1c143d"
        title="Why companies choose Pangea"
        heading={
          <>
            {" "}
            A trusted partner <br /> for growth
          </>
        }
        subheading="Pangea's proudly helped thousands of clients connect with talent"
      ></ChooseUs>
</div>
      {/* your expectations */}
      <YourExpectations
        textColor="#fb00c6"
        bgColor="#3a002b"
      ></YourExpectations>

      {/* hire Fractionally */}
       
      <FractionalTalent
        textColor="#ff0056"
        bgColor="#40000b"
        title="The fastest way to hire fractionally"
        heading={
          <>
           
            Hiring fractionally is <br />
            easier than you think
          </>
        }
        subheading=" Expand your team's capabilities quickly with high-quality operators from Pangea's private talent network, available in 48 or less"
      ></FractionalTalent>

      {/* help for hire */}
       <div className="md:-mt-80 lg:-mt-0">      <ChooseUs
        textColor="#ff4d00"
        bgColor="#2a1205"
        title="End-to-End fractional hiring"
        heading={
          <>
            {" "}
            Here to help you hire <br /> from beginning to end
          </>
        }
        subheading={
          <>
            Hiring with Pangea doesn't just get you access to our private
            network of <br /> fractional experts. Our fully-featured fractional
            work platform is fine-tuned to <br /> save you hours at every step
            of the way.
          </>
        }
      ></ChooseUs></div>

      {/* frictional grouth */}
      <Talent
        textColor="#00ae6c"
        bgColor="#002611"
        title="From 1 to 100 to 1000"
        heading={
          <>
            Fractional hiring at <br /> every stage of growth
          </>
        }
        subheading=" Interview curated candidates for every role you're hiring
                         for, hand-picked to select the world's best fractional
                         talent"
        show={show}
      ></Talent>

      {/* start hiring */}
       <div className="md:-mt-60 lg:-mt-0">
      <StartHiring></StartHiring></div>

      {/* our client */}
      <Talent
        textColor="#009de4"
        bgColor="#002036"
        title="Why Innovators hire with Pangea"
        heading={
          <>
            What our clients have
            <br /> to say about us
          </>
        }
        subheading=" Interview curated candidates for every role you're hiring
                         for, hand-picked to select the world's best fractional
                         talent"
        role="client"
      ></Talent>

      <FractionalTalent
        textColor="#9070ff"
        bgColor="#1c143d"
        show={show}
        title="The best of the best"
        heading={
          <>
            {" "}
            There's no comparison <br /> to our efficiency
          </>
        }
        subheading=" Pangea outpaces other hiring platforms in speed, value, and efficency. See how we stack up against the biggest names in the world, across over 160 countries worldwide."
      ></FractionalTalent>

      {/* work */}
       <div className="md:-mt-80 lg:-mt-0">
      <FractionalTalent
     textColor="#fb00c6"
        bgColor="#3a002b"
        role="work"
        title="The talent you need to build faster"
        heading={
          <>
            {" "}
            Work with <br />
            world-class talent
          </>
        }
        subheading="Finding the right people is about hiring for the right role. Thankfully, we've got 'em covered."
      ></FractionalTalent></div>
      {/* questions */}
      
      <Quesitons ></Quesitons>

      <YourExpectations
        textColor="#ff4d00"
        bgColor="#2a1205"
      ></YourExpectations>

  
    </>
  );
}
