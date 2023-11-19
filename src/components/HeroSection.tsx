import React, { useState } from "react";
import ImageBanner from "./shared/ImageBanner";
import ViewOutDiv from "./ViewOutDiv";
import { MoveLeft, MoveRight } from "lucide-react";
import { heroSectionData } from "../constants";
import Title from "./shared/Title";

const HeroSection: React.FC = () => {
  const [key, setKey] = useState(0);
  const [animation, setAnimation] = useState<
    "animate-slideRight" | "animate-slideLeft"
  >("animate-slideRight");
  return (
    <div className="w-full h-screen bg-black flex items-center flex-none justify-center relative ">
      <div className="uppercase bg-white p-7 text-xl absolute z-10 hidden md:block ">
        creative Marketive Agency
      </div>

      {/* Left tab */}
      <div className=" max-md:w-[40%] md:w-1/2  h-full relative flex justify-center items-center text-white md:pl-44 ">
        <ImageBanner
          animation={animation}
          key={`sub-image-${key}`}
          containerClass="h-1/2 absolute bottom-0 left-0 aspect-square hidden md:block"
          src={heroSectionData[key].subImage}
        />
        <div
          key={`index-key-${key}`}
          className={` hidden md:flex h-1/2 ${animation} flex-shrink-0 overflow-hidden `}
        >
          <div className="h-max relative">
            <span className="text-5xl">0{key + 1}</span>
            <ViewOutDiv />
          </div>
        </div>
        <div className="    h-[40rem] flex justify-evenly items-center relative  gap-5 ">
          <div className=" absolute bottom-0 flex flex-none  justify-center items-center   md:gap-3">
            <MoveLeft
              className="md:hover:scale-125  max-md:scale-50 ease-in duration-200 cursor-pointer"
              size={60}
              strokeWidth={0.5}
              onClick={() => {
                setAnimation("animate-slideLeft");
                setKey((prev) =>
                  prev > 0 ? prev - 1 : heroSectionData.length - 1
                );
              }}
            />
            <MoveRight
              className="md:hover:scale-125 max-md:scale-50  ease-in duration-200 cursor-pointer"
              size={60}
              strokeWidth={0.5}
              onClick={() => {
                setAnimation("animate-slideRight");
                setKey((prev) =>
                  prev < heroSectionData.length - 1 ? prev + 1 : 0
                );
              }}
            />
          </div>
          <Title key={`title-key-${key}`} title={heroSectionData[key].title} animation={animation} />
        </div>
      </div>

      {/* Right tab */}
      <ImageBanner
        animation={animation}
        key={`main-image-${key}`}
        containerClass=" w-[50%]  h-full flex-grow  "
        src={heroSectionData[key].mainImage}
      />
    </div>
  );
};

export default HeroSection;
