import React from 'react';
import {
  Card,
  CardBody,
  Avatar,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineBriefcase } from "react-icons/hi2";

function TeamCard({ img, name, title }) {
  return (
    <Card className="gap-6" shadow={true} style={{ width: 'full', height: 'auto', marginRight: '1rem', marginLeft: '1rem', marginBottom: '.2rem' }}>
    <CardBody className="text-center">
      <Avatar
        src={img}
        alt={name}
        variant="rectangle"
        size="3xl"
        className="mx-auto mb-16 object-top"
      />
      <Typography variant="h5" color="blue-gray" className="font-medium text-xl mb-2">
        {name}
      </Typography>
      <Typography
        color="blue-gray"
        className="text-base font-semibold text-gray-600 mb-4"
      >
        {title}
      </Typography>
      <div className="flex items-center justify-center gap-2">
        <IconButton variant="text" color="gray">
          <i className="fa-brands fa-twitter text-lg" />
        </IconButton>
        <IconButton variant="text" color="gray">
          <i className="fa-brands fa-linkedin text-lg" />
        </IconButton>
        <IconButton variant="text" color="gray">
          <i className="fa-brands fa-dribbble text-lg" />
        </IconButton>
      </div>
    </CardBody>
  </Card>
  );
}

const members = [
  {
    img: 'https://www.material-tailwind.com/img/avatar1.jpg',
    name: 'Ritesh',
    title: 'Co-Founder',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar2.jpg',
    name: 'Ryan Samuel',
    title: 'Co-Founder',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar5.jpg',
    name: 'Nora Hazel',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar5.jpg',
    name: 'Nora Hazel',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar5.jpg',
    name: 'Nora Hazel',
    title: 'UI/UX Designer',
  },
  {
    img: 'https://www.material-tailwind.com/img/avatar4.jpg',
    name: 'Otto Gonzalez',
    title: 'Marketing Specialist',
  },
];

function TeamSection12() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
            {/* <i className="fa-brands fa-twitter text-red-900 text-3xl" /> */}
          <Typography   className="flex text-[#fff] justify-center mb-3">
            <HiOutlineBriefcase className='text-4xl center bg-[#c9b38c] shadow-[#f5c97e]  rounded-full p-1 font-md'/>
          </Typography>
          <Typography  color="blue-gray" className="text-lg text-md   text-[#c9b38c] ml-2">
          Here Our Best Work
          </Typography>
          <Typography variant="h1" color="blue-gray" className="my-2 !text-2xl lg:!text-4xl">
          Insides & News 
          </Typography>
          <Typography variant="lead" className="mx-auto w-full !text-gray-500 max-w-4xl">
            From visionary leadership to creative talent, and technical wizards, each team member
            plays a pivotal role in delivering the exceptional service and innovative solutions.
          </Typography>
        </div>
        <Slider {...settings} className="mx-auto max-w-full">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TeamSection12;
