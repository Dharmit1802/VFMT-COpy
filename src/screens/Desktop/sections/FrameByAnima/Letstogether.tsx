import React from 'react';
import { motion } from "framer-motion";


function Letstogether() {
    return (
 <section className="relative w-full bg-white overflow-hidden py-12">
        <div className=" flex flex-col lg:flex-row items-start max-w-[1440px] mx-auto lg:items-center justify-start w-full  h-auto lg:h-[500px] px-4 lg:px-4">

          {/* Text Section */}
          <div className="relative z-10 flex flex-col w-full lg:w-1/2 h-full justify-center gap-12 lg:py-0">
            <div className="flex flex-col items-start gap-[42px] lg:gap-[58px] w-full">
              <div className="flex flex-col items-start gap-8 lg:gap-12 w-full">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h1 className="font-bold text-[26px] md:text-[42px] leading-[60px] tracking-[-0.015em] font-display w-full lg:w-[536px]">
                    Let’s work together
                  </h1>

                  <p className="font-display max-w-[733px] font-light text-[14px] lg:text-[18px] md:text-[16px] text-[#42526B] leading-[26px] tracking-[0]">
                    Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.
                  </p>
                </div>
              </div>
              {/* <button className="w-[225px] bg-[#0B63E5] text-white h-[56px] rounded-[7px] transition-transform duration-300 ease-in-out
  hover:scale-105 active:scale-95">
                Invest Now
              </button> */}
              <button
                  className="flex relative transition-all shrink-border duration-500 ease-in-out transform bg-[#0B63E5] text-white h-[32px] rounded-[7px] justify-center items-center
             lg:h-[48px] px-[13px] lg:px-[20px] max-w-[320px] lg:max-w-[480px] min-w-[56px] lg:min-w-[84px]
             hover:scale-[1.01] active:scale-95
             bg-gradient-to-r from-[#1763DB] via-[#1763DB] to-[#1763DB]
             hover:from-[#1e70f1] hover:via-[#1e70f1] hover:to-[#1e70f1] w-[225px]"
                >
                     Invest Now
                </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:absolute top-0 right-0 w-full lg:w-[45%] h-[361px] lg:h-[500px] mt-8 lg:mt-0">
            {/* SVG Background */}
            <div className="hidden lg:block absolute top-[-7px] left-[-2px] h-full z-10">
              <svg width="418" height="510" viewBox="0 0 418 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="418" height="510" fill="url(#paint0_linear_1_434)" />
                <defs>
                  <linearGradient id="paint0_linear_1_434" x1="418" y1="250" x2="83.5" y2="250" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <img
              className="relative w-full h-full object-cover rounded-lg md:rounded-none"
              src="/photo.png"
              alt="Photo"
            />
          </div>
        </div>

      </section>



    )
}

export default Letstogether