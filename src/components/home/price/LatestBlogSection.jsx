import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";
const LatestBlogSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <div className="text-center lg:text-left">
              <Typography className="flex text-[#fff] justify-start mb-3">
                <FaRegLightbulb className="text-4xl  bg-[#c9b38c] shadow-[#f5c97e]  rounded-full p-1 font-md" />
              </Typography>
              <span className="block text-xl lg:text-2xl font-medium text-gray-800 mt-4">
                Latest Blog
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                Check Our Latest Tips &amp; News
              </h2>
              <p className="text-base lg:text-lg text-gray-700 mt-4">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nuncIt showed a lady fitted
              </p>
              <a
                href="#"
                className="inline-block py-3 px-6 bg-[#c9b38c] text-[#fff]  font-medium rounded-none mt-6  transition duration-300"
              >
                More Blog Post
              </a>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="border w-auto h-full border-gray-200 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/5727623/pexels-photo-5727623.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  className="w-full h-auto lg:h-64 object-cover"
                />
                <div className="p-4">
                  <div className="mb-2">
                    <span className=" absolute text-[#fff] bg-[#c9b38c] p-3 bottom-32 left-0   rounded-r-full ">
                      Adovcate Law
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-medium mb-2">
                    <a href="" className="">
                      Canna Law Blog is a forum for discussing the practical
                    </a>
                  </h3>
                  <button
                    class="select-none rounded-none  border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    outlined
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/22608057/pexels-photo-22608057/free-photo-of-raised-arm-holding-flowers-bundle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-full h-auto lg:h-64 object-cover"
                />
                <div className="p-4">
                  <div className="mb-2">
                    <span className=" absolute text-[#fff] bg-[#c9b38c] p-3 bottom-32 left-0   rounded-r-full ">
                      Adovcate Law
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-medium mb-2">
                    <a href="">
                      Journalists devoted to coverage of the Supreme Court
                    </a>
                  </h3>
                  <button
                    class="select-none rounded-none border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    outlined
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
