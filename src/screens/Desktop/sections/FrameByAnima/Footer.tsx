import React from 'react';
import { motion } from "framer-motion";


function Footer() {
    return (
  <footer className="relative w-full bg-[#0b1a33] flex flex-col justify-start pt-12 lg:pt-[131px] pb-0">
        <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[32px] md:gap-[60px] lg:gap-[100px] relative px-4">
          <div className="w-full grid grid-cols-1 gap-y-[32px] lg:grid-cols-[minmax(0,550px)_minmax(0,306px)_1fr] lg:gap-[72px]">


            {/* Emails Section */}
            <div className="flex flex-col gap-4 max-w-full">
              {/* Logo */}
              <div className="flex items-center gap-1 mt-[-1px] ">
                <span className="text-white text-[24px] lg:text-[29.4px] leading-[44px] tracking-[0] font-['Space_Grotesk'] font-bold hover:text-blue-600 cursor-pointer">VFMT.</span>
              </div>
              {/* Description */}
              <p className="text-[#d7d1d1] text-[16px] lg:text-lg font-normal leading-relaxed font-['Space_Grotesk'] max-w-[900px]">
                Welcome to our interior design agency! Our team of experienced designers and decorators is passionate about creating beautiful, functional spaces that enhance our clients' lives. Welcome to our interior design agency!
              </p>
              {/* Email */}
              <div className="mt-8 lg:mt-[40px]">
                <span className="text-white text-2xl lg:text-[55px] leading-[1.2] lg:leading-[66px] font-['Space_Grotesk'] font-bold cursor-pointer hover:text-blue-600">info@email.com</span>
              </div>
            </div>

            {/* Menu Section */}
            <div className="flex flex-col items-start gap-[25px] pt-0 pb-[1.5px] px-0">
              {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "BLOG", "CONTACT US"].map((item, index) => (
                <div key={index} className="SMN_effect-40 overflow-visible flex-col items-start">
                  <a className="text-white relative text-[14px] lg:text-base leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap cursor-pointer ">{item}</a>
                </div>
              ))}
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col items-start gap-8">
              {/* Location */}
              <div className="flex items-start gap-2">
                <img className="w-3 h-4 mt-1" alt="Location icon" src="/img.svg" />
                <div className="flex flex-col">
                  <span className="text-[#c1c1c1] text-[16px] lg:text-[18px] leading-[1.4] lg:leading-[30.8px] font-normal font-['Space_Grotesk']">
                    901 N Pitt Str., Suite 170 Alexandria,<br />NY, USA
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <img className="w-4 h-4" alt="Phone icon" src="/img-2.svg" />
                <span className="text-[#c1c1c1] text-[16px] lg:text-[18px] leading-[1.4] lg:leading-[30.8px] font-normal font-['Space_Grotesk']">(406) 555-0120</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <img className="w-4 h-4" alt="Email icon" src="/img-1.svg" />
                <span className="text-[#c1c1c1] text-[16px] lg:text-[18px] leading-[1.2] lg:leading-[26px] font-normal font-['Space_Grotesk']">hello@vfmtrealty.com</span>
              </div>
            </div>
          </div>

          {/* Bottom: Links and Copyright */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 lg:gap-0 lg:mt-[72px]">
            <div className="flex items-center gap-5 w-full lg:w-auto">
              <span className="text-[#c1c1c1] text-[14px] lg:text-lg leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap cursor-pointer hover:text-blue-600">Terms & Condition</span>
              <span className="text-[#c1c1c1] text-base lg:text-lg leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap cursor-pointer hover:text-blue-600">Privacy Policy</span>
            </div>
            <span className="text-[#c1c1c1] text-[14px] lg:text-lg leading-[1.3] lg:leading-[23.4px] font-['Space_Grotesk'] font-medium whitespace-nowrap">Copyright @2025, All Right reserved</span>
          </div>

          <div className="w-full flex justify-center items-end mt-[30px] lg:mt-[20px] gap-[5px] overflow-hidden relative h-[190px] lg:h-[210px]">
            {/* Left Image */}
            <img
              src="/vector-2.svg"
              alt="Cityscape Left"
              className="w-[50%] h-[80%] lg:h-full object-cover object-[100%_bottom] lg:object-center"
            />

            {/* Gap between images */}
            <div className="w-2 sm:w-6 lg:w-12"></div>

            {/* Right Image flipped */}
            <img
              src="/vector-2.svg"
              alt="Cityscape Right"
              className="w-[50%] h-[80%] lg:h-full object-cover object-[100%_bottom] lg:object-center scale-x-[-1]"
            />
          </div>
        </div>

        {/* Footer bottom cityscape images */}

      </footer>



    )
}

export default Footer