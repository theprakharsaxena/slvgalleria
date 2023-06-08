import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="bg-[#f8f6f3] px-20 py-20 grid grid-cols-2 gap-20 justify-center items-center">
        <div>
          <img src="/images/product1.png" alt="Product1" />
        </div>
        <div className="flex flex-col">
          <h5 className="Merriweather">Best Quality Designs</h5>
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
      <div className="bg-[#305366] px-12 py-16 grid grid-cols-4 gap-12 text-white">
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
            <h4 className="text-xl">Certified Designs</h4>
            <p className="text-xs">100% Guarantee</p>
          </div>
        </div>
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/savings.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Huge Savings</h4>
            <p className="text-xs">At Lowest Price</p>
          </div>
        </div>
        <div className="bg-[#4C6A63] py-3 px-4 flex items-center space-x-4">
          <img src="/images/replacement.png" alt="Truck" className="w-16" />
          <div>
            <h4 className="text-xl">Easy Return</h4>
            <p className="text-xs">FAQs</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20 flex-col space-y-10">
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-3xl">Best Selling Designs</h2>
          <img
            src="/images/paintbrush.png"
            alt="Best Selling Designs"
            className="w-10"
          />
        </div>
        <div className="grid grid-cols-4 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/images/painting1.png"
              alt="Painting 1"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 99</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting2.png"
              alt="Painting 2"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 199</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting3.png"
              alt="Painting 3"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 299</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting4.png"
              alt="Painting 4"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 399</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-3xl mb-3">Top Categories</h2>
          <img
            src="/images/categories1.png"
            alt="Categories"
            className="w-16"
            style={{
              background:
                "linear-gradient(to bottom, white 50%, #30536612 50%)",
            }}
          />
        </div>
        <div className="bg-[#30536612] py-20 px-28 w-screen grid grid-cols-3 gap-20">
          <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
            <h3 className="text-3xl">Handmade</h3>
            <button className="flex bg-[#305366] hover:bg-green-700 justify-center space-x-2 items-center w-6/12 p-2 rounded">
              <HiShoppingCart className="text-2xl text-pink-300" />{" "}
              <h6 className="text-white">Shop Now</h6>
            </button>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
            <h3 className="text-3xl">Printed</h3>
            <button className="flex bg-[#305366] hover:bg-green-700 justify-center space-x-2 items-center w-6/12 p-2 rounded">
              <HiShoppingCart className="text-2xl text-pink-300" />{" "}
              <h6 className="text-white">Shop Now</h6>
            </button>
          </div>
          <div className="bg-white p-10 flex flex-col justify-between items-center space-y-64">
            <h3 className="text-3xl">Designs</h3>
            <button className="flex bg-[#305366] hover:bg-green-700 justify-center space-x-2 items-center w-6/12 p-2 rounded">
              <HiShoppingCart className="text-2xl text-pink-300" />{" "}
              <h6 className="text-white">Shop Now</h6>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-52 py-10 bg-[#305366]">
        <h3 className="text-2xl text-white">
          Get flat 20% Off on your first purchase!
        </h3>
        <button className="flex hover:bg-black bg-green-700 justify-center space-x-2 items-center w-2/12 p-2 rounded">
          <HiShoppingCart className="text-2xl text-pink-300" />{" "}
          <h6 className="text-white">Shop Now</h6>
        </button>
      </div>
      <div className="flex justify-center items-center py-20 flex-col space-y-10">
        <h2 className="text-3xl">Trending Designs</h2>
        <div className="grid grid-cols-4 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/images/painting1.png"
              alt="Painting 1"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 99</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting2.png"
              alt="Painting 2"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 199</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting3.png"
              alt="Painting 3"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 299</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/painting4.png"
              alt="Painting 4"
              className="w-64 h-48"
            />
            <h4 className="text-xl mt-3 mb-1">Hand Made Wall Painting</h4>
            <p className="text-xl">₹ 399</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-20 flex-col space-y-5">
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-3xl">Testimonials</h2>
          <img
            src="/images/review1.png"
            alt="Review"
            className="w-16"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
