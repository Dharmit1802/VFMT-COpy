import React from 'react';

function AboutVFMT() {
    return (
        <section className="flex justify-center items-center w-full bg-white">
            <div className="flex flex-col md:flex-row justify-center items-center w-full px-[10px] max-w-[1440px] mx-auto py-[30px] lg:py-[100px] gap-[24px]">
                <div className="h-full w-full">
                    <div className="flex flex-col justify-between md:flex-row gap-[24px]">
                        <div className="w-full flex flex-col gap-[24px] md:w-[47%] order-1 md:order-1">
                            <div className="flex flex-col items-start gap-2 md:gap-3 relative w-full">
                                <p className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#1663db] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                                    About VFMT Realty
                                </p>

                                <h2 className="relative w-full text-font font-bold text-xl md:text-2xl lg:text-[36px] tracking-[0] leading-7 md:leading-8 lg:leading-[52px]">
                                    <span className="text-[#111416]">Revitalizing </span>
                                    <span className="text-[#1663db]">Neighborhoods,</span>
                                    <span className="text-[#111416]"> Delivering Returns</span>
                                </h2>
                            </div>
                            <div>
                                <div className="flex flex-col items-start gap-6 md:gap-8 relative w-full">
                                    <p className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#9d9898] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                                        At VFMT Realty, we are a privately held real estate investment firm committed to revitalizing distressed properties across the Midwest.
                                        <br className="hidden md:block" /><br className="hidden md:block" />
                                        <span className="block mt-4 md:mt-0">Our mission goes beyond bricks and mortar — we focus on transforming underutilized buildings into vibrant, income-producing homes that add real value to the neighborhoods we serve. By strategically investing in overlooked markets, we breathe new life into communities while unlocking profitable opportunities for our stakeholders.</span>
                                        <br className="hidden md:block" /><br className="hidden md:block" />
                                        <span className="block mt-4 md:mt-0">With deep expertise in real estate development, asset management, and community-focused housing, our team identifies high-potential properties and manages every phase of the investment cycle — from acquisition and renovation to tenant placement and long-term operations.</span>
                                        <br className="hidden md:block" /><br className="hidden md:block" />
                                        <span className="block mt-4 md:mt-0">We pride ourselves on creating sustainable, affordable housing that meets real community needs while helping our investors build wealth with purpose. At VFMT Realty, we believe that real estate is more than just returns — it's about impact.</span>
                                    </p>

                                    <button className="w-full md:w-auto lg:w-[190px] h-12 md:h-14 bg-[#1663db] rounded-lg text-white text-base md:text-lg font-medium hover:bg-[#1450b8] transition-colors">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[47%] flex flex-col gap-4 order-2 md:order-2">
                            <div className="relative w-full lg:w-[682px] h-[400px] md:h-[500px] lg:h-[657px] mt-6 md:mt-8 lg:mt-0">
                                <div className="z-10 absolute w-[120px] h-[120px] md:w-[150px] md:h-[150px] top-2 left-2 lg:w-[189px] lg:h-[186px] lg:top-0 lg:left-0 rounded-[15px] md:rounded-[20px] overflow-hidden shadow-[0px_0px_20px_#00000030] md:shadow-[0px_0px_34px_#00000040]">
                                    <img className="w-full h-full object-cover" alt="Top Left Image" src="/image-4.png" />
                                </div>

                                <div className="absolute top-[80px] md:top-[100px] left-[7.5%] md:left-[5%] w-[234px] lg:w-[446px] h-[270px] lg:h-[522px] lg:top-[74px] lg:left-[46px] rounded-[15px] md:rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="Main Center Image" src="/image-2.png" />
                                </div>

                                <div className="absolute h-[158px] w-[158px] bottom-[20px] md:bottom-[20px] right-[5%] lg:w-[302px] lg:h-[297px] lg:top-[360px] lg:left-[380px] rounded-[15px] md:rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="Bottom Right Image" src="/image-3.png" />
                                </div>

                                {/* Optional Decorative SVGs - Hidden on mobile for cleaner look */}
                                <div className="absolute block h-auto top-[198px] left-[310px] lg:top-[325px] lg:left-[640px] w-[55px] md:w-[85px]">
                                    <img className="w-full h-full object-cover" alt="Abstract" src="/abstract-line-splash--streamline-beveled-scribbles-1.svg" />
                                </div>
                                <div className="absolute block h-auto top-[-30px] left-[-18px] lg:top-[-47px] lg:left-[-30px] w-[70px] md:w-[85px]">
                                    <img className="w-full h-full object-cover" alt="Abstract" src="/abstract-line-splash--streamline-beveled-scribbles.svg" />
                                </div>
                                <div className="absolute block h-auto top-[325px] left-[116px] lg:top-[565px] lg:left-[295px] w-[70px] md:w-[85px]">
                                    <img className="w-full h-full object-cover" alt="Arrow Splash" src="/arrow-line-head-angled-long--streamline-beveled-scribbles.svg" />
                                </div>
                                <div className="absolute block h-auto top-[35px] left-[230px] lg:top-[10px] lg:left-[440px] w-[70px] md:w-[99px]">
                                    <img className="w-full h-full object-cover" alt="Highlight" src="/highlight-effect-line-3--streamline-beveled-scribbles.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVFMT