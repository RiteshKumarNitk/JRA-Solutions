import React from "react";
// import { IconButton } from "@material-tailwind/react";
import { IoHomeOutline } from "react-icons/io5";

import { Typography } from "@material-tailwind/react";
export function Recent() {
  return (
    <section
      className=" py-16"
      // style={{ fontFamily: "Roboto Slab" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <div className="text-center md:text-left  md:mb-0 flex items-center mb-5">
              <Typography className="flex text-[#fff] justify-center items-center">
                <IoHomeOutline className="text-4xl center bg-[#c9b38c] shadow-[#f5c97e] items-center  rounded-full p-1 font-md" />
              </Typography>
             
                <h2 className="text-md ali text-[#c9b38c] ml-2">
                  About Juristic
                </h2>
             
            </div>
            <p className="text-lg text-gray-700">
              We are the most popular law firm with various law services!
            </p>
            <p className="text-base text-gray-700 mt-4">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum.
            </p>
            <a
              href=""
              className=" text-[#c9b38c] inline-block mt-4 hover:text-[#8b7a5c] transition duration-150 ease-out hover:ease-in"
            >
              Read More About Us
              <i className="fas fa-arrow-right px-2" />
            </a>
          </div>
          <div className="w-full md:w-1/3">
            <div className="text-center md:text-left">
              <img
                src="https://juristic.themegeniuslab.com/wp-content/uploads/2020/01/about-min.jpg"
                alt="About Image"
                className="w-full  shadow-lg mb-4 h-[28rem]  rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <div className="text-center md:text-left mt-8 md:mt-0">
              <p className="text-base text-gray-700">
                <span className="text-3xl font-bold">M</span>tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus. Donec vitae sapien libero.
              </p>
              <div className="mt-8">
                <div className="text-gray-800 font-bold">Michel Jhon</div>
                <div className="text-gray-600">- CEO of the company</div>
              </div>
              <div className="mt-4">
                <img
                  src="https://juristic.themegeniuslab.com/wp-content/uploads/2020/01/signature-min.png"
                  alt="Signature"
                  className="w-32 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recent;
