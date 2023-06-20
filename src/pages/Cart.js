import React, { useState } from "react";
import Quantity from "../components/Quantity";

const data = [
  {
    image: "vaseofflower.jpg",
    title: "Vase of Flowers",
    creator: "Jan Davidsz de Heem",
    featured: "Arts & Culture",
    price: 1000.0,
  },
  {
    image: "adriana.jpg",
    title: "Palace of Versailles",
    creator: "Adrianna geo",
    featured: "Arts & Culture",
    price: 1500.0,
  },
  {
    image: "bird.jpg",
    title: "Fantail Wrens",
    creator: "Henry de",
    featured: "Arts & Culture",
    price: 700.0,
  },
];

const Cart = () => {
  return (
    <>
      <div className="p-11"></div>
      {/* <h1 className="flex justify-center text-5xl py-20 bg-[#D9D9D97A]">
        Cart
      </h1> */}
      <section className="grid grid-cols-1 lg:grid-cols-3 my-12 px-[4%] gap-8">
        <div className="lg:col-span-2 bg-pink-200 p-4 border border-gray-300">
          <h2 className="text-xl font-mono">Shopping Cart</h2>
          <div className="border mt-1 mb-5 border-pink-900"></div>
          {data.map(({ image, title, creator, featured, price }, index) => {
            return (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:py-2 py-5" key={index}>
                <div className="flex items-center justify-center bg-pink-900 p-5">
                  <img src={`/images/${image}`} alt="" className="h-[200px]" />
                </div>
                <div className="sm:col-span-2 flex flex-col justify-between sm:h-[240px] min-h-[200px]">
                  <div>
                    <h3 className="text-3xl mb-1">{title}</h3>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-600">Creator:</h4>
                      <p>{creator}</p>
                    </div>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-600">Featured in:</h4>
                      <p>{featured}</p>
                    </div>
                    <div className="flex space-x-2 font-serif">
                      <h4 className="text-pink-600">Price:</h4>
                      <span>&#8377; {price}</span>
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <Quantity />
                    <a href="#" className="hover:underline text-pink-900">
                      Save For Later
                    </a>
                    <a href="#" className="hover:underline text-pink-900">
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-pink-200 p-4 border border-gray-300 h-min">
          <h2 className="text-xl font-mono">Price Details</h2>
          <div className="border mt-2 mb-5 border-pink-900"></div>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h4>Price (2 items)</h4>
              <p>&#8377;20,000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4>Discount</h4>
              <p className="text-green-600">&#8377;5,000</p>
            </div>
            <div className="flex justify-between items-center">
              <h4>Delivery Charges</h4>
              <p className="text-green-600">Free</p>
            </div>
          </div>
          <div className="border border-dashed mt-5 mb-5 border-pink-900"></div>
          <div className="flex justify-between items-center text-lg font-semibold">
            <h3 className="">Total Amount</h3>
            <p>&#8377;15,000</p>
          </div>
          <div className="border border-dashed mt-5 mb-5 border-pink-900"></div>
          <h4 className="text-green-600">
            You will save &#8377;5,000 on this order
          </h4>
          <div className="flex justify-center w-full py-5 px-2">
          <button className="px-5 py-2 text-white rounded-lg w-full shadow-md bg-pink-600">Procced to Buy</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
