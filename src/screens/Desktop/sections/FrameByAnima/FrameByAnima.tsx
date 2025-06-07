
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useRef, useState } from "react"

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import AboutVFMT from "./AboutVFMT";
import Corefetures from "./Corefetures";
import WhatWeDo from "./WhatWeDo";

export const FrameByAnima = (): JSX.Element => {
  const faqItems = [
    {
      question: "What services does VFMT Realty offer?",
      answer:
        "VFMT Realty offers a comprehensive range of real estate services designed to maximize value and returns for clients. These include asset management, capital investment, property management, and construction oversight. The company also specializes in financial analysis, fund structuring, and REIT management, offering tailored solutions for both individual and institutional investors. With a strategic, data-driven approach, VFMT Realty ensures efficient operations, high tenant satisfaction, and long-term growth through well-executed investment opportunities and hands-on property management",
      isOpen: true,
    },
    {
      question: "How do I get started with investing?",
      answer: "",
      isOpen: false,
    },
    {
      question: "What makes VFMT Realty different from other real estate firms?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Do you only work in the Midwest region?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Can I invest in projects as an individual or do I need to be a company?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How do you ensure high returns on investments?",
      answer: "",
      isOpen: false,
    },
    {
      question: "What is a REIT and how does VFMT handle it?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How can I contact VFMT for a consultation?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Are your services suitable for first-time investors?",
      answer: "",
      isOpen: false,
    },
    {
      question: "What kind of construction projects do you manage?",
      answer: "",
      isOpen: false,
    },
  ];


  const benefits = [
    "Proven Expertise in real estate and financial operations",
    "Community-Centered Vision focused on local impact",
    "Reliable Investment Returns through strategic planning",
    "Commitment to Innovation & Growth across all projects",
  ];

  return (
    <div className="flex flex-col items-start relative w-full">

      {/* About VFMT Realty Section */}
      <AboutVFMT />

      {/* Core Features Section */}
      <Corefetures />


      {/* What We Do Section */}
      <WhatWeDo />
      {/* Why Choose VFMT Realty Section */}
      <section className="relative w-full bg-gray-00 overflow-hidden py-12">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-start w-full max-w-[1440px] mx-auto h-auto lg:h-[1136px] px-4 lg:px-4">

          {/* Text Section */}
          <div className="relative z-10 flex flex-col w-full lg:w-1/2 h-full justify-center gap-12 lg:py-0">
            <div className="flex flex-col items-start gap-[42px] lg:gap-[58px] w-full">
              <div className="flex flex-col items-start gap-8 lg:gap-12 w-full">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="w-full lg:w-[536px] mt-[-1px] [font-family:'Inter_Display-Bold',Helvetica] font-bold text-gray-900 text-3xl lg:text-[56px] tracking-[-0.84px] leading-[1.2] lg:leading-[64px]">
                    Why Choose VFMT Realty?
                  </h2>

                  <p className="w-full [font-family:'Inter_Display-Light',Helvetica] font-light text-gray-700 text-base lg:text-lg tracking-[0] leading-[1.6] lg:leading-[26px]">
                    At VFMT Realty Investment Group, we blend industry expertise with a community-driven approach to real estate. Our team specializes in asset management, financial modeling, and deal structuring to deliver sustainable housing solutions while maximizing returns. We are dedicated to revitalizing neighborhoods and transforming the Midwest real estate landscape through strategic innovation
                  </p>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex w-full lg:w-[554px] items-center gap-4"
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

              <Button className="w-full h-12 lg:w-auto inline-flex items-center justify-center gap-3 px-8 py-0 bg-primary-500 rounded-[7px] text-gray-00 text-[18px] font-medium leading-[56px]">
                Show More
                <img
                  className="w-6 h-6"
                  alt="Arrow right"
                  src="/outlined-32-arrowright.svg"
                />
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
                    <img className="absolute w-[75px] h-6 top-2 left-1" alt="Group" src="/group-5.png" />
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
                    <img className="absolute w-20 h-[26px] top-[7px] left-0" alt="Group" src="/group-5.png" />
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


      {/* FAQ Section */}
      <section className="flex flex-col h-auto lg:h-[1076px] items-center gap-2.5 px-4 lg:px-96 py-12 lg:py-[100px] relative w-full bg-[#fcfcfc]">
        <div className="flex flex-col max-w-[1400px] items-center gap-[50px] px-0 lg:px-8 py-0 relative w-full">
          <div className="flex flex-col w-full lg:w-[1152px] items-center gap-4 relative">
            <div className="flex flex-col items-center relative w-full">
              <div className="flex flex-col items-center gap-3.5 relative w-full">
                <h2 className="relative w-full mt-[-1.00px] [font-family:'Inter_Display-Bold',Helvetica] text-2xl lg:text-4xl text-center tracking-[0] leading-[1.2] lg:leading-10">
                  <span className="font-bold text-[#1663db]">Have questions?</span>
                  <span className="font-bold text-[#020817]"> We've got answers.</span>
                </h2>
              </div>
            </div>

            <p className="relative w-full lg:w-[804px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-slate-500 text-lg lg:text-xl text-center tracking-[0] leading-[1.6] lg:leading-7">
              Whether you're interested in investment opportunities, property management, or our full-service offerings, we're here to help you make informed decisions
            </p>
          </div>

          <div className="flex flex-col max-w-screen-md w-full lg:w-[768px] items-start relative">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="flex items-center justify-between px-0 py-4 text-left">
                    <span className="[font-family:'Inter_Display-Medium',Helvetica] font-medium text-blue-800 text-base tracking-[0] leading-6">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pb-4">
                    <p className="[font-family:'Inter_Display-Regular',Helvetica] font-normal text-[#77808f] text-sm tracking-[0] leading-[22px]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}

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

                  <p className="font-display max-w-[733px] font-light text-[18px] text-[#42526B] leading-[26px] tracking-[0]">
                    Cras at pellentesque eros. Nullam vitae sapien et felis eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien. Praesent nec mattis enim. Mauris a laoreet purus.
                  </p>
                </div>
              </div>

              <button className="w-[225px] bg-[#0B63E5] text-white h-[56px] rounded-[7px]">
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



      {/* Get in Touch Section */}
      <section className="relative w-full h-auto lg:h-[699px] py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row max-w-[1440px] items-start lg:items-center justify-between relative lg:top-[100px] mx-auto px-4 gap-8 lg:gap-0">
          <div className="relative w-full lg:w-[651px]">
            <div className="flex flex-col w-full lg:w-[651px] items-start gap-9 relative">
              <div className="flex flex-col items-start gap-[26px] relative w-full">
                <div className="flex flex-col items-start gap-3 relative w-full">
                  <h2 className="relative w-full mt-[-1.00px] [font-family:'Inter_Display-Bold',Helvetica] font-bold text-blue-400 text-3xl lg:text-[42px] tracking-[0] leading-[1.2] lg:leading-[55px]">
                    Get in Touch With Us
                  </h2>

                  <p className="font-light text-slate-600 text-lg leading-[1.75rem] tracking-normal font-['Inter'] max-w-[800px]">
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
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter_Display-Light',Helvetica] font-light text-slate-500 text-base tracking-[0] leading-[22px]">
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
                          defaultValue="John Smith"
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
                          defaultValue="john@lawfirm.com"
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
                    defaultValue="Tell us about your current pain points..."
                  />
                </div>

                <Button className="h-11 w-full bg-blue-600 rounded-md shadow-[0px_10px_15px_-3px_#2563eb33] [font-family:'Inter_Display-Medium',Helvetica] font-medium text-slate-50 text-sm text-center tracking-[0] leading-5">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full bg-[#0b1a33] flex flex-col justify-start pt-12 lg:pt-[131px] pb-0">
        <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start gap-[32px] md:gap-[60px] lg:gap-[100px] relative px-4">
          <div className="w-full grid grid-cols-1 gap-y-[32px] lg:grid-cols-[minmax(0,550px)_minmax(0,306px)_1fr] lg:gap-[72px]">


            {/* Emails Section */}
            <div className="flex flex-col gap-4 max-w-full">
              {/* Logo */}
              <div className="flex items-center gap-1 mt-[-1px]">
                <span className="text-white text-[29.4px] leading-[44px] tracking-[0] font-['Space_Grotesk'] font-bold">VFMT</span>
                <span className="text-white text-[42.2px] leading-[44px] font-['Space_Grotesk'] font-medium">.</span>
              </div>
              {/* Description */}
              <p className="text-[#d7d1d1] text-lg font-normal leading-relaxed font-['Space_Grotesk'] max-w-[900px]">
                Welcome to our interior design agency! Our team of experienced designers and decorators is passionate about creating beautiful, functional spaces that enhance our clients' lives. Welcome to our interior design agency!
              </p>
              {/* Email */}
              <div className="mt-8 lg:mt-[40px]">
                <span className="text-white text-3xl lg:text-[55px] leading-[1.2] lg:leading-[66px] font-['Space_Grotesk'] font-bold">info@email.com</span>
              </div>
            </div>

            {/* Menu Section */}
            <div className="flex flex-col items-start gap-[25px] pt-0 pb-[1.5px] px-0">
              {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "BLOG", "CONTACT US"].map((item, index) => (
                <div key={index} className="inline-flex flex-col items-start">
                  <span className="text-white text-base leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col items-start gap-8">
              {/* Location */}
              <div className="flex items-start gap-2">
                <img className="w-3 h-4 mt-1" alt="Location icon" src="/img.svg" />
                <div className="flex flex-col">
                  <span className="text-[#c1c1c1] text-lg lg:text-[22px] leading-[1.4] lg:leading-[30.8px] font-normal font-['Space_Grotesk']">
                    901 N Pitt Str., Suite 170 Alexandria,<br />NY, USA
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <img className="w-4 h-4" alt="Phone icon" src="/img-2.svg" />
                <span className="text-[#c1c1c1] text-lg lg:text-[22px] leading-[1.4] lg:leading-[30.8px] font-normal font-['Space_Grotesk']">(406) 555-0120</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <img className="w-4 h-4" alt="Email icon" src="/img-1.svg" />
                <span className="text-[#c1c1c1] text-lg lg:text-[22px] leading-[1.2] lg:leading-[26px] font-normal font-['Space_Grotesk']">hello@vfmtrealty.com</span>
              </div>
            </div>
          </div>

          {/* Bottom: Links and Copyright */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-4 lg:gap-0 lg:mt-[72px]">
            <div className="flex items-center gap-5 w-full lg:w-auto">
              <span className="text-[#c1c1c1] text-base lg:text-lg leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap">Terms & Condition</span>
              <span className="text-[#c1c1c1] text-base lg:text-lg leading-6 font-['Space_Grotesk'] font-medium whitespace-nowrap">Privacy Policy</span>
            </div>
            <span className="text-[#c1c1c1] text-base lg:text-lg leading-[1.3] lg:leading-[23.4px] font-['Space_Grotesk'] font-medium whitespace-nowrap">Copyright @2025, All Right reserved</span>
          </div>

          <div className="w-full flex justify-center items-end mt-[60px] lg:mt-[20px] gap-[5px] overflow-hidden relative h-[278px] lg:h-[271px]">
            {/* Left Image */}
            <img
              src="/vector-2.svg"
              alt="Cityscape Left"
              className="w-[50%] h-full object-cover object-[100%_bottom] lg:object-center"
            />

            {/* Gap between images */}
            <div className="w-2 sm:w-6 lg:w-12"></div>

            {/* Right Image flipped */}
            <img
              src="/vector-2.svg"
              alt="Cityscape Right"
              className="w-[50%] h-full object-cover object-[100%_bottom] lg:object-center scale-x-[-1]"
            />
          </div>
        </div>

        {/* Footer bottom cityscape images */}

      </footer>





    </div>
  );
};