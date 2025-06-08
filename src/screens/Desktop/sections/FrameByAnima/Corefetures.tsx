import { Database } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { image } from 'framer-motion/client'
function Corefetures() {
    const [activeTab, setActiveTab] = useState("asset-management");
    const [prevTab, setPrevTab] = useState("asset-management");
    const tabs = [
        { id: "asset-management", label: "Asset Management", image: "/rectangle-1.jpg" },
        { id: "investment-firm", label: "Investment Firm", image: "/investment.webp" },
        { id: "construction", label: "Construction", image: "/construction.webp" },
        { id: "financial-analysis", label: "Financial Analysis", image: "/financial.webp" },
    ]

    const features = [
        "Optimize rental income and minimize vacancies",
        "Handle maintenance, tenant relations, and operations",
        "Continuous financial reporting and portfolio oversight",
        "Long-term property performance tracking",
    ]

    const [activeText, setActiveText] = useState(tabs[0].label);

    const handleSubTabClick = (tabId: string) => {
        setPrevTab(activeTab);
        setActiveTab(tabId);
        // If you need to set active text, find the tab by id
    }
    const activeTabData = tabs.find(tab => tab.id === activeTab);

    const slideDirection = tabs.findIndex(tab => tab.id === activeTab) > tabs.findIndex(tab => tab.id === prevTab) ? 1 : -1;

    return (
        <section className="flex justify-center items-center w-full bg-white">
            <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 sm:px-8 max-w-[1440px] mx-auto py-6 sm:py-10 lg:py-[100px] gap-6">
                <div className="h-full w-full flex flex-col gap-[40px] md:gap-[60px]">
                    {/* Heading */}
                    <div className="text-center">
                        <p className="font-medium text-xs sm:text-base leading-5 sm:leading-6 tracking-[0px] font-inter text-[#637087] [font-family:'Inter',Helvetica]">
                            Our Core Features
                        </p>
                        <h2 className="font-bold [font-family:'Inter',Helvetica] text-[22px] sm:text-[38px] leading-8 sm:leading-[48px] text-[#000000]">
                            <span className="text-[#1763DB] font-bold">Core Foundations</span>{' '}
                            of Our Real
                            <br className="hidden sm:block" />
                            Estate Success
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="w-full flex justify-center items-center">
                        <div
                            className="grid grid-cols-2 gap-x-3 gap-y-2 md:flex md:flex-row lg:flex lg:flex-row justify-center items-center h-[23.07px] gap-[3.02px] sm:h-[44px] md:gap-[12px]"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleSubTabClick(tab.id)}
                                    className={`relative h-[23.07px] sm:h-[44px] px-[8px] sm:px-[20px] rounded-[40px] border whitespace-nowrap transition-all duration-300 ease-in-out transform font-['Inter Display'] font-[500] tracking-[0px] text-[9px] leading-[13px] sm:text-[16px] sm:leading-[24px]
    ${activeTab === tab.id
                                            ? "bg-white text-[#1763DB] border-[#1763DB] shadow-md scale-[1.05]"
                                            : "bg-white text-[#898e9b] border-[#1763DB26] hover:text-[#637087] hover:scale-[1.03] hover:shadow-sm"}
  `}
                                >
                                    {tab.label}
                                    {/* {activeTab === tab.id && (
                                        // <span className="absolute bottom-0 left-1/2 w-[80%] h-[2px] bg-[#1763DB] rounded-sm -translate-x-1/2 transition-all duration-300"></span>
                                    )} */}
                                </button>

                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6 sm:gap-12 w-full">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 w-full sm:max-w-[685px] flex flex-col">
                            <div className="flex flex-col items-start !gap-4">
                                <div className="bg-[#1763db] p-3 rounded-xl flex-shrink-0">
                                    <Database className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-bold text-[#000000] mb-2 sm:mb-4">
                                        {activeTabData?.label || "Asset Management"}
                                    </h3>
                                    <p className="text-[#637087] text-sm sm:text-lg leading-relaxed">
                                        We focus on enhancing each property's value through proactive management strategies. From minimizing
                                        vacancies to optimizing operations, our goal is to drive consistent performance and long-term returns.
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 sm:space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 sm:gap-4">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="shrink-0"
                                            >
                                                <path
                                                    opacity="0.2"
                                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                    fill="#1763DB"
                                                />
                                                <path
                                                    d="M16.125 9.75L10.625 15L7.875 12.375"
                                                    stroke="#1763DB"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                    stroke="#1763DB"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-[#1763DB] font-medium leading-[1.4] text-sm sm:text-base">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Button */}
                                <div>
                                    <button className="btn1 text-[#000000] border border-[#d6d6d6]  font-medium px-4 sm:px-6 py-2 transition-all duration-300 ease-in-out
  hover:bg-[#e8e8e8] hover:scale-105 active:scale-95">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative w-full h-310px lg:h-[468px] md:h-[390px] sm:w-[565px] max-w-full">
                            <div className="rounded-2xl p-1 bg-white w-full h-full">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeTabData?.image}
                                        src={activeTabData?.image}
                                        alt={activeTabData?.label}
                                        initial={{ x: slideDirection * 200, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -slideDirection * 200, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-48 sm:h-full object-cover rounded-lg"
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );


}

export default Corefetures