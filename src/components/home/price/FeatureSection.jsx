import React from "react";
import { Typography } from "@material-tailwind/react";
import LatestBlogSection from "./LatestBlogSection";
export function FeatureSection() {
  return (
    <section className="lg:py-28 py-10 px-8 ">
      <div className="container mx-auto  text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Features
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Turn your idea into a startup
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-lg !text-gray-500" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates repudiandae totam? Quis mollitia rem cum reprehenderit ea beatae porro
        </Typography>
      </div>
      <LatestBlogSection/>
  
    </section>
  );
}
export default FeatureSection;