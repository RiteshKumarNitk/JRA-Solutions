import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
const LatestBlogSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <div className="text-center lg:text-left">
              <div className="text-[#f5c97e]">
                {/* <i className="fi flaticon-light-bulb text-4xl lg:text-5xl"></i> */}
                <FaRegLightbulb />
              </div>
              <span className="block text-xl lg:text-2xl font-medium text-gray-800 mt-4">Latest Blog</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Check Our Latest Tips &amp; News</h2>
              <p className="text-base lg:text-lg text-gray-700 mt-4">
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt showed a lady fitted
              </p>
              <a href="#" className="inline-block py-3 px-6 bg-[#c9b38c] text-[#fff]  font-medium rounded-none mt-6  transition duration-300">
                More Blog Post
              </a>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5727623/pexels-photo-5727623.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  className="w-full h-auto lg:h-64 object-cover"
                />
                <div className="p-4">
                  <div className="mb-2">
                    <span className=" text-[#fff] bg-[#c9b38c]">
                    Adovcate Law

                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    <a href="canna-law-blog-is-a-forum-for-discussing-the-practical" className="hover:underline">Canna Law Blog is a forum for discussing the practical</a>
                  </h3>
                  <a
                    href="canna-law-blog-is-a-forum-for-discussing-the-practical"
                    className="text-[#f5c97e] hover:text-[#b6955d] inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/22608057/pexels-photo-22608057/free-photo-of-raised-arm-holding-flowers-bundle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-full h-auto lg:h-64 object-cover"
                />
                <div className="p-4">
                <span className=" text-[#fff] bg-[#c9b38c]">
                    Adovcate Law

                    </span>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2">
                    <a href="provide-insight-into-how-canna-businesspeople-can-use" className="hover:underline">Journalists devoted to coverage of the Supreme Court</a>
                  </h3>
                  <a
                    href="provide-insight-into-how-canna-businesspeople-can-use"
                    className="text-[#f5c97e] hover:text-[#b6955d] inline-block"
                  >
                    Read More
                  </a>
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
