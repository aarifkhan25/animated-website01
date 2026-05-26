"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import FadeContent from "@/components/FadeContent.jsx";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import { JetBrains_Mono, Mulish } from "next/font/google";
import AnimatedContent from "@/components/AnimatedContent.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import Footer from '@/pages/Footer.jsx';
import Header from '@/pages/Header.jsx';
import Link from 'next/link';

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
});
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={`${jbMono.variable} ${mulish.variable} bg-black text-white antialiased`}>
        
        <div className="w-full font-sans min-h-screen flex flex-col justify-between">
          
          {/* HEADER NAV CONTAINER */}
         <Header/>

          {/* PAGE CONTENT */}
          <main className="w-full flex-grow">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

      </body>
    </html>
  );
}