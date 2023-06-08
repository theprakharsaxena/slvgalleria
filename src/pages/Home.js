import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const renderImages = (repeatCount) => {
    const images = [];

    for (let i = 0; i < repeatCount; i++) {
      images.push(
        <img
          key={i}
          src="/images/star.png"
          alt={`Image ${i}`}
          className="w-6"
        />
      );
    }

    return images;
  };
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
      <div className="bg-[#30536612] px-28 py-20 grid grid-cols-1 gap-16 justify-center items-center">
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
        <div className="grid grid-cols-3 gap-20">
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
      <div className="flex justify-center items-center py-20 flex-col space-y-10">
        <div className="flex flex-col items-center space-y-1">
          <h2 className="text-3xl">Testimonials</h2>
          <img src="/images/review1.png" alt="Review" className="w-16" />
        </div>
        <div className="flex justify-center space-x-20">
          <div className="bg-[#D9D9D9] p-10 flex flex-col justify-between items-center space-y-40 rounded-3xl min-w-[33%] mt-16">
            <div className="flex space-x-1">{renderImages(4)}</div>
            <h4 className="text-xl">Prakhar Saxena</h4>
          </div>
          <div className="bg-[#D9D9D9] p-10 flex flex-col justify-between items-center space-y-40 rounded-3xl min-w-[33%] mb-16">
            <div className="flex space-x-1">{renderImages(5)}</div>
            <h4 className="text-xl">Ankit Yadav</h4>
          </div>
          <div className="bg-[#D9D9D9] p-10 flex flex-col justify-between items-center space-y-40 rounded-3xl min-w-[33%] mt-16">
            <div className="flex space-x-1">{renderImages(4)}</div>
            <h4 className="text-xl">Prakhar Saxena</h4>
          </div>
        </div>
      </div>
      <div className="bg-[#305366D6] p-10 grid grid-cols-4 text-white">
        <div className="flex flex-col space-y-3">
          <Link to="/">
            <img
              src="/images/logoslvgalleria.png"
              alt="Logo"
              className="w-20"
            />
          </Link>
          <p>
            Welcome to our Platform, where craftsmen can feature and offer their
            unprecedented compositions to an overall crowd. We give a dynamic
            and easy to understand online......
          </p>
          <Link className="border py-2 w-1/2 text-center">Know More</Link>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-2xl">Quick Links</h3>
          <Link className="font-normal" to="/">
            Home
          </Link>
          <Link className="font-normal" to="/about">
            About Us
          </Link>
          <Link className="font-normal" to="/services">
            Services
          </Link>
          <Link className="font-normal" to="/shop">
            Shop
          </Link>
          <Link className="font-normal" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-2xl">Site Links</h3>
          <Link className="font-normal" to="/about">
            Return Policy
          </Link>
          <Link className="font-normal" to="/services">
            Terms & Conditions
          </Link>
          <Link className="font-normal" to="/shop">
            Privacy Policy
          </Link>
          <Link className="font-normal" to="/contact">
            Shipping
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-2xl">Social</h3>
          <div className="flex space-x-5">
            <Link>
              <img
                src="/images/instagramicon.png"
                alt="Instagram"
                className="w-7"
              />
            </Link>
            <Link>
              <img
                src="/images/facebookicon.png"
                alt="Facebook"
                className="w-7"
              />
            </Link>
            <Link>
              <img
                src="/images/linkedinicon.png"
                alt="LinkedIn"
                className="w-7"
              />
            </Link>
            <Link>
              <img
                src="/images/twittericon.png"
                alt="Twitter"
                className="w-7"
              />
            </Link>
          </div>
          <div className="flex space-x-2">
            <img
              src="/images/playstore.png"
              alt="Play Store"
              className="w-32"
            />
            <img src="/images/appstore.png" alt="App Store" className="w-32" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
