
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SectionByAnima = (): JSX.Element => {

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

  return (

    <section className="w-[100vw] h-[90vh] xs:h-[75vh] md:h-[880px] lg:h-[1020px] bg-cover bg-center relative">
      <div className="backdrop-blur-sm absolute top-0 left-0 w-full h-full [background-image:linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/heroImage.webp')] bg-cover bg-center content-center"></div>
      <div className="w-full h-full relative items-center justify-center flex flex-col">
        <div className="h-full w-full px-4">
          <div className="flex flex-col justify-between h-full w-full max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between w-full mt-[50px]">
              <div className="font-display font-medium text-[29.39px] md:text-[42.24px] leading-[44px] tracking-[0] uppercase text-white">VFMT.</div>
              <div className="flex items-center justify-end lg:justify-between max-w-[1022px]">
                <nav className="hidden lg:flex items-center justify-between w-full">
                  <ul className="flex items-center lg:gap-[10px] xl:gap-[35px]">
                    {navItems.map((item, index) => (
                      <li key={index} className="inline-block mr-6">
                        <span className="font-display font-medium text-[14px] xl:text-[16px] leading-[24px] tracking-[0] uppercase align-middle text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="hidden lg:flex items-center gap-6 ml-8">
                  <Button variant="link" className="text-white p-0 h-auto">
                    <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-base">
                      LOG IN
                    </span>
                  </Button>
                  <button className="bg-[#1763DB] w-[177px] h-[48px] rounded-[8px] flex items-center justify-center text-white text-[16px] leading-[24px] font-medium uppercase font-display">
                    Invest Now
                  </button>

                </div>
                <div className="lg:hidden block">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="6" fill="white" />
                    <path d="M11 13H24.5" stroke="#1763DB" stroke-width="2" stroke-linecap="round" />
                    <path opacity="0.34" d="M11 18H24.5" stroke="#1763DB" stroke-width="2" stroke-linecap="round" />
                    <path d="M11 23H24.5" stroke="#1763DB" stroke-width="2" stroke-linecap="round" />
                  </svg>

                </div>
              </div>
            </div>

            {/* Middle Container: Eyebrow Tag Label and Transforming Communities */}
            <div className="w-full flex flex-col items-center gap-[32px] lg:gap-[48px]">
              {/* Small Eyebrow Tag Label */}
              <Badge className="flex w-full max-w-fit items-center justify-center gap-2 px-3 py-2 bg-[#ffffff21] rounded-[20px] border-[none] backdrop-blur-[47px] backdrop-brightness-[100%[-webkit-backdrop-filter:blur(47px)_brightness(100%)]">
                <span className="font-medium text-[10px] leading-[16px] text-center px-4 sm:text-base sm:leading-[25.6px]">
                  🎉 Transforming Midwest Real Estate—25% ROI Delivered.
                </span>
              </Badge>

              {/* Transforming Communities Section */}
              <div className="flex flex-col items-center gap-4 w-full">
                <h1 className="typo text-[27px] md:text-[56px] lg:text-[86px] text-white h1_mob_title">
                  Transforming Communities. Maximizing Returns.
                </h1>
                <p className="w-full lg:w-[819px] text-base lg:text-xl text-white text-center leading-relaxed px-4">
                  Investing in sustainable real estate that uplifts neighborhoods while delivering strong, long-term value for our partners.
                </p>

              </div>

              <div className="flex lg:flex-row justify-center gap-4 lg:gap-[12px] items-center w-full lg:w-auto">
                <button
                  className="flex items-center justify-center h-[32px] lg:h-[48px] px-[13px] lg:px-[20px] bg-[#1663db] rounded-[5.33px] max-w-[320px] lg:max-w-[480px] min-w-[56px] lg:min-w-[84px] w-fit "
                >
                  <span className="font-['Space_Grotesk'] font-medium text-white text-[11px] md:text-base leading-6">
                    Explore Properties
                  </span>
                </button>
                <Button
                  className="flex items-center justify-center h-[32px] lg:h-[48px] px-[13px] lg:px-[20px] bg-white rounded-[5.33px] max-w-[320px] lg:max-w-[480px] min-w-[56px] lg:min-w-[84px] w-fit "
                >
                  <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#111416] text-[11px] md:text-base  leading-6">
                    Partner with Us
                  </span>
                </Button>
              </div>
            </div>



            <div
              className="rounded-t-[9.94px] lg:rounded-t-[40px] py-[6.96px] px-[17.13px] lg:px-[85px] xl:py-[32px] bg-white w-full max-w-full top-[453px] left-[16px] sm:top-0 sm:left-0"
            >
              <div className="w-full flex flex-row gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] justify-around items-center h-full">
                {stats.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px]">
                      <span className="text-[16.16px] sm:text-[28px] md:text-[45px] lg:text-[65px] font-bold leading-[18.89px] sm:leading-[34px] md:leading-[55px] lg:leading-[76px] text-center text-[#1763DB] font-['Inter']">
                        {item.value}
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
                ))}
              </div>
            </div>

            <div className="absolute left-0 -bottom-1 h-[5px] w-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};