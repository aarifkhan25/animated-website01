import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  const sections = {
    pangea: [
      "Pangea for Clients",
      "Pangea for Talent",
      "About Us",
      "Sitemap",
      "Press",
    ],
    resources: [
      "Blog",
      "FAQ",
      "JD Generator",
      "Glossary",
      "Pangea Academy",
      "Platform Comparisons",
      "Freelance Platforms",
    ],
    fractionalLeft: [
      "Content Talent",
      "Engineering Talent",
      "Operations Talent",
    ],
    fractionalRight: ["Design Talent", "Marketing Talent"],
    featuresLeft: ["Job Posts", "Interviews", "Invoices"],
    featuresRight: ["Candidates", "Assignments"],
    citiesLeft: [
      "Freelancers in New York",
      "Freelancers in Chicago",
      "Freelancers in Los Angeles",
    ],
    citiesRight: [
      "Freelancers in Boston",
      "Freelancers in Nashville",
      "Freelancers in San Francisco",
    ],
  };

  return (
    <footer className=" text-white pt-10  1xl:pt-20 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-30 font-sans relative overflow-hidden">
      <div className="">
        <Image
          width={500}
          height={500}
          src="/assets/logo.svg"
          alt="logo"
          loading="lazy"
          className="hover:opacity-80 cursor-pointer w-12 h-12 md:w-20 md:h-20 lg:w-25 lg:h-25 "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 items-start">
        <div className="flex flex-col gap-5 md:gap-20 self-start     order-1  ">
          <h2 className="text-base md:text-lg lg:text-2xl font-mulish  leading-tight ">
            Pangea empowers fractional work across the world for marketing and
            design roles.
          </h2>
          <div className="flex  gap-4 text-2xl">
            <FaLinkedin className=" w-8 h-8 cursor-pointer hover:text-gray-400 transition-colors" />
            <FaInstagram className="w-8 h-8 cursor-pointer hover:text-gray-400 transition-colors" />
            <FaTiktok className=" w-8 h-8 cursor-pointer hover:text-gray-400 transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-2 self-start gap-4  order-2  ">
          <div>
            <h3 className="font-bold md:text-lg  lg:text-2xl font-mulish mb-4 ">
              Pangea
            </h3>
            <ul className="space-y-3 text-xs md:text-sm lg:text-base font-mulish">
              {sections.pangea.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold md:text-lg lg:text-2xl font-mulish  mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-xs md:text-sm lg:text-base font-mulish">
              {sections.resources.map((item) => (
                <li key={item} className="cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex md:order-3 order-4 self-end pt-10   ">
          <p className="text-sm font-mulish font-semibold">
            © 2026 Pangea.app. All rights reserved. <br />
            <span className="hover:underline">Privacy Policy </span>•{" "}
            <span className="hover:underline">Term or Services </span>•{" "}
            <span className="hover:underline"> For LLMs</span>
          </p>
        </div>

        <div className="flex flex-col gap-12 self-start     md:order-4 order-3  ">
          {/* Fractional Talent */}
          <div>
            <h3 className="font-bold md:text-lg lg:text-2xl font-mulish  mb-4">
              Fractional Talent
            </h3>
            <div className="grid grid-cols-2 text-xs md:text-sm lg:text-base font-mulish">
              <ul className="space-y-2">
                {sections.fractionalLeft.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {sections.fractionalRight.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold md:text-lg lg:text-2xl font-mulish  mb-4">
              Features
            </h3>
            <div className="grid grid-cols-2 text-xs md:text-sm lg:text-base font-mulish">
              <ul className="space-y-2">
                {sections.featuresLeft.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {sections.featuresRight.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold md:text-lg lg:text-2xl font-mulish  mb-4">
              Cities
            </h3>
            <div className="grid grid-cols-2 text-xs md:text-sm lg:text-base font-mulish">
              <ul className="space-y-2">
                {sections.citiesLeft.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {sections.citiesRight.map((item) => (
                  <li key={item} className="cursor-pointer hover:underline">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <Image
          width={500}
          height={500}
          src="/assets/footerLogo.svg"
          alt="logo"
          loading="lazy"
          className="invert opacity-50 hover:opacity-100 w-full  object-contain  transition duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
