import React, { useState } from "react";
import { BiUpArrow, BiRightArrow } from "react-icons/bi";

const Dropdown = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-b-2 border-gray-300">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg">{title}</h3>
        <span
          className={`transition-transform ${
            isOpen ? "transform rotate-50" : "transform rotate-0"
          }`}
        >
          {isOpen ? <BiUpArrow /> : <BiRightArrow />}
        </span>
      </div>
      {isOpen && (
        <div className="faq-dropdown__description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
