"use client";
import React, { useState,useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import Link from 'next/link';
export default function CreateAccount() {


 
  

  return (
    <div className="min-h-screen bg-slate-50  flex items-center justify-center p-4 ">
      {/* Main Container Card */}
      <div className="w-full max-w-[540px] bg-white rounded-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-2 py-5 md:py-10 md:px-5 flex flex-col gap-5">
        
        {/* Title Heading */}
        <h2 className="text-2xl md:text-[28px] font-bold text-[#1e293b] text-center tracking-tight font-sans mb-3">
          Find Your talent today!
        </h2>
<p className="text-sm md:text-base text-slate-600 font-medium">Create your talent profile</p>
        {/* OAuth Buttons Wrapper */}
        <div className="flex flex-col gap-3.5">
          {/* Google Authentication Button */}
          <button
            type="button"
            aria-label="Sign-up with Google"
            className="w-full flex items-center justify-center gap-2.5 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold  py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <FcGoogle className="text-base md:text-lg lg:text-2xl flex-shrink-0" />
            Sign-up with Google
          </button>

          {/* Apple Authentication Button */}
          <button
            type="button"
            aria-label="Sign-up with Apple"
            className="w-full flex items-center justify-center gap-2 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold  py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <FaApple className="text-base md:text-lg lg:text-2xl text-black flex-shrink-0" />
            Sign-up with Apple
          </button>
        </div>

      

  

          <div>
          <button
            type="submit"
            aria-label="Sign-up with email"
            className="w-full flex items-center justify-center gap-2.5 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold text-sm md:text-base py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <div className="relative flex items-center justify-center  overflow-hidden">
              <HiOutlineMail className="text-sky-300 text-base md:text-lg lg:text-2xl scale-x-125" />
            </div>
            Sign-up with email
          </button>
        </div>
<div className="mt-5 text-sm md:text-base text-slate-600 font-medium">By creating an account, you agree to our <span className='underline'>Terms of Service </span> and <span className='underline'>Privacy Policy</span>.</div>
        {/* Bottom Switch Links Wrapper */}
        <div className="text-center mt-3 text-sm md:text-base text-slate-600 font-medium">
          Don't have an account yet?{' '}
          <Link
            href="/auth/login"
            className="text-[#0047ff] hover:underline font-bold transition-all ml-0.5"
          >
            Log in
          </Link>
        </div>

      </div>
    </div>
  );
}