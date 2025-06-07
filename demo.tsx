import React from "react";

const ImageCollage = () => (
  <div className="w-full flex justify-center items-center">
    <div className="relative w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[682px] aspect-[4/3] md:aspect-auto h-[350px] sm:h-[450px] md:h-[500px] lg:h-[657px]">
      {/* Top Left Image */}
      <div className="z-10 absolute w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] top-2 left-2 rounded-[15px] md:rounded-[20px] overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          alt="Top Left"
          src="/image-4.png"
        />
      </div>

      {/* Main Center Image */}
      <div className="absolute top-[60px] sm:top-[80px] left-[10%] sm:left-[7%] w-[160px] h-[120px] sm:w-[234px] sm:h-[170px] md:w-[320px] md:h-[270px] lg:w-[446px] lg:h-[522px] lg:top-[74px] lg:left-[46px] rounded-[15px] md:rounded-[20px] overflow-hidden shadow-md">
        <img
          className="w-full h-full object-cover"
          alt="Main Center"
          src="/image-2.png"
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] md:h-[158px] md:w-[158px] bottom-[10px] right-[5%] lg:w-[302px] lg:h-[297px] lg:top-[360px] lg:left-[380px] rounded-[15px] md:rounded-[20px] overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          alt="Bottom Right"
          src="/image-3.png"
        />
      </div>

      {/* Decorative SVGs (hidden on mobile) */}
      <div className="hidden md:block absolute h-auto top-[198px] left-[315px] lg:top-[325px] lg:left-[640px] w-[60px] md:w-[85px]">
        <img
          className="w-full h-full object-cover"
          alt="Abstract"
          src="/abstract-line-splash--streamline-beveled-scribbles-1.svg"
        />
      </div>
      <div className="hidden md:block absolute h-auto top-[-30px] left-[-18px] lg:top-[-47px] lg:left-[-30px] w-[70px] md:w-[85px]">
        <img
          className="w-full h-full object-cover"
          alt="Abstract"
          src="/abstract-line-splash--streamline-beveled-scribbles.svg"
        />
      </div>
      <div className="hidden md:block absolute h-auto top-[325px] left-[116px] lg:top-[565px] lg:left-[295px] w-[70px] md:w-[85px]">
        <img
          className="w-full h-full object-cover"
          alt="Arrow Splash"
          src="/arrow-line-head-angled-long--streamline-beveled-scribbles.svg"
        />
      </div>
      <div className="hidden md:block absolute h-auto top-[35px] left-[230px] lg:top-[10px] lg:left-[440px] w-[70px] md:w-[99px]">
        <img
          className="w-full h-full object-cover"
          alt="Highlight"
          src="/highlight-effect-line-3--streamline-beveled-scribbles.svg"
        />
      </div>
    </div>
  </div>
);

export default ImageCollage;
