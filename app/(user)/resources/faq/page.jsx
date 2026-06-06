"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const faqData = [
  {
    id: 1,
    question: "Does Pangea have Design experts?",
    answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
  },
  {
    id: 2,
    question: "Can I search for Design experts with AI on Pangea?",
    answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.",
  },
  {
    id: 3,
    question: "Is hiring Design freelancers on Pangea free?",
    answer: "You get cost-effective expertise, faster turnaround times, and the flexibility to pause or scale services as your business evolves.",
  },
  {
    id: 4,
    question: "Are Design freelancers on Pangea covered by an NDA?",
    answer: "We match you with vetted experts based on your specific project needs. You can manage your team directly through our platform with flexible monthly plans.",
  },
  {
    id: 5,
    question: "How are Design experts on Pangea vetted?",
    answer: "Pangea provides access to top-tier fractional talent, allowing you to scale your creative and marketing efforts without the overhead of full-time hires.",
  },
];

const quesitons = [
  { id: "gen", label: "General Questions",role:"Talent FAQ" },
  { id: "get_hired", label: "Getting Hired Questions" },
  { id: "profile", label: "Pangean Profile Questions" },
  { id: "fin_t", label: "Financial Questions" },
  { id: "acc", label: "Account Questions" },
  { id: "hire", label: "Hiring Questions",role:'Client FAQ' },
  { id: "work_talent", label: "Working with Talent Questions" },
  { id: "comp_prof", label: "Company Profile Questions" },
  { id: "fin_c", label: "Financials Questions" }
];

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

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);
  const [activeTab, setActiveTab] = useState('talent'); 
  const [selectedItem, setSelectedItem] = useState('gen');
  
  // स्क्रॉल करते समय क्लिक इवेंट के साथ टकराव रोकने के लिए एक फ्लैग रिफ
  const isClickScrolling = useRef(false);
  const categoryRefs = useRef({});

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
    isClickScrolling.current = true;

    const element = categoryRefs.current[itemId];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // स्क्रॉल एनीमेशन खत्म होने के बाद वापस स्क्रॉल ट्रैकिंग ऑन करें
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  // 🟢 न्यू एडिशन: Intersection Observer (Scrollspy लॉजिक)
  useEffect(() => {
    const observerOptions = {
      root: null,
      // स्क्रीन के ऊपरी हिस्से (navbar के ठीक नीचे) को ट्रैक करने के लिए रूट मार्जिन
      rootMargin: "-15% 0px -70% 0px", 
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      // अगर यूजर ने खुद किसी टैब पर क्लिक किया है, तो स्क्रॉल ऑब्जर्वर को थोड़ी देर रोकें
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute("data-category-id");
          setSelectedItem(categoryId);

          // चेक करें कि यह कैटेगरी किस पैरेंट टैब (talent या clients) से मेल खाती है
          if (menuData.talent.some((item) => item.id === categoryId)) {
            setActiveTab("talent");
          } else if (menuData.clients.some((item) => item.id === categoryId)) {
            setActiveTab("clients");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // सभी सेक्शन्स को ऑब्जर्वर के साथ जोड़ना
    Object.values(categoryRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 }
    },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 380, damping: 30 } },
    exit: { opacity: 0, y: 5, transition: { duration: 0.1 } }
  };

  const innerGlowStyle = {
    boxShadow: "inset 0px 0px 40px rgba(0, 157, 228, 0.45), inset 0px 0px 15px rgba(0, 157, 228, 0.3)",
  };

  return (
    <section className="w-full mt-10 md:mt-10 lg:mt-5 px-6 md:px-10 lg:px-20 1xl:px-25 2xl:px-50 3xl:px-80 py-5 md:py-10 1xl:py-15">
      
      {/* Banner */}
      <div
        style={innerGlowStyle}
        className="w-full flex flex-col justify-center items-center gap-5 lg:gap-10 bg-[#1B0063] border border-[#1B0063] rounded-[4px] py-10 md:py-15 lg:py-20 2xl:py-40 transition-all duration-300 hover:border-[#1B0063]/60"
        role="banner"
      >
        <div>
          <h1 className="text-white font-mulish text-xl sm:text-3xl md:text-[45px] lg:text-[75px] font-medium tracking-wide text-center select-none antialiased">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex justify-center px-4">
          <p className="text-white font-mulish text-xs md:text-xl lg:text-2xl text-center">
            Find answers to commonly-asked questions related to hiring and freelancing on Pangea
          </p>
        </div>
      </div>

      <div>
       

        {/* Main Layout Grid */}
        <div className="w-full flex flex-col gap-8 md:flex-row items-start py-5 md:py-10 1xl:py-15">
          
          {/* Left Sidebar */}
          <div className="w-full hidden md:block md:w-[280px] lg:w-[320px] md:sticky md:top-18 mt-[10%] flex-shrink-0 z-20">
            <div className="w-full bg-[#0c0c0c] border border-neutral-900 rounded-xl p-4 text-white shadow-2xl">
              
              {/* Tabs */}
              <div className="grid grid-cols-2 bg-[#141414] p-1 rounded-lg mb-6 relative">
                {['talent', 'clients'].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        handleItemClick(menuData[tab][0].id); 
                      }}
                      className={`relative py-2.5 text-xs md:text-sm lg:text-base font-semibold tracking-wide rounded-md capitalize transition-colors duration-300 z-10 cursor-pointer ${
                        isActive ? 'text-white' : 'text-white hover:text-neutral-400'
                      }`}
                    >
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

              {/* Menu Items */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
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
                          onClick={() => handleItemClick(item.id)}
                          className={`
                            group relative px-4 py-3 rounded-lg text-xs md:text-sm lg:text-base font-mulish tracking-wide
                            cursor-pointer transition-all duration-200 select-none
                            ${isSelected ? 'bg-[#1c1c1c] text-white  border-white/20' : 'text-white hover:text-neutral-400 hover:bg-[#141414]/50'}
                          `}
                          whileTap={{ scale: 0.99 }}
                        >
                          {item.label}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* Right Side Sections */}
          <div className="flex-1 w-full space-y-14">
            {quesitons?.map((category) => {
              return (
                <div 
                  key={category.id}
                  ref={(el) => (categoryRefs.current[category.id] = el)}
                  // 🟢 न्यू एडिशन: Intersection Observer ट्रैक करने के लिए कस्टम डेटा एट्रिब्यूट देना
                  data-category-id={category.id}
                  className="md:scroll-mt-[70px]" 
                >
                   <h2 className={`${category.role ? "block":"hidden"} text-3xl md:text-4xl lg:text-[56px]  font-mulish py-5 lg:py-10 text-white capitalize`}>
        {category.role}
        </h2>
                  {/* Category Heading */}
                  <p className="text-xl md:text-2xl lg:text-[34px] font-semibold font-mulish text-white mb-3 md:mb-6">
                    {category.label}
                  </p>

                  {/* Accordion Questions */}
                  <div className="w-full space-y-4">
                    {faqData.map((item) => {
                      const uniqueAccordionId = `${category.id}-${item.id}`;
                      
                      return (
                        <div
                          key={item.id}
                          className="bg-[#333333] rounded-lg overflow-hidden transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleAccordion(uniqueAccordionId)}
                            className="w-full cursor-pointer flex items-center justify-between p-3 lg:p-6 text-left focus:outline-none"
                          >
                            <span className="text-sm md:text-base lg:text-xl font-medium text-white pr-4">
                              {item.question}
                            </span>
                            <motion.div
                              animate={{ rotate: openId === uniqueAccordionId ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-white flex-shrink-0"
                            >
                              <HiOutlineChevronDown className="w-6 h-6 stroke-[2]" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {openId === uniqueAccordionId && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <div className="px-6 pb-6 text-xs md:text-base font-mulish text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}