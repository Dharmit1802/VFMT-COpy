import React from 'react';
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

const benefits = [
  "Proven Expertise in real estate and financial operations",
  "Community-Centered Vision focused on local impact",
  "Reliable Investment Returns through strategic planning",
  "Commitment to Innovation & Growth across all projects",
];

function VFMTReality() {
  return (

    <section className="relative w-full bg-gray-00 overflow-hidden py-12">
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-start w-full max-w-[1440px] mx-auto h-auto lg:h-[1025px] px-4 lg:px-4">

        {/* Text Section */}
        <div className="relative z-10 flex flex-col w-full lg:w-1/2 h-full justify-center gap-10 lg:py-0">
          <div className="flex flex-col items-start gap-[33px] lg:gap-[45px] w-full">
            <div className="flex flex-col items-start gap-6 lg:gap-12 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="w-full lg:w-[536px] mt-[-1px] [font-family:'Inter_Display-Bold',Helvetica] font-bold text-gray-900 text-3xl lg:text-[54px] tracking-[-0.84px] leading-[1.2] lg:leading-[64px]">
                  Why Choose VFMT Realty?
                </h2>

                <p className="w-full [font-family:'Inter_Display-Light',Helvetica] font-light text-gray-700 text-base lg:text-lg tracking-[0] leading-[1.6] lg:leading-[26px]">
                  At VFMT Realty Investment Group, we blend industry expertise with a community-driven approach to real estate. Our team specializes in asset management, financial modeling, and deal structuring to deliver sustainable housing solutions while maximizing returns. We are dedicated to revitalizing neighborhoods and transforming the Midwest real estate landscape through strategic innovation
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex w-full lg:w-[554px] items-center gap-3"
                  >
                    <img
                      className="w-8 h-8 lg:w-10 lg:h-10"
                      alt="Check circle"
                      src="/duotone-checkcircle-1.svg"
                    />
                    <div className="inline-flex flex-col items-start gap-1.5">
                      <p className="w-full lg:w-[480px] mt-[-1px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-gray-900 text-[14px] lg:text-lg tracking-[0] leading-[1.6] lg:leading-[26px]">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="btn1 w-full h-12 lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-0 bg-primary-500 rounded-[7px]
  text-gray-00 text-[18px] font-medium leading-[56px] transition-transform duration-300 ease-in-out
   active:scale-95">
              Show More

            </Button>
          </div>

          {/* Trusted By Section */}
          <div className="flex flex-col items-start gap-5 pt-6 w-full bg-gray-00 shadow-line-top">
            <p className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-gray-900 text-lg tracking-[0] leading-[26px]">
              Trusted by 100+ of companies
            </p>

            <div className="grid grid-cols-4 justify-between gap-[16px] w-full max-w-[433px]">
              {/* Logo 1 */}
              <div className="flex items-center justify-center h-10">
                <img className="w-20 h-10" alt="Company logo" src="/company-logo.svg" />
              </div>

              {/* Logo 2 */}
              <div className="flex items-center justify-center h-10">
                <div className="relative w-20 h-10">
                  <div className="relative h-5 top-2.5">
                    <div className="absolute w-[54px] h-[17px] top-0 left-[26px] bg-[url(/vector.svg)] bg-[100%_100%]">
                      <img className="absolute w-3 h-3 top-[5px] left-4" alt="Vector" src="/vector-1.svg" />
                    </div>
                    <img className="absolute w-5 h-5 top-0 left-0" alt="Group" src="/group.png" />
                  </div>
                </div>
              </div>

              {/* Logo 3 */}
              <div className="flex items-center justify-center h-10">
                <img className="w-[92px] h-[19.64px]" alt="Group" src="/group-7.png" />
              </div>

              {/* Logo 4 */}
              <div className="flex items-center justify-center h-10">
                <div className="relative w-[85px] h-10">
                  <img className="absolute w-[75px] h-10  left-1" alt="Group" src="/Company Logo.svg" />
                </div>
              </div>

              {/* Logo 5 */}
              <div className="flex items-center justify-center h-10">
                <div className="relative w-20 h-10">
                  <div className="relative h-5 top-2.5">
                    <div className="absolute w-[54px] h-[17px] top-0 left-[26px] bg-[url(/vector.svg)] bg-[100%_100%]">
                      <img className="absolute w-3 h-3 top-[5px] left-4" alt="Vector" src="/vector-1.svg" />
                    </div>
                    <img className="absolute w-5 h-5 top-0 left-0" alt="Group" src="/group.png" />
                  </div>
                </div>
              </div>

              {/* Logo 6 */}
              <div className="flex items-center justify-center h-10">
                <img className="w-[96.6px] h-[19.64px]" alt="Group" src="/group-7.png" />
              </div>

              {/* Logo 7 */}
              <div className="flex items-center justify-center h-10">
                <div className="relative w-20 h-10">
                  <img className="absolute w-[75px] h-10  left-1" alt="Group" src="/Company Logo.svg" />
                </div>
              </div>

              {/* Logo 8 */}
              <div className="flex items-center justify-center h-10">
                <img className="w-20 h-10" alt="Company logo" src="/company-logo.svg" />
              </div>
            </div>

          </div>
        </div>

        {/* Image */}
      </div>


     <img
          className="relative lg:absolute right-0 top-0 w-full px-4  lg:px-0 lg:max-w-[45%] h-[361px] lg:h-[1136px] object-cover mt-8 lg:mt-0 lg:diagonal-image"
          alt="Photo"
          src="/photo.png"
        />
    </section>


  )
}

export default VFMTReality