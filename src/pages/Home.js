import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="bg-[#f8f6f3] px-20 py-20 grid grid-cols-2 gap-20 justify-center items-center pt-40">
        <div>
          <img src="/images/product1.png" alt="Product1" />
        </div>
        <div className="flex flex-col">
          <h5 className="Merriweather">Best Quality Painters</h5>
          <h1 className="Merriweather text-5xl leading-normal mt-3 mb-6">
            Join the new Era of Art & Designing.
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="flex bg-[#305366] hover:bg-green-700 justify-center space-x-2 items-center w-4/12 p-3 rounded">
            <HiShoppingCart className="text-2xl text-pink-300" />{" "}
            <h6 className="text-white">Shop Now</h6>
          </button>
        </div>
      </div>
      <div className="bg-[#305366] px-10 py-16 grid grid-cols-4 gap-10 text-white">
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/truck.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Free Shipping</h4>
            <p className="text-xs">Above 50 Rs. Only</p>
          </div>
        </div>
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/certified.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Free Shipping</h4>
            <p className="text-xs">Above 50 Rs. Only</p>
          </div>
        </div>
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/savings.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Free Shipping</h4>
            <p className="text-xs">Above 50 Rs. Only</p>
          </div>
        </div>
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/replacement.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Free Shipping</h4>
            <p className="text-xs">Above 50 Rs. Only</p>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Best Selling Designs</h2>
      </div>
    </>
  );
};

export default Home;
