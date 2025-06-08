
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Button2 } from "../../../../components/ui/moving-border";
import { motion, AnimatePresence } from "framer-motion"
import CountUp from "react-countup";

export const SectionByAnima = (): JSX.Element => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "CONTACT US",
    "PROPERTIES",
    "INVESTORS",
  ];

  const stats = [
    {
      value: "$25M+",
      label: "Managed Assets",
    },
    {
      value: "225+",
      label: "Housing Units",
    },
    {
      value: "225+",
      label: "Properties Refurbished",
    },
    {
      value: "15+Yrs",
      label: "Investment Experience",
    },
  ];

  const text = "Transforming Communities. Maximizing Returns.";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // controls wave speed
      },
    },
  };

  const child = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (

    <section className="w-[100vw] h-[90vh] xs:h-[75vh] md:h-[880px] lg:h-[1020px] bg-cover bg-center relative">
      <div
        className="parallax backdrop-blur-sm absolute top-0 left-0 w-full h-full content-center"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/heroImage.webp')",
        }}
      ></div>
      <div className="w-full h-full relative items-center justify-center flex flex-col">
        <div className="h-full w-full px-4">
          <div className="flex flex-col justify-between h-full w-full max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between w-full mt-[30px] lg:mt-[50px] relative z-50">
              {/* Logo */}
              <div className="font-display font-medium text-[25.39px] md:text-[28.24px] leading-[40px] tracking-[0] uppercase text-white hover:text-[#287aff] cursor-pointer transition-colors duration-300 ease-in-out">
                VFMT.
              </div>

              {/* Nav + Buttons */}
              <div className="flex items-center justify-end lg:justify-between max-w-[1022px]">
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center justify-between w-full">

                  <ul className="flex items-center lg:gap-[10px] xl:gap-[35px]">
                    {navItems.map((item, index) => (
                      <li key={index} className="SMN_effect-40 inline-block mr-6 group relative">
                        <span className="cursor-pointer font-display  text-[12px] xl:text-[14px] leading-[24px] tracking-[0] uppercase align-middle text-white">
                          <a>{item}</a>
                        </span>
                      </li>
                    ))}
                  </ul>

                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-6 ml-8">
                  <Button variant="link" className="btn-0 btn-1 overflow-hidden text-white no-underline p-3 h-auto">
                    <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-base">
                      LOG IN
                    </span>
                  </Button>
                  <button className="shrink-border w-[177px] h-[48px] rounded-[8px] flex items-center justify-center text-white text-[16px] leading-[24px] font-medium uppercase font-display
              relative transition-all duration-500 ease-in-out transform hover:scale-[1.01] active:scale-95
              bg-gradient-to-r from-[#1763DB] via-[#1763DB] to-[#1763DB] hover:from-[#1e70f1] hover:via-[#1e70f1] hover:to-[#1e70f1]">
                    Invest Now
                  </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden block">
                  <button onClick={() => setIsSidebarOpen(true)}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="6" fill="white" />
                      <path d="M11 13H24.5" stroke="#1763DB" strokeWidth="2" strokeLinecap="round" />
                      <path opacity="0.34" d="M11 18H24.5" stroke="#1763DB" strokeWidth="2" strokeLinecap="round" />
                      <path d="M11 23H24.5" stroke="#1763DB" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Overlay */}
            <AnimatePresence>
              {isSidebarOpen && (
                <>
                  {/* Background overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-40"
                    onClick={() => setIsSidebarOpen(false)}
                  />

                  {/* Sidebar */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed top-0 right-0 h-full w-[80%] sm:w-[400px] bg-white shadow-lg z-50 flex flex-col items-start justify-start p-8 space-y-8"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="absolute top-4 right-4 text-black text-3xl font-bold"
                    >
                      ×
                    </button>

                    {/* Nav Items */}
                    <ul className="flex flex-col justify-start items-start space-y-6">
                      {navItems.map((item, index) => (
                        <li
                          key={index}
                          className="group cursor-pointer"
                          onClick={() => setIsSidebarOpen(false)} // close sidebar on click
                        >
                          <span
                            className="font-display font-medium text-[14px] xl:text-[16px] leading-[24px] tracking-[0] uppercase align-middle text-black relative
          after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full hover:text-blue-500"
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>


                    {/* Login Button */}
                    <Button variant="link" className="btn-0 btn-1 overflow-hidden text-black no-underline  h-auto">
                      <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-base text-black hover:text-white">
                        LOG IN
                      </span>
                    </Button>

                    {/* Invest Now Button */}
                    <button onClick={() => setIsSidebarOpen(false)} className="w-[177px] h-[48px] rounded-[8px] flex items-center justify-center text-white text-[16px] leading-[24px] font-medium uppercase font-display
                relative transition-all duration-500 ease-in-out transform hover:scale-[1.01] active:scale-95
                bg-gradient-to-r from-[#1763DB] via-[#1763DB] to-[#1763DB] hover:from-[#1e70f1] hover:via-[#1e70f1] hover:to-[#1e70f1]">
                      Invest Now
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Middle Container: Eyebrow Tag Label and Transforming Communities */}
            <motion.div initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.5
              }} className="w-full flex flex-col items-center gap-[32px] lg:gap-[48px]">

              <Button2><Badge className="flex bg-gray-400 w-full max-w-fit items-center justify-center gap-2 px-3 py-2 bg-[#ffffff21] rounded-[20px] border-[none] backdrop-blur-[47px] backdrop-brightness-[100%[-webkit-backdrop-filter:blur(47px)_brightness(100%)]">
                <span className="font-medium text-[10px] md:text-[12px] lg:text-[16px] leading-[16px] text-center px-4 sm:text-base sm:leading-[25.6px]">
                  🎉 Transforming Midwest Real Estate—25% ROI Delivered.
                </span>
              </Badge></Button2>




              {/* Transforming Communities Section */}
              <div className="flex flex-col items-center gap-4 w-full">
                {/* Mobile: static title */}
                <h1 className="md:hidden block typo text-[27px] md:text-[56px] lg:text-[86px] text-white h1_mob_title text-center ">
                  Transforming Communities. Maximizing Returns.
                </h1>

                {/* Desktop: animated title */}
                <motion.h1
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="hidden md:flex typo text-[56px] lg:text-[86px] text-white flex-wrap justify-center text-center"
                >
                  {text.split(" ").map((word, index) => (
                    <span key={index} className="inline-block mr-2"> {/* space between words */}
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={child}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </motion.h1>

                <p className="w-full lg:w-[819px] text-base lg:text-xl text-white text-center leading-relaxed px-4">
                  Investing in sustainable real estate that uplifts neighborhoods while delivering strong, long-term value for our partners.
                </p>

              </div>

              <div className="flex lg:flex-row justify-center gap-4 lg:gap-[12px] items-center w-full lg:w-auto">
                <button
                  className="[font-family:'Space_Grotesk',Helvetica] text-[11px] md:text-base flex relative transition-all duration-500 ease-in-out transform shrink-border items-center justify-center h-[32px] lg:h-[48px] px-[13px] lg:px-[20px] bg-[#1663db] rounded-[5.33px] max-w-[320px] lg:max-w-[480px] min-w-[56px] lg:min-w-[84px] w-fit hover:scale-[1.01] active:scale-95
              bg-gradient-to-r from-[#1763DB] via-[#1763DB] to-[#1763DB] hover:from-[#1e70f1] hover:via-[#1e70f1] hover:to-[#1e70f1]"
                >
                  Explore Properties
                </button>



                <Button
                  className="btn-0 overflow-hidden flex items-center justify-center h-[32px] lg:h-[48px] px-[13px] lg:px-[20px] bg-white rounded-[5.33px] max-w-[320px] lg:max-w-[480px] min-w-[56px] lg:min-w-[84px] w-fit"
                >
                  <span
                    className=" [font-family:'Space_Grotesk',Helvetica] font-medium text-[#111416] text-[11px] md:text-base leading-6 relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-blue-100 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                  >
                    Partner with Us
                  </span>
                </Button>
              </div>
            </motion.div>



            <div
              className="rounded-t-[9.94px] lg:rounded-t-[40px] py-[6.96px] px-[17.13px] lg:px-[85px] xl:py-[32px] bg-white w-full max-w-full top-[453px] left-[16px] sm:top-0 sm:left-0"
            >
              <div className="w-full flex flex-row gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] justify-around items-center h-full">
                {stats.map((item, index) => {
                  const numberMatch = item.value.match(/(\d[\d,\.]*)/);
                  const numberPart = numberMatch ? numberMatch[0] : "0";

                  // Split around the number
                  const [prefix, suffix] = item.value.split(numberPart);
                  return <React.Fragment key={index}>
                    <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px]">
                      <span className="text-[16.16px] sm:text-[28px] md:text-[45px] lg:text-[65px] font-bold leading-[18.89px] sm:leading-[34px] md:leading-[55px] lg:leading-[76px] text-center text-[#1763DB] font-['Inter']">
                        {prefix}
                        <CountUp
                          end={parseFloat(numberPart.replace(/,/g, ""))}
                          duration={2} // smoother and faster
                          useEasing={true}

                        />
                        {suffix}
                      </span>
                      <span className="text-[5.59px] sm:text-[10px] md:text-[16px] lg:text-[22.47px] font-medium leading-[6.15px] sm:leading-[11px] md:leading-[17px] lg:leading-[24.72px] text-center text-[#C4C4C4] font-['Inter'] tracking-[-3%]">
                        {item.label}
                      </span>
                    </div>

                    {/* Divider (skip after last item) */}
                    {index !== stats.length - 1 && (
                      <div
                        className="w-[1.61px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[121.04px] flex-none flex-grow-0"
                        style={{
                          background:
                            "radial-gradient(50% 50% at 50% 50%, #1763DB 0%, rgba(255, 255, 255, 0) 100%)",
                        }}
                      ></div>
                    )}
                  </React.Fragment>
                })}
              </div>
            </div>

            <div className="absolute left-0 -bottom-1 h-[5px] w-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

