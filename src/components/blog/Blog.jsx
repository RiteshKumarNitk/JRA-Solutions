import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-1359a57 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1359a57" data-element_type="section">
  <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-column md:col-span-8 md:col-start-3 sm:col-span-10 sm:col-start-2 text-center">
      <div class="section-title-s3">
        <div class="icon">
          <i class="fi flaticon-suitcase"></i>
        </div>
        <span class="block mt-4 text-3xl font-bold text-gray-900">QUALIFIED ATTORNEYS</span>
        <h2 class="text-4xl font-bold text-gray-900">Meet Our Experts</h2>
        <p class="mt-4 text-lg text-gray-700">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
      </div>
    </div>
  </div>
</section>

<section class="team-section">
  <div class="team-grids team-slider grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="grid">
      <div class="img-holder">
        <img class="w-full h-auto" src="wp-content/uploads/2020/02/team-4.jpg" alt=""/>
      </div>
      <div class="details">
        <div class="social flex space-x-2">
          <a href="#" class="text-blue-600"><i class="ti-facebook"></i></a>
          <a href="#" class="text-blue-400"><i class="ti-twitter-alt"></i></a>
          <a href="#" class="text-blue-800"><i class="ti-linkedin"></i></a>
          <a href="#" class="text-red-500"><i class="ti-pinterest"></i></a>
          <a href="#" class="text-pink-600"><i class="ti-instagram"></i></a>
        </div>
        <h3 class="text-xl font-bold mt-4 text-gray-900"><a href="team/oncon-lucy/index.htm">Oncon Lucy</a></h3>
        <p class="mt-2 text-gray-700">Family Consultant</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blog
