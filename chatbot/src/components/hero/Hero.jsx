// import React from 'react'

const Hero = () => {
  return (
    <main className="w-full h-screen flex flex-row top-0 items-center justify-items-center">
      <div className="bg-[#6016A2] text-white py-20 px-[70px] gap-[10px] w-1/2 h-full">
        <div className="w-full h-full gap-5 flex flex-col justify-center ">
          <h2 className="font-bold text-7xl">
            Unlock the power of Conversations for your business!
          </h2>
          <p>
            Easily atomate your conversations and for faster results. Give your
            customers instant replies 24/7, Close conversations faster and Free
            up your time to focus on growing your business.
          </p>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="w-1/3 h-full">
        <img src="./vite.svg" alt="image" className="w-full h-full object-contain" />
      </div>
    </main>
  );
};

export default Hero;
