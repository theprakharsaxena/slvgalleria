import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiFillShop } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import LoginUser from "./LoginUser";

const NavbarData = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About Us",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/Contact",
    title: "Contact Us",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setcolor] = useState("#000000");
  const [textColor, setTextColor] = useState("white");
  const [image, setImage] = useState("/images/logoslvgalleria.png");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setcolor("#ffffff");
        setTextColor("#000000");
        setImage("/images/logoslvgalleria.png");
      } else {
        setcolor("#000000");
        setTextColor("#ffffff");
        setImage("/images/logoslvgalleria.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: `${color}`,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1280px] m-auto flex justify-between items-center p-4 text-white">
          <Link to="/">
            <img src={image} width={60} height={60} alt="SLV Galleria Logo" />
          </Link>
          <ul
            style={{ color: `${textColor}` }}
            className="hidden sm:flex items-center"
          >
            {NavbarData.map(({ link, title }, id) => {
              return (
                <li
                  key={id}
                  className="m-4 hover:underline hover:underline-offset-8 font-mono hover:text-pink-500"
                >
                  <Link to={link}>{title}</Link>
                </li>
              );
            })}
            <li className="m-4 font-mono hover:text-pink-500">
              <Link to="/cart" className="flex items-center space-x-2">
                <span>&#8377;0.00</span>
                <HiShoppingBag className="text-xl" />
              </Link>
            </li>
            {/* <li className="m-4 font-mono hover:text-pink-500">
              <Link to="/loginsignup">
                <AiFillShop className="" />
              </Link>
            </li> */}
            <li className="m-4 font-mono hover:text-pink-500">
              {/* <Link to="/loginsignup"> */}
              {/* <FaUserAlt className="" /> */}
              <LoginUser textColor={textColor} />
              {/* </Link> */}
            </li>
          </ul>

          {/* Mobile Button */}
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer hover:text-pink-500 mr-1"
          >
            {nav ? (
              <AiOutlineClose size={20} className="hover:text-pink-500" />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul className="flex flex-col items-center">
              {NavbarData.map(({ link, title }, id) => {
                return (
                  <li
                    key={id}
                    className="m-4 text-4xl hover:underline hover:underline-offset-8 font-mono hover:text-pink-500"
                  >
                    <Link to={link} onClick={handleNav}>
                      {title}
                    </Link>
                  </li>
                );
              })}
              <li className="m-4 text-4xl font-mono hover:text-pink-500">
                <Link to="/cart" className="flex items-center space-x-2">
                  <span>&#8377;0.00</span>
                  <HiShoppingBag />
                </Link>
              </li>
              <li className="m-4 text-4xl font-mono hover:text-pink-500">
                <Link to="/loginsignup">
                  <FaUserAlt />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <p style={{ backgroundColor: `${scrollColor}` }} className="h-0.5"></p> */}
      </div>
    </>
  );
};

export default Navbar;
