"use client";
import React, { useState,useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';
export default function Register() {
  // State management to track user intent selection ('job' or 'hire')
  const [selectedOption, setSelectedOption] = useState(' ');
useEffect(() => {
    
    setSelectedOption(''); 
  }, []);
  const handleContinue = () => {
    alert("Proceeding with option: "+selectedOption);
    // Add your routing or state processing logic here
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans selection:bg-blue-100">
      {/* Step Container Card */}
      <div className="w-full max-w-[620px] bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-5 lg:py-10 lg:px-5 flex flex-col items-center">
        
        {/* Card Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#111827] tracking-tight text-center mb-8">
          What brings you to Pangea?
        </h2>

        {/* Option Selectors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          
          {/* Option 1: Get a Job */}
          <button
            type="button"
            onClick={() => setSelectedOption('job')}
            className={`w-full text-left p-5 rounded-xl border flex flex-col justify-around   transition-all duration-200 cursor-pointer ${
              selectedOption === 'job'
                ? 'bg-[#EBF0FF] border-[#C2D1FF]'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            {/* Custom Interactive Check Indicator */}
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              {selectedOption === 'job' ? (
                <BsCheckCircleFill className="text-[#0047FF] text-xl w-full h-full" />
              ) : (
                <div className="w-5 h-5 rounded-full border border-[#C2D1FF]" />
              )}
            </div>
            <span className="text-base sm:text-lg font-bold text-[#111827]">
              Get a job
            </span>
          </button>

          {/* Option 2: Hire Talent */}
          <button
            type="button"
            onClick={() => setSelectedOption('hire')}
            className={`w-full text-left p-5 rounded-xl border flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer ${
              selectedOption === 'hire'
                ? 'bg-[#EBF0FF] border-[#C2D1FF]'
                : 'bg-white border-slate-100 hover:border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.01)]'
            }`}
          >
            {/* Custom Interactive Check Indicator */}
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              {selectedOption === 'hire' ? (
                <BsCheckCircleFill className="text-[#0047FF] text-xl w-full h-full" />
              ) : (
                <div className="w-5 h-5 rounded-full border border-slate-300" />
              )}
            </div>
            <span className="text-base sm:text-lg font-bold text-[#111827]">
              Hire talent
            </span>
          </button>

        </div>

       

         
       <div className="w-full grid  space-y-5 text-center">
 
  <div className="w-full">
    <Link
      href={`${selectedOption === 'hire' ? '/starthiring' : '/auth/createaccount'}`}
      onClick={handleContinue}
      className={`block text-center w-full ${
        selectedOption === 'hire' || selectedOption === 'job' 
          ? 'bg-black text-white hover:bg-zinc-900' 
          : 'text-gray-500 bg-slate-300 hover:bg-slate-400'
      } active:scale-[0.995] font-bold text-sm sm:text-base py-4 px-6 rounded-xl transition-all shadow-md cursor-pointer`}
    >
      Continue
    </Link>
  </div>


  <div className="w-full">
    <p className="text-slate-500 font-medium text-sm sm:text-base">
      Already have an account?{' '}
      <Link
        href="/auth/login" 
        className="text-[#0047FF] font-bold hover:underline ml-0.5"
      >
        Log in
      </Link>
    </p>
  </div>
</div>
       
      </div>
    </div>
  );
}