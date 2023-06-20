import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Shop = () => {
  return (
    <>
      <div className="p-11 bg-black"></div>
      {/* <h1 className="flex justify-center font-serif text-5xl py-20 bg-[#D9D9D97A]">
        Designs for You
      </h1> */}
      <section className="my-12 px-[6%]">
        <div className="flex justify-between items-center mb-[4%]">
          <h2 className="text-4xl font-serif">New Designs</h2>
          <Link
            to="/shop"
            className="px-9 py-3 border text-white bg-pink-500 hover:bg-gray-500"
          >
            Explore More
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-7 gap-12">
          {data.map(({ image, title, creator, featured, price }, index) => {
            return (
              <div className="flex flex-col space-y-5" key={index}>
                <div className="bg-pink-200 border border-pink-900 p-10 hover:bg-pink-900 relative">
                  <div className="h-[350px] w-auto max-h-[350px] flex items-center justify-center">
                    <img
                      src={`/images/${image}`}
                      alt={title}
                      className="h-[350px]"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 text-pink-900 flex flex-col items-center p-1 space-y-2">
                    <Link>
                      <AiFillHeart className="text-4xl p-1 rounded bg-pink-200 hover:bg-white" />
                    </Link>
                    <Link>
                      <FaEye className="text-[36px] p-1 rounded bg-pink-200 hover:bg-white" />
                    </Link>
                    <Link>
                      <BiCartAdd className="text-4xl p-1 rounded bg-pink-200 hover:bg-white" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-1">{title}</h3>
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
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shop;
