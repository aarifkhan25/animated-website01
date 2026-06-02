"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. डेटा स्ट्रक्चर (टैब के अनुसार बदलने वाली सूचियाँ)
const menuData = {
  talent: [
    { id: "gen", label: "General" },
    { id: "get_hired", label: "Getting Hired" },
    { id: "profile", label: "Your Profile" },
    { id: "fin_t", label: "Financials" },
    { id: "acc", label: "Account" }
  ],
  clients: [
   
    { id: "hire", label: "Hiring" },
    { id: "work_talent", label: "Working with Talent" },
    { id: "comp_prof", label: "Company Profile" },
    { id: "fin_c", label: "Financials" }
  ]
};

export default function AnimatedSidebar() {
  const [activeTab, setActiveTab] = useState('clients'); // डिफ़ॉल्ट रूप से वीडियो में 'Clients' सक्रिय दिख रहा है
  const [selectedItem, setSelectedItem] = useState('get_hired'); // सक्रिय मेनू आइटम हाइलाइट

  // 2. फ्रेम मोशन वेरिएंट्स डेफिनिशन (एनिमेशन सेटिंग्स)
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // प्रत्येक आइटम के बीच थोड़ा सा डिले (Stagger effect)
        delayChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -8 }, // वीडियो के अनुसार ऊपर से नीचे स्लाइड-इन होता है
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 380, damping: 30 } 
    },
    exit: { opacity: 0, y: 5, transition: { duration: 0.1 } }
  };

  return (
    <div className="w-full max-w-[380px] bg-[#0c0c0c] border border-neutral-900 rounded-xl p-4 font-sans mt-20 text-white shadow-2xl">
      
      {/* ─── टॉप टॉगल बटन ग्रिड (Talent / Clients) ─── */}
      <div className="grid grid-cols-2 bg-[#141414] p-1 rounded-lg mb-6 relative">
        {['talent', 'clients'].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                // टैब बदलते ही पहले आइटम को ऑटो-सिलेक्ट करें ताकि खाली न दिखे
                setSelectedItem(menuData[tab][1]?.id || menuData[tab][0].id);
              }}
              className={`relative py-2.5 text-sm md:text-base font-semibold tracking-wide rounded-md capitalize transition-colors duration-300 z-10 cursor-pointer ${
                isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {/* स्लाइडिंग बैकग्राउंड पिल (Shared Layout Animation) */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#262626] border border-neutral-700/30 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {tab}
            </button>
          );
        })}
      </div>

      {/* ─── नीचे की एनिमेटेड लिस्ट (AnimatePresence) ─── */}
      <div className="min-h-[260px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // की (key) बदलने पर AnimatePresence एग्जिट और री-एंटर एनीमेशन ट्रिगर करता है
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-1"
          >
            {menuData[activeTab].map((item) => {
              const isSelected = selectedItem === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={listItemVariants}
                  onClick={() => setSelectedItem(item.id)}
                  className={`
                    group relative px-4 py-3 rounded-lg text-sm md:text-base font-medium tracking-wide
                    cursor-pointer transition-all duration-200 select-none
                    ${isSelected ? 'bg-[#1c1c1c] text-white' : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#141414]/50'}
                  `}
                  whileTap={{ scale: 0.99 }} // क्लिक करने पर हल्का सा टैप एनीमेशन
                >
                  {item.label}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}