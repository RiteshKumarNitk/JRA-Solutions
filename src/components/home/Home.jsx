import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"

import Recent from "./recent/Recent"
import Team from "./team/Team"
import img from "../images/jra/group1.jpeg";
import img2 from "../images/jra/group2.jpeg";

const slidesData = [
  {
    image: img,
    title: "Information Text 1",
    description: "This is some additional information for slide 1.",
    button: {
      text: "Learn More",
    },
  },
  {
    image: img2,
    title: "Information Text 2",
    description: "Explore further details for slide 2.",
    button: {
      text: "Click Here",
    },
  },
];
const Home = () => {
  return (
    <>
      <Hero  slides={slidesData}/>
      <Recent />
      <Featured />
      <Team />
      {/* <Awards /> */}
      {/* <Price /> */}
      {/* <Location /> */}
    </>
  )
}

export default Home
