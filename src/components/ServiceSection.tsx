import React from "react";
import Heading from "./shared/Heading";
import ServiceImage from "../assets/images/service-section-image.webp";
import Accordian from "./shared/Accordian";
import { MoveRight } from "lucide-react";

const ServiceSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-secondary flex-center flex-col py-10 gap-10 ">
      <Heading heading="SERVICES WE OFFER" />
      <div className="flex max-md:flex-col items-center justify-evenly gap-8">
        <img
          src={ServiceImage}
          className="border object-contain md:w-[35%] w-[90%]"
          alt=""
        />
        <div className="w-[35%]  md:h-max flex-center flex-col">
          <Accordian />
        </div>
      </div>
      <span className="trans-expand text-xl md:text-3xl flex items-center gap-1 ">
        Discover Our Services <MoveRight size={20} />{" "}
      </span>
    </section>
  );
};

export default ServiceSection;
