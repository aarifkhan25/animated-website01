"use client";

import Main from '../components/forTalent/Main.jsx';
import Services from "../components/forTalent/Services.jsx"

import Work from '../components/forTalent/Work.jsx';
export default function ForTalent() {
 

  return (
    <>
      <Main />
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

      {/* Main Container jise hum scroll ke liye track kar rahe hain */}
      <Services />

      <Work />
    </>
  );
}