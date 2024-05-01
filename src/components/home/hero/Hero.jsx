import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Hero = ({ slides }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Carousel
        loop={true}
        autoplay={true}
        autoplayInterval={6000}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-1/2 z-5 transform -translate-x-1/2 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        responsive={[
          {
            breakpoint: "sm",
            options: {
              slidesPerView: 1,
            },
          },
          {
            breakpoint: "md",
            options: {
              slidesPerView: 2,
            },
          },
          {
            breakpoint: "lg",
            options: {
              slidesPerView: 3,
            },
          },
        ]}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-8 b-6 text-white bg-black bg-opacity-50">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              {slide.button && (
                <Button
                  size="lg"
                  className="px-6 py-3 bg-[#c9b38c] hover:bg-[#b99c69] text-white"
                >
                  {slide.button.text}
                </Button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
