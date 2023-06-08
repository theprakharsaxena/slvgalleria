import React from "react";

const About = () => {
  return (
    <>
      <h1 className="flex justify-center text-4xl py-20 bg-[#D9D9D97A]">
        About Us
      </h1>
      <div className="grid grid-cols-2 px-32 py-20 gap-20">
        <div className="flex flex-col space-y-5">
          <h3 className="text-3xl">We are your favourite Store</h3>
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
    </>
  );
};

export default About;
