import React from 'react';

function AboutVFMT() {
    return (
        <section className="flex justify-center items-center w-full bg-white">
            <div className="flex flex-col md:flex-row justify-center items-center w-full px-[10px] max-w-[1440px] mx-auto py-[30px] md:py-[60px] lg:py-[100px] gap-[24px]">
                <div className="h-full w-full">
                    <div className="flex flex-col items-center justify-between lg:flex-row gap-[24px]">
                        <div className="w-full flex flex-col gap-[24px] lg:w-[47%] order-1 md:order-1">
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
                        <div className="w-full h-full items-center justify-center lg:w-[47%] flex flex-col gap-4 order-2 md:order-2">
                            <div className="relative w-full h-auto mt-6 md:mt-8 lg:mt-0">
                               <img src='/Group1.webp'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVFMT