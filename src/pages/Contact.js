import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Dropdown from "../components/Dropdown";

const Contact = () => {
  return (
    <>
      <h1 className="flex justify-center text-4xl py-20 bg-[#D9D9D97A]">
        Get In Touch
      </h1>
      <div className="bg-[#305366] py-10 px-20 gap-20 grid grid-cols-3">
        <div className="bg-white flex flex-col justify-center items-center py-8">
          <IoCallOutline className="text-red-400 text-2xl mb-4" />
          <h5>+91 98977 01719</h5>
          <h5>+91 82794 08704</h5>
        </div>
        <div className="bg-white flex flex-col justify-center items-center py-8">
          <CiMail className="text-red-400 text-2xl mb-4" />
          <h5>info.slvgalleria@gmail.com</h5>
        </div>
        <div className="bg-white flex flex-col justify-center items-center py-8">
          <IoLocationOutline className="text-red-400 text-2xl mb-4" />
          <h5>Bada Bazaar, Bareilly</h5>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-3xl">Frequently Asked Questions!</h1>
        <h4 className="text-sm">General asked quires about our Platform</h4>
      </div>
      <div className="grid grid-cols-2 gap-20 px-32 mb-20">
        <div className="flex flex-col space-y-6">
          <Dropdown
            title="How can I sell my paintings on your platform?"
            description="Answer to question 1 goes here."
          />
          <Dropdown
            title="What are the requirements for joining as an artist?"
            description="Answer to question 1 goes here."
          />
          <Dropdown
            title="How do you ensure the safety of my artwork during shipping?"
            description="Answer to question 1 goes here."
          />
        </div>
        <div className="flex flex-col space-y-6">
          <Dropdown
            title="How do I receive payment for my sold paintings?"
            description="Answer to question 2 goes here."
          />
          <Dropdown
            title="How do you ensure the safety of my artwork during shipping?"
            description="Answer to question 2 goes here."
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
