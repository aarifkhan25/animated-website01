"use client";
import "../globals.css";
import { useState, useEffect } from "react";
import { JetBrains_Mono, Mulish } from "next/font/google";
import Footer from '@/pages/Footer.jsx';
import Header from '@/pages/Header.jsx';


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
      <body className={`${jbMono.variable} ${mulish.variable}  text-white antialiased   
  bg-[#0d0d0d] overflow-x-hidden`}>
        
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