import React from "react";
import AboutImage from "../assets/images/about-section-image.webp";

const AboutSection: React.FC = () => {
  return (
    <div className="w-full md:h-screen max-md:flex-col flex-center max-md:py-12 gap-6 max-md:px-4 ">
        <img
          src={AboutImage}
          className=" max-h-[80%]  object-cover "
          alt=""
          loading="lazy"
        />
      <div className="md:max-w-[50%] h-max flex flex-col gap-6 md:pr-20 ">
        <h2 className="font-mango text-3xl md:text-[2.7rem] font-bold tracking-wider">
          {"Bringing your Brand’s Vision to Life Digitally."}
        </h2>
        <p className="md:text-[1.3rem] font-extralight tracking-wide">
          We are a Toronto based Marketing Agency that combines strategy with
          creativity and elevates businesses to their full potential with our
          premium marketing services. We don’t believe in one size fits all
          approach! Our bespoke model allows us to curate strategies that are
          specifically designed for your brand and create content that resonates
          with your ideal customer. Our services include content creation,
          social media management, creative direction, branding and beyond. When
          you work with us, we prioritize bringing your brand’s vision to life
          because for us ‘You are not just a client but more than that’.
        </p>
        <span className="trans-expand text-[1.7rem]">tell me more</span>
      </div>
    </div>
  );
};

export default AboutSection;
