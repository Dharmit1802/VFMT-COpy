
import { useRef, useState } from "react"


import AboutVFMT from "./AboutVFMT";
import Corefetures from "./Corefetures";
import WhatWeDo from "./WhatWeDo";
import VFMTReality from "./VFMTReality";
import FAQSection from "./FAQSection";
import Letstogether from "./Letstogether";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

export const FrameByAnima = (): JSX.Element => {

  return (
    <div className="flex flex-col items-start relative w-full">

      {/* About VFMT Realty Section */}
      <AboutVFMT />

      {/* Core Features Section */}
      <Corefetures />


      {/* What We Do Section */}
      <WhatWeDo />
      {/* Why Choose VFMT Realty Section */}
      <VFMTReality/>
      
      {/* FAQ Section */}
      <FAQSection/>

      {/* Let's Work Together Section */}
      <Letstogether/>

      {/* Get in Touch Section */}
     <GetInTouch />

      {/* Footer Section */}
     <Footer />
    </div>
  );
};