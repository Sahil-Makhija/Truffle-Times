import React from "react";
import ImageBanner from "./ImageBanner";
import ModelImage from "../assets/images/model-1.avif";
import StudioImage from "../assets/images/studio-image.jpg"

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative ">
      <div className="uppercase bg-white p-7 text-xl absolute z-10 ">
        creative Marketive Agency
      </div>
      {/* Left tab */}
      <div className="w-1/2 flex-grow h-full relative flex justify-center items-center text-white  ">
        <ImageBanner containerClass="h-1/2 absolute bottom-0 left-0 aspect-square" src={StudioImage} />
        <div className=" flex h-1/2 text-5xl animate-slideRight ">01</div>
        <div className="flex flex-col gap-5 -rotate-90">
          <span className="text-[5rem] uppercase ">Creativity</span>
          
        </div>
      </div>
      {/* Right tab */}
      <ImageBanner containerClass=" max-w-[50%]  h-full  " src={ModelImage} />
    </div>
  );
};

export default HeroSection;
