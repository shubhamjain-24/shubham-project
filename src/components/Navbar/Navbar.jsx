import React from "react";
// import logo from "../../asset/logo.png";
import logo from "../../asset/logo2.svg";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import "./Navbar.css";

const Navbar = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <div className="min-h-32 justify-center lg:flex items-center hidden md:flex xl:flex Navbar_mainContainer">
        <div className="lg:max-w-[900px] md:max-w-[700px] h-full w-full">
          <ul className="flex justify-between items-center lg:text-2xl md:text-2xl text-gray-900 font-thin Navbar_itemsContainer">
            <NavLink to="/about">
              <li className="cursor-pointer hover:text-gray-600">Our Story</li>
            </NavLink>
            <NavLink to="/shop">
              <li className="cursor-pointer hover:text-gray-600">Shop</li>
            </NavLink>
            <Link to={"/"} className="w-40 h-full cursor-pointer">
              <img src={logo} alt="logo" loading="lazy" />
            </Link>
            <NavLink to="/blog">
              <li className="cursor-pointer hover:text-gray-600">Eco Tales</li>
            </NavLink>
            <NavLink to="/contactus">
              <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="lg:hidden md:hidden xl:hidden flex min-h-16 justify-between items-center p-5 pt-0 pb-0 relative">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="w-28 h-16 object-contain" />
        </Link>
        <GiHamburgerMenu className="text-xl hamburger-icon" onClick={openDrawerRight} />

        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Link to={"/"} onClick={closeDrawerRight}>
              <img src={logo} alt="logo" className="w-28 h-16 object-contain" />
            </Link>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          <div className="w-full flex justify-start items-center flex-col gap-10 mt-10">
            <Typography
              color="gray"
              className="mb-8 pr-4 font-thin text-xl cursor-pointer"
            >
              <NavLink to="/about" onClick={closeDrawerRight}>Our Story</NavLink>
            </Typography>
            <Typography
              color="gray"
              className="mb-8 pr-4 font-thin text-xl cursor-pointer"
            >
              <NavLink to="/shop" onClick={closeDrawerRight}>Shop</NavLink>
            </Typography>
            <Typography
              color="gray"
              className="mb-8 pr-4 font-thin text-xl cursor-pointer"
            >
              <NavLink to="/blog" onClick={closeDrawerRight}>Eco Tales</NavLink>
            </Typography>
            <Typography
              color="gray"
              className="mb-8 pr-4 font-thin text-xl cursor-pointer"
            >
              <NavLink to="/contactus" onClick={closeDrawerRight}>Contact Us</NavLink>
            </Typography>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
