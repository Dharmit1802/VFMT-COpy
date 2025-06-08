import React from 'react';
import { motion } from "framer-motion";
  import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

function GetInTouch() {
    return (
 <section className="relative w-full h-auto lg:h-[699px] py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row max-w-[1440px] items-start lg:items-center justify-between relative lg:top-[100px] mx-auto px-4 gap-8 lg:gap-0">
          <div className="relative w-full lg:w-[651px]">
            <div className="flex flex-col w-full lg:w-[651px] items-start gap-9 relative">
              <div className="flex flex-col items-start gap-[26px] relative w-full">
                <div className="flex flex-col items-start gap-3 relative w-full">
                  <h2 className="relative w-full mt-[-1.00px] [font-family:'Inter_Display-Bold',Helvetica] font-bold text-blue-400 text-3xl lg:text-[42px] tracking-[0] leading-[1.2] lg:leading-[55px]">
                    Get in Touch With Us
                  </h2>

                  <p className="font-light text-slate-600 text-[14px] lg:text-[18px] md:text-[16px] leading-[1.75rem] tracking-normal font-['Inter'] max-w-[800px]">
                    We’d love to hear from you. Whether you're an investor, property owner, or curious about our services — reach out today and let’s build something impactful together
                  </p>

                </div>
              </div>

              <div className="flex flex-col h-auto lg:h-[317px] items-start gap-[30px] relative w-full">
                <div className="flex items-start gap-3 relative w-full">
                  <div className="flex flex-col w-9 h-9 items-center relative">
                    <div className="flex w-9 h-9 items-center justify-center relative bg-[#2563eb33] rounded-[14998.5px]">
                      <img
                        src="/vuesax-bold-building-4.svg"     // <-- change this to your image path
                        alt="Custom Icon"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full lg:w-[603px] items-start relative">
                    <div className="flex flex-col items-start gap-2 relative w-full">
                      <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#020817] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        Our Office
                      </h3>

                      <div className="flex flex-col items-start gap-4 relative w-full">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Light',Helvetica] text-[14px] lg:text-[16px] font-light text-slate-500 text-base tracking-[0] leading-[22px]">
                          VFMT Realty Investment Group 1234 Midtown Avenue, Suite 202
                          <br /> St. Louis, MO 63101, USA
                        </p>

                        <p className="w-full [font-family:'Inter_Display-Light',Helvetica] font-light text-slate-500 text-base leading-[22px] relative mt-[-1.00px] tracking-[0]">
                          Harborstone Capital Partners 5678 Lakeshore Boulevard, Suite 405
                          <br />
                          Chicago, IL 60601, USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 relative w-full">
                  <div className="flex flex-col w-9 h-9 items-center relative">
                    <div className="flex w-9 h-9 items-center justify-center relative bg-[#2563eb33] rounded-[14998.5px]">
                      <img
                        src="/vuesax-bold-call.svg"     // <-- change this to your image path
                        alt="Custom Icon"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full lg:w-[603px] items-start relative">
                    <div className="flex flex-col items-start gap-1 relative w-full">
                      <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#020817] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        Phone number
                      </h3>

                      <p className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Light',Helvetica] font-light text-slate-500 text-base tracking-[0] leading-[22px] whitespace-nowrap">
                        +1 (314) 555-7890
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 relative w-full">
                  <div className="flex flex-col w-9 h-9 items-center relative">
                    <div className="flex w-9 h-9 items-center justify-center relative bg-[#2563eb33] rounded-[14998.5px]">
                      <img
                        src="/vuesax-bold-sms.svg"     // <-- change this to your image path
                        alt="Custom Icon"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full lg:w-[603px] items-start relative">
                    <div className="flex-col items-start gap-1.5 flex relative w-full">
                      <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-SemiBold',Helvetica] font-semibold text-[#020817] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        Email Address
                      </h3>

                      <p className="relative w-full mt-[-1.00px] [font-family:'Inter_Display-Light',Helvetica] font-light text-slate-500 text-base tracking-[0] leading-[22px]">
                        hello@vfmtrealty.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="flex flex-col w-full lg:w-[547px] items-start gap-6 p-[33px] relative bg-white rounded-xl overflow-hidden border border-solid border-slate-200 shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a]">
            <CardContent className="p-0 w-full">
              <div className="flex-col flex items-start relative w-full">
                <h3 className="w-full [font-family:'Inter_Display-Bold',Helvetica] font-bold text-[#020817] text-xl leading-7 relative mt-[-1.00px] tracking-[0]">
                  Contact us
                </h3>
              </div>

              <div className="flex flex-col items-start gap-5 relative w-full mt-6">
                <div className="flex flex-col h-[164px] items-start justify-center gap-5 relative w-full">
                  <div className="flex flex-col h-[72px] items-start gap-2 relative w-full">
                    <div className="flex items-center relative w-full">
                      <label className="inline-flex flex-col items-start relative">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#020817] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Full Name <span className="text-blue-600">*</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex flex-col items-start relative w-full">
                      <div className="relative w-full h-11 bg-slate-50 rounded-md overflow-hidden border border-solid border-slate-200 flex items-center">
                        <span className="absolute left-3.5 top-3.5">
                          <img
                            className="w-4 h-4"
                            alt="User icon"
                            src="/svg-8.svg"
                          />
                        </span>
                        <Input
                          className="h-11 pl-10 bg-slate-50 border-none"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col h-[72px] items-start gap-2 relative w-full">
                    <div className="flex items-center relative w-full">
                      <label className="inline-flex flex-col items-start relative">
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#020817] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          Work Email <span className="text-blue-600">*</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex flex-col h-11 items-start relative w-full">
                      <div className="relative w-full h-11 bg-slate-50 rounded-md overflow-hidden border border-solid border-slate-200 flex items-center">
                        <span className="absolute left-3.5 top-3.5">
                          <img
                            className="w-4 h-4"
                            alt="Email icon"
                            src="/svg-11.svg"
                          />
                        </span>
                        <Input
                          className="h-11 pl-10 bg-slate-50 border-none"
                          placeholder="john@lawfirm.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-[133px] items-start gap-[9.5px] pt-[2.5px] pb-1.5 px-0 relative w-full">
                  <label className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-[#020817] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    Message
                  </label>

                  <Textarea
                    className="h-[101px] p-[9px] bg-slate-50 rounded-md border border-solid border-slate-200 [font-family:'Inter_Display-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5"
                    placeholder="Tell us about your current pain points..."
                  />
                </div>

                <Button className="h-11 w-full bg-blue-600 rounded-md shadow-[0px_10px_15px_-3px_#2563eb33]
  [font-family:'Inter_Display-Medium',Helvetica] font-medium text-slate-50 text-sm text-center tracking-[0] leading-5
  transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
}

export default GetInTouch