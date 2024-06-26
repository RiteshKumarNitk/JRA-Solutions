import React from "react";
import "./Featured.css";

import TeamSection12 from "./TeamSection12";

const Featured = () => {
  return (
    <>
      <section className="featured background py-16">
        <div className="container mx-auto flex justify-center">
          <div className="w-full md:w-2/3">
            {/* Include your content here */}
            {/* Example content (replace with your actual component) */}
            <TeamSection12 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
