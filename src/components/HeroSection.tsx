import React, { useState } from "react";
import ImageBanner from "./shared/ImageBanner";
import ModelImage1  from "../assets/images/model-1.avif"
import ModelImage2 from "../assets/images/model-2.jpg";
import StudioImage from "../assets/images/studio-image.jpg";
import ViewOutDiv from "./ViewOutDiv";

const HeroSection: React.FC = () => {
  const [key,setKey] = useState(1)
  const [modelImage,setModelImage] = useState(ModelImage2)
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center bg-black relative ">
      <div className="uppercase bg-white p-7 text-xl absolute z-10 hidden md:block ">
        creative Marketive Agency
      </div>
      {/* Left tab */}
      <div className=" max-md:w-[40%] md:w-1/2  h-full relative flex justify-center items-center text-white md:pl-44  ">
        <ImageBanner
          containerClass="h-1/2 absolute bottom-0 left-0 aspect-square hidden md:block"
          src={StudioImage}
        />
        <div className=" hidden md:flex h-1/2 animate-slideRight overflow-hidden ">
          <div className="h-max relative">
            <span className="text-5xl">01</span>
            <ViewOutDiv />
          </div>
        </div>
        <div className="flex flex-col gap-5 -rotate-90 overflow-hidden flex-shrink-0">
          <span className=" max-md:text-4xl md:text-[5rem] uppercase animate-slideRight ">
            Creativity
          </span>
          <ViewOutDiv />
        </div>
      </div>
      {/* Right tab */}
      <ImageBanner key={key} containerClass=" w-[50%]  h-full flex-grow  " src={modelImage} />
    </div>
  );
};

export default HeroSection;
