"use client";
import React, { useState } from 'react';

export default function HiringPage() {
  // Local state for the input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting form step 1 data: " + JSON.stringify(formData, null, 2));
    // Proceed to next step handler
    setFormData({
    firstName: '',
    lastName: '',
    workEmail: ''
  })
  };

  // Helper validation rule to match the design's inactive/active button state aesthetics
  const isFormValid = formData.firstName && formData.lastName && formData.workEmail;

  return (
    <div className="min-h-screen  text-white font-sans flex flex-col items-center pt-10 pb-20 px-4 select-none">
      
      {/* ========================================================== */}
      {/* BRAND HEADER SECTION                                       */}
      {/* ========================================================== */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl font-semibold tracking-normal text-white">
          Pangea
        </span>
      </div>

      {/* ========================================================== */}
      {/* STEP PROGRESS INDICATOR TIMELINE                          */}
      {/* ========================================================== */}
      <nav aria-label="Progress Timeline" className="flex items-center justify-center gap-2 mb-10 md:mb-15 max-w-full overflow-x-auto whitespace-nowrap px-4 no-scrollbar">
        {/* Step 1: Active */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <span className="text-sm font-bold text-white tracking-wide">Tell us your needs</span>
        </div>

        <div className="w-8 h-[3px] bg-zinc-800 flex-shrink-0"></div>

        {/* Step 2: Inactive */}
        <div className="flex items-center gap-2 opacity-40">
          <div className="w-2 h-2 rounded-full border border-white/80"></div>
          <span className="text-sm font-semibold text-white tracking-wide">Schedule a call</span>
        </div>

        <div className="w-8 h-[3px] bg-zinc-800 flex-shrink-0"></div>

        {/* Step 3: Inactive */}
        <div className="flex items-center gap-2 opacity-40">
          <div className="w-2 h-2 rounded-full border border-white/80"></div>
          <span className="text-sm font-semibold text-white tracking-wide">Track your search</span>
        </div>
      </nav>

      {/* ========================================================== */}
      {/* MAIN REGISTRATION HERO TEXT & FORM INPUT PANELS            */}
      {/* ========================================================== */}
      <main className="w-full max-w-[680px] px-2">
        <header className="space-y-3 mb-5 md:mb-10  text-left">
          <h1 className="text-xl md:text-2xl lg:text-[40px] font-bold tracking-tight text-white">
            Find your next hire
          </h1>
          <p className="text-[#a0a8bd] text-sm md:text-base lg:text-xl font-normal leading-relaxed">
            Tell us what you need — we&apos;ll match you within 48 hours
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name Combined Row Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-[#a0a8bd] tracking-wide">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-zinc-800/80 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-[#a0a8bd] tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-zinc-800/80 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all text-base"
              />
            </div>
          </div>

          {/* Email Full-width Block */}
          <div className="space-y-2">
            <label htmlFor="workEmail" className="block text-xs sm:text-sm font-medium text-[#a0a8bd] tracking-wide">
              Work Email
            </label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              required
              placeholder="you@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-zinc-800/80 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all text-base"
            />
          </div>

          {/* Action Submission Trigger */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-8 py-4 rounded-xl font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 ${
                isFormValid
                  ? 'bg-white text-black hover:bg-zinc-200 cursor-pointer active:scale-[0.99]'
                  : 'bg-[#181C26] text-[#a0a8bd] cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </form>
      </main>

    </div>
  );
}