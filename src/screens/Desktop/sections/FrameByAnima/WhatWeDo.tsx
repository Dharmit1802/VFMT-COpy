import React from 'react';
import { useRef, useState } from "react"

// Import slick-carousel CSS (usually done globally or in _app.tsx for Next.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider, { Settings } from "react-slick";



function WhatWeDo() {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);



    const slidesToShow = (() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
        }
        return 3;
    })();




    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // disable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
        afterChange: index => setCurrentSlide(index),
    };

    const serviceCards = [
        {
            title: "Housing Development & Reinvestment",
            description: "Creating vibrant, sustainable communities through innovative design and construction.",
            image: "/gemini-generated-image-bgkjtebgkjtebgkj-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
        {
            title: "Strategic Asset & Property Management",
            description: "Maximizing property value and operational efficiency through proactive management.",
            image: "/gemini-generated-image-3wb3eh3wb3eh3wb3-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
        {
            title: "Investor-Focused Growth & Partnerships",
            description: "Building wealth through strategic real estate investments and long-term partnerships.",
            image: "/gemini-generated-image-rafornrafornrafo-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
        {
            title: "Housing Development & Reinvestment",
            description: "Creating vibrant, sustainable communities through innovative design and construction.",
            image: "/gemini-generated-image-bgkjtebgkjtebgkj-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
        {
            title: "Strategic Asset & Property Management",
            description: "Maximizing property value and operational efficiency through proactive management.",
            image: "/gemini-generated-image-3wb3eh3wb3eh3wb3-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
        {
            title: "Investor-Focused Growth & Partnerships",
            description: "Building wealth through strategic real estate investments and long-term partnerships.",
            image: "/gemini-generated-image-rafornrafornrafo-1.png",
            arrowIcon: "/arrow-right copy.png",
        },
    ];

    const isNextDisabled = currentSlide >= serviceCards.length - slidesToShow;
    const isPrevDisabled = currentSlide === 0;

    const handleNext = () => {
        if (!isNextDisabled) {
            sliderRef.current?.slickNext();
        }
    };


    const handlePrev = () => {
        if (!isPrevDisabled) {
            sliderRef.current?.slickPrev();
        }
    };

    return (
        <section className="relative w-full bg-[#0a1a32] py-12 lg:py-[136px]">
            <div className="flex flex-col w-full px-4 max-w-[1440px] mx-auto items-start gap-8 lg:gap-16 relative">
                {/* Header Section */}
                <div className="items-start lg:items-center justify-between flex flex-col lg:flex-row relative w-full gap-8 lg:gap-0">
                    <div className="flex flex-col w-full lg:w-[662px] items-start gap-2 relative">
                        <p className="font-bold text-white text-base">What we do</p>
                        <h2 className="text-3xl lg:text-[52px] font-bold leading-snug lg:leading-[60px]">
                            <span className="text-white">Rebuilding Communities, Growing </span>
                            <span className="text-[#1663db]">Portfolios</span>
                        </h2>
                    </div>

                    {/* Arrows - visible only on lg */}
                    <div className="hidden lg:inline-flex items-center gap-[26px]">
                        <button
                            onClick={handlePrev}
                            disabled={isPrevDisabled}
                            className={`w-[50px] lg:w-[74px] h-[50px] lg:h-[74px] rounded-full border-2 border-white text-white text-3xl lg:text-[45px] flex items-center justify-center text-center transition-transform transition-* duration-150 ease-in-out
    ${isPrevDisabled ? 'opacity-40 cursor-default' : 'hover:bg-blue-600 active:scale-95 active:bg-blue-700 cursor-pointer'}`}
                            aria-label="Previous"
                            type="button"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={isNextDisabled}
                            className={`w-[50px] lg:w-[74px] h-[50px] lg:h-[74px] rounded-full border-2 border-white text-white text-3xl lg:text-[45px] flex items-center justify-center text-center transition-transform transition-* duration-150 ease-in-out
    ${isNextDisabled ? 'opacity-40 cursor-default' : 'hover:bg-blue-600 active:scale-95 active:bg-blue-700 cursor-pointer'}`}
                            aria-label="Next"
                            type="button"
                        >
                            <ChevronRight />
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <Slider ref={sliderRef} {...settings} className="w-full">
                    {serviceCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col w-full sm:w-auto lg:w-[467px] bg-transparent border-none px-2 hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            <div
                                className="w-full h-[316px] bg-white rounded-2xl mx-auto sm:mx-0 "
                            >
                                <img src={card.image} alt={card.title} className="w-full rounded-2xl h-full object-cover" />
                            </div>
                            <div className="flex flex-col items-start mt-[21px] w-full px-2 sm:px-0">
                                <h3 className="text-white text-lg font-medium">{card.title}</h3>
                                <p className="text-[#8193b3] text-sm mt-1">{card.description}</p>
                                <div className="flex items-center gap-[7px] mt-1.5 cursor-pointer">
                                    <span className="text-white text-[15px] font-medium">Read more</span>
                                    <img src={card.arrowIcon} alt="arrow" className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="inline-flex lg:hidden justify-center w-full items-center gap-[26px]">
                    <button
                        onClick={handlePrev}
                        disabled={isPrevDisabled}
                        className={`w-[50px] lg:w-[74px] h-[50px] lg:h-[74px] rounded-full border-2 border-white text-white text-3xl lg:text-[45px] flex items-center justify-center text-center transition-transform transition-* duration-150 ease-in-out
    ${isPrevDisabled ? 'opacity-40 cursor-default bg-transparent' : 'hover:bg-blue-600 active:scale-95 active:bg-blue-700 cursor-pointer'}`}
                        aria-label="Previous"
                        type="button"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={isNextDisabled}
                        className={`w-[50px] lg:w-[74px] h-[50px] lg:h-[74px] rounded-full border-2 border-white text-white text-3xl lg:text-[45px] flex items-center justify-center text-center transition-transform transition-* duration-150 ease-in-out
    ${isNextDisabled ? 'opacity-40 cursor-default bg-transparent' : 'hover:bg-blue-600 active:scale-95 active:bg-blue-700 cursor-pointer'}`}
                        aria-label="Next"
                        type="button"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );

}
export default WhatWeDo