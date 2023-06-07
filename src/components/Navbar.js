import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
      className="text-[#333333] bg-white leading-6 justify-between flex items-center py-3 ps-5 pe-10 fixed left-0 right-0 top-0"
    >
      <Link to="/">
        <img src="/images/logoslvgalleria.png" alt="Logo" className="w-28" />
      </Link>
      <div className="flex space-x-10 text-[#305366] text-lg">
        <Link className="hover:text-green-700" to="/">
          Home
        </Link>
        <Link className="hover:text-green-700" to="/about">
          About Us
        </Link>
        <Link className="hover:text-green-700" to="/about">
          Services
        </Link>
        <Link className="hover:text-green-700" to="/contact">
          Contact
        </Link>
        <Link className="hover:text-green-700" to="/cart">
          <div className="flex items-center">
            ₹ 101 <HiOutlineShoppingBag className="text-purple-500 text-2xl" />
          </div>
        </Link>
        <Link className="hover:text-green-700" to="/loginsignup">
          Login/SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
