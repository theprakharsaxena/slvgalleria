import React from "react";
import { LuVerified } from "react-icons/lu";

const About = () => {
  const renderImages = (repeatCount) => {
    const images = [];

    for (let i = 0; i < repeatCount; i++) {
      images.push(
        <img
          key={i}
          src="/images/star.png"
          alt={`Star ${i}`}
          className="w-6"
        />
      );
    }

    return images;
  };
  return (
    <>
      <h1 className="flex justify-center text-5xl py-20 bg-[#D9D9D97A]">
        About Us
      </h1>
      <div className="grid grid-cols-2 px-32 py-20 gap-20">
        <div className="flex flex-col space-y-5">
          <h3 className="text-4xl">We are your favourite Store</h3>
          <p>
            Tuas quisquam quo gravida proident harum, aptent ligula anim
            consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
            potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
            penatibus quasi! Nostra tenetur dignissimos ultrices natus
            distinctio ultrices consequuntur numqu. Officiis fuga harum porro
            et? Similique rhoncus atque! Netus blanditiis provident nunc
            posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim
            amet quas, malesuada proident platea corrupti expedita.
          </p>
        </div>
        <div>
          <img src="/images/painting5.png" alt="Painting 5" />
        </div>
      </div>
      <div className="bg-[#305366] text-white px-20 py-10 grid grid-cols-4 gap-20">
        <h5 className="text-lg">Number Speaks For Themselves! </h5>
        <div className="flex flex-col">
          <h4 className="text-xl">10000+</h4>
          <p className="text-sm">Daily Visitors</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">200+</h4>
          <p className="text-sm">Designs</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">20+</h4>
          <p className="text-sm">Artists</p>
        </div>
      </div>
      <div className="grid grid-cols-2 px-20 py-20 gap-20">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src="/images/painting6.png"
            alt="Painting 6"
            className="absolute top-0 w-72"
          />
          <div className="bg-[#D9D9D9] p-10 flex flex-col justify-between items-center space-y-32 rounded-3xl w-[58%] mt-28">
            <div className="flex space-x-1 mt-32">{renderImages(5)}</div>
            <h4 className="text-xl">Prakhar Saxena</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl">
            We deal with Various quality Arts & Designs
          </h2>
          <div className="grid grid-cols-3 mt-10 gap-4">
            <div className="flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Creativity</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Aesthetics</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Technical Skill</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg"> Conceptual Depth</h5>
              </div>
            </div>
            <div className="col-span-2 flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Emotional Resonance</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Innovation and Experimentation</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Cultural and Social Commentary</h5>
              </div>
              <div className="flex items-center space-x-2">
                <LuVerified className="text-purple-500 text-2xl" />
                <h5 className="text-lg">Timelessness</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
