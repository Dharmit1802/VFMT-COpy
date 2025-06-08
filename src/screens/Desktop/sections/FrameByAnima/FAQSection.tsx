import React from 'react';
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
  const faqItems = [
    {
      question: "What services does VFMT Realty offer?",
      answer:
        "VFMT Realty offers a comprehensive range of real estate services designed to maximize value and returns for clients. These include asset management, capital investment, property management, and construction oversight. The company also specializes in financial analysis, fund structuring, and REIT management, offering tailored solutions for both individual and institutional investors. With a strategic, data-driven approach, VFMT Realty ensures efficient operations, high tenant satisfaction, and long-term growth through well-executed investment opportunities and hands-on property management",
      isOpen: true,
    },
    {
      question: "How do I get started with investing?",
      answer: "VFMT Realty is a privately held real estate investment firm focused on revitalizing distressed properties across the Midwest. With over $25M in managed assets and 225+ refurbished housing units, VFMT blends community impact with strong financial performance, having already delivered 25% ROI. Their mission is to create vibrant, income-generating homes in overlooked neighborhoods, transforming underutilized properties into valuable community assets. Through deep expertise in development, asset management, and sustainable housing, VFMT offers investors long-term returns while addressing real housing needs. Investing with VFMT means building wealth with purpose.",
      isOpen: false,
    },
    {
      question: "What makes VFMT Realty different from other real estate firms?",
      answer: "VFMT Realty stands out from other real estate firms by combining strong financial returns with a mission-driven approach. Unlike traditional firms focused solely on profit, VFMT prioritizes revitalizing distressed properties to uplift entire communities. With over 15 years of experience, $25M+ in managed assets, and 225+ refurbished units, the firm transforms underutilized spaces into sustainable, income-generating homes. Their end-to-end investment model—from acquisition to long-term operations—ensures quality and consistency. By targeting overlooked Midwest markets, VFMT delivers up to 25% ROI while making a lasting social impact, offering investors both purpose and performance.",
      isOpen: false,
    },
    {
      question: "Do you only work in the Midwest region?",
      answer: "Currently, VFMT Realty focuses its investment and revitalization efforts primarily in the Midwest region. This area offers high-potential, often overlooked markets where the firm can create meaningful community impact while delivering strong returns for investors. By concentrating on the Midwest, VFMT leverages deep local expertise to identify undervalued properties, manage renovations efficiently, and ensure long-term value. However, as the firm grows and opportunities arise, VFMT remains open to expanding into other regions that align with its mission of sustainable development and impactful investing.",
      isOpen: false,
    },
    {
      question: "Can I invest in projects as an individual or do I need to be a company?",
      answer: "Yes, you can invest in VFMT Realty projects as an individual; you don’t need to be a company. VFMT welcomes both individual and institutional investors who are looking to generate strong, long-term returns through real estate. Whether you're a seasoned investor or just starting out, VFMT provides accessible opportunities to participate in professionally managed, high-impact property developments. The firm’s transparent approach, combined with proven success in revitalizing communities, makes it easy for individuals to invest with confidence. VFMT offers a clear path to building wealth while making a positive difference in underserved neighborhoods.",
      isOpen: false,
    },
    {
      question: "How do you ensure high returns on investments?",
      answer: "At VFMT Realty, high returns are ensured through a strategic, hands-on investment approach. The team focuses on acquiring undervalued, distressed properties in high-potential Midwest markets where competition is low and growth potential is high. Each property undergoes careful evaluation, followed by cost-efficient renovations that significantly increase value. VFMT manages every stage—from acquisition and refurbishment to tenant placement and long-term operations—ensuring full control over quality and performance. Their deep market knowledge, disciplined asset management, and commitment to sustainable, income-generating housing allow them to consistently deliver strong, long-term returns—up to 25% ROI—for their investors.",
      isOpen: false,
    },
    {
      question: "What is a REIT and how does VFMT handle it?",
      answer: "A REIT (Real Estate Investment Trust) is a company that owns, operates, or finances income-producing real estate, allowing investors to earn returns without directly managing properties. While VFMT Realty primarily focuses on direct real estate investments and property revitalization, they may leverage REIT structures or similar investment vehicles to pool capital from multiple investors. This approach provides liquidity, diversification, and easier access to real estate markets. VFMT’s expertise in managing assets and renovations ensures that any REIT or pooled investment under their management delivers strong, sustainable returns while maintaining a positive community impact.",
      isOpen: false,
    },
    {
      question: "How can I contact VFMT for a consultation?",
      answer: "You can easily contact VFMT Realty for a consultation by visiting their website and navigating to the Contact Us page, where you’ll find a form to submit your inquiry. Alternatively, you can call their office directly or send an email to their listed address. The team is responsive and ready to discuss investment opportunities, answer your questions, and guide you through the process of partnering with VFMT to transform communities while growing your wealth.",
      isOpen: false,
    },
    {
      question: "Are your services suitable for first-time investors?",
      answer: "Yes, VFMT Realty’s services are well-suited for first-time investors. They offer clear, professionally managed investment opportunities that make entering real estate accessible and straightforward. With a focus on sustainable, income-generating properties and strong returns, VFMT provides guidance and transparency throughout the process. Their experience and support help new investors build confidence, making it easier to start growing wealth while contributing to community revitalization in promising Midwest markets.",
      isOpen: false,
    },
    {
      question: "What kind of construction projects do you manage?",
      answer: "VFMT Realty specializes in managing the renovation and revitalization of distressed residential properties across the Midwest. Their construction projects focus on transforming underutilized or deteriorated buildings into sustainable, affordable, income-generating homes that meet community needs. This includes comprehensive refurbishment—from structural repairs and modern upgrades to enhancing energy efficiency and aesthetics. VFMT oversees every phase of construction to ensure quality, timely completion, and long-term durability, all aimed at maximizing property value and positive neighborhood impact.",
      isOpen: false,
    },
  ];


function FAQSection() {
    return (

        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col h-auto lg:h-[970px] items-center gap-2.5 px-4 lg:px-96 py-12 lg:py-[100px] relative w-full bg-[#fcfcfc]"
        >
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

            <p className="relative w-full lg:w-[804px] lg:text-[20px] text-[14px] [font-family:'Inter_Display-Regular',Helvetica] font-normal text-slate-500 text-lg lg:text-xl text-center tracking-[0] leading-[1.6] lg:leading-7">
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
                  <AccordionTrigger className="flex items-centerjustify-between px-0 py-4 text-left">
                    <span className="[font-family:'Inter_Display-Medium',Helvetica] hover:text-blue-600  font-medium text-blue-800 text-base tracking-[0] leading-6">
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
      </motion.section>

    )
}

export default FAQSection