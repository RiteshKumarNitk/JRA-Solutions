import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Information Text 1",
    description: "This is some additional information for slide 1.",
    button: {
      text: "Learn More",
    },
  },
  {
    image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
