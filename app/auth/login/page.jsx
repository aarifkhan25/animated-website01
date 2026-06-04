"use client";
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
export default function Login() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert("Logging in with: "+email);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 ">
      {/* Main Container Card */}
      <div className="w-full max-w-[540px] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-2 py-5 md:py-10 md:px-5 flex flex-col gap-5">
        
        {/* Title Heading */}
        <h2 className="text-2xl md:text-[28px] font-bold text-[#1e293b] text-center tracking-tight font-sans mb-3">
          Welcome Back!
        </h2>

        {/* OAuth Buttons Wrapper */}
        <div className="flex flex-col gap-3.5">
          {/* Google Authentication Button */}
          <button
            type="button"
            aria-label="Login with Google"
            className="w-full flex items-center justify-center gap-2.5 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold  py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <FcGoogle className="text-base md:text-lg lg:text-2xl flex-shrink-0" />
            Login with Google
          </button>

          {/* Apple Authentication Button */}
          <button
            type="button"
            aria-label="Login with Apple"
            className="w-full flex items-center justify-center gap-2 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold  py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <FaApple className="text-base md:text-lg lg:text-2xl text-black flex-shrink-0" />
            Login with Apple
          </button>
        </div>

        {/* Custom "Or" Horizontal Divider Separator */}
        <div className="flex items-center my-2">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="px-4 text-slate-400 font-medium text-sm md:text-base">Or</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* Traditional Input Form Form Element */}
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3.5">
          <div className="relative mt-4">
  <input
    id="email-address"
    type="email"
    required
    placeholder=" " // ⚠️ इसे खाली स्पेस (" ") ही रखें, यह एनीमेशन के लिए ज़रूरी है
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="peer w-full bg-white text-slate-700 text-sm md:text-base px-4 pt-5 pb-2 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
  />
  <label
    htmlFor="email-address"
    className="absolute left-4 top-3.5 text-slate-400 text-sm md:text-base transition-all duration-200 pointer-events-none
    
    /* ─── मैजिक क्लासेस (एनीमेशन) ─── */
    peer-focus:top-[-10px] 
    peer-focus:text-xs 
    peer-focus:text-blue-500 
    peer-focus:bg-white 
    peer-focus:px-1
    
    /* ─── जब इनपुट खाली न हो (टेक्स्ट लिखा हो) तब भी ऊपर ही रहे ─── */
    peer-not-placeholder-shown:top-[-10px] 
    peer-not-placeholder-shown:text-xs 
    peer-not-placeholder-shown:bg-white 
    peer-not-placeholder-shown:px-1"
  >
    Email Address
  </label>
</div>

          {/* Email Authentication Action Button */}
          <button
            type="submit"
            aria-label="Login with email"
            className="w-full flex items-center justify-center gap-2.5 bg-[#e8eefc] hover:bg-[#a3b7f5] active:scale-[0.99] text-[#1e293b] font-bold text-sm md:text-base py-2 px-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <div className="relative flex items-center justify-center  overflow-hidden">
              <HiOutlineMail className="text-sky-300 text-lg md:text-2xl lg:text-4xl scale-x-125" />
            </div>
            Login with email
          </button>
        </form>

        {/* Bottom Switch Links Wrapper */}
        <div className="text-center mt-3 text-sm md:text-base text-slate-600 font-medium">
          Don't have an account yet?{' '}
          <Link
            href="/auth/register"
            className="text-[#0047ff] hover:underline font-bold transition-all ml-0.5"
          >
            Create An Account
          </Link>
        </div>

      </div>
    </div>
  );
}