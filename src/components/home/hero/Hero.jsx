import React from "react";
import { Carousel } from "@material-tailwind/react";
import "./hero.css";
import { Button } from "@material-tailwind/react";

const Hero = ({ slides }) => {
  return (
    <div className="relative h-[91vh] overflow-hidden">
      <Carousel
        className="h-full"
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
          <div key={index} className="relative h-[91vh] md:h-[91vh] w-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-[full] w-full object-cover"
            />
            <div className="absolute bottom-64 left-32 text-white">
              <h2 className="text-6xl font-bold">{slide.title}</h2>
              <p className="mt-4 text-lg">{slide.description}</p>
              {slide.button && (
                <Button size="lg" className="mt-4 px-4 py-2 bg-[#c9b38c] hover:bg-[#b99c69] text-white">
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
