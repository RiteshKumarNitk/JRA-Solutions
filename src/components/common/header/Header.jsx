import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  SquaresPlusIcon,
 
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import img from "../../images/jrapics/jranewwhite.png";
// const menuItems = [
//   {
//     title: "@material-tailwind/html",
//     description:
//       "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
//   }
// ];
const navListMenuItems = [
  {
    title: "About Us",
    description: "Find the perfect solution for your needs.",
    path: "/aboutUs",
  },
  {
    title: "Teams",
    description: "Find the perfect solution for your needs.",
    path: "/Teams",
  },

];

const navListMenuItemsInsights = [
  {
    title: "Articles",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "/articles",
  },
  {
    title: "NewsLetter",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    path: "/Newsltr",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ title, path }, key) => (
      <Link to={path} key={key}>
        <MenuItem className="  ">
          <div>
            <menuitems
              variant="h6"
              color="blue-gray"
              className=" items-start text-sm font-bold"
            >
              {title}
            </menuitems>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-100"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About Us
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListMenuInsights() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItemsInsights.map(
    ({  title, path }, key) => (
      <Link to={path} key={key}>
        <MenuItem className=" flex   ">
          {/* <div className="items-start flex rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div> */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  // const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link} // Use Link instead of a
        to="/" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium text-gray-100"
      >
        <ListItem className="flex items-center gap-2 py-2">Home</ListItem>
      </Typography>
      <NavListMenu />
   
      <Typography
        as={Link} // Use Link instead of a
        to="/Media" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium text-gray-100"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Media
        </ListItem>
      </Typography>
      <Typography
        as={Link} // Use Link instead of a
        to="/Blog" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium text-gray-100"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
        Blog
        </ListItem>
      </Typography>
      <Typography
        as={Link} // Use Link instead of a
        to="/Career" // Specify the home path
        variant="small"
        color="blue-gray"
        className="font-medium text-gray-100"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Career</ListItem>
      </Typography>

      <NavListMenuInsights />
      <Typography
        as={Link} // Use Link instead of a
        to="/Contact" // Specify the contact path
        variant="small"
        color="blue-gray"
        className="font-medium text-gray-100"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Content us
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-[#262b3e] shadow-md">
      <Navbar className="mx-auto shadow-none border-none px-6 py-2 bg-[#262b3e]">
        <div className="flex items-center justify-between text-blue-gray-100">
          <a
            href="#"
            className="flex title-font font-medium items-center w-auto h-16 text-gray-100 mb-4"
          >
            <img src={img} alt="" />
          </a>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Typography
              as={Link} // Use Link instead of a
              to="/contact" // Specify the contact path
              variant="small"
              color="blue-gray"
              className="font-medium text-gray-100"
            >
              {/* <ListItem className="flex items-center gap-2 py-2 pr-4">
                Contact Us
              </ListItem> */}
              <Button
                size="md"
                fullWidth
                className="bg-[#c9b38c] hover:bg-[#b99c69]"
              >
                Contect Us
              </Button>
            </Typography>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Typography
              as={Link} // Use Link instead of a
              to="/Contact" // Specify the contact path
              variant="small"
              color="blue-gray"
              className="font-medium text-gray-100"
            >
             
              <Button variant="gradient" size="sm" fullWidth>
                Contect Us
              </Button>
            </Typography>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
