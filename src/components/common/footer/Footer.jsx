import React from "react";
import "./footer.css";
import img from "../../images/jrapics/jranewwhite.png";
import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <>
      <footer className="bg-[#262B3E] text-center text-surface/75 text-white lg:text-left">
        <div className="flex items-center justify-center border-neutral-200 p-6 bg-[#1C202E] lg:justify-between px-5">
          <div className="flex justify-center space-x-6">
            {/* Add similar <a> elements for other SVG icons */}
            <a href="#!" className=" hover:text-gray-400">
              <Typography className="flex text-[#fff] justify-center mb-3">
                <FaFacebook  className='text-4xl center bg-[#c9b38c] shadow-[#f5c97e]  rounded-full p-1 font-md' />
              </Typography>
            </a>
            <a href="#!" className=" hover:text-gray-400">
              <Typography className="flex text-[#fff] justify-center mb-3">
                <FaLinkedin className='text-4xl center bg-[#c9b38c] shadow-[#f5c97e]  rounded-full p-1 font-md' />
              </Typography>
            </a>
            <a href="#!" className=" hover:text-gray-400">
              <Typography className="flex text-[#fff] justify-center mb-3">
                <FaInstagram className='text-4xl center bg-[#c9b38c] shadow-[#f5c97e]  rounded-full p-1 font-md' />
              </Typography>
            </a>
           
          </div>

          <div className="hidden lg:block">
            <img src={img} alt="" />
          </div>

          <div className="hidden lg:block">
            <div className="font-medium mb-1">News Letter</div>
            <div className="relative flex w-full max-w-full rounded-md">
              <Input
                type="email"
                label="Email Address"
                value={email}
                color="white"
                onChange={onChange}
                className="pr-20"
                containerProps={{ className: '' }}
              />
              <Button
                size="sm"
                color={email ? 'green' : 'white'}
                disabled={!email}
                className="absolute right-1 top-1 rounded"
              >
                Invite
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-8 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Content for Office Address, Useful Links, and Contact sections */}
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">Office Address</h6>
              <div className="font-thin">
                <p className="mb-4">Office 103-105 Jagdish Enclave, Hawa Sadak, Civil Lines, Jaipur, Rajasthan-302006</p>
                <p className="mb-4">Phone: +91-90246-16746, +91-93519-63472, +91-93581-88430</p>
              </div>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">Email Address</h6>
              <div className="font-thin">
                <p className="mb-4">Office 103-105 Jagdish Enclave, Hawa Sadak, Civil Lines, Jaipur, Rajasthan-302006</p>
                <p className="mb-4">Phone: +91-90246-16746, +91-93519-63472, +91-93581-88430</p>
              </div>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">Useful links</h6>
              <div className="grid grid-cols-3 justify-between font-thin">
                <div>
                  <p className="mb-4"><a href="#!">Teams</a></p>
                  <p className="mb-4"><a href="#!">Career</a></p>
                  <p className="mb-4"><a href="#!">Expertise</a></p>
                  <p><a href="#!">Help</a></p>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">Contact</h6>
              <div className="font-thin">
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </span>
                  New York, NY 10012, US
                </p>
                {/* Add similar contact info */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-6 text-start flex  justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-100 md:mb-0">
            &copy; {currentYear} <a href="https://JRAsolutionsss.com/">JRA Legal Solutions</a>. All Rights Reserved.
          </Typography>
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-100 md:mb-0">
            <a href="https://JRAsolutionsss.com/" className="mr-2 font-thin text-sm">Privacy </a>
            <a href="https://JRAsolutionsss.com/" className="mr-2 font-thin">Terms and Conditions </a>
            <a href="https://JRAsolutionsss.com/" className="mr-2 font-thin">Website Policy</a>
            <a href="https://JRAsolutionsss.com/" className="mr-2 font-thin">Sitemap </a>
          </Typography>
        </div>
      </footer>

    </>
  );
};

export default Footer;
