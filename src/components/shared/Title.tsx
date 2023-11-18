import React from "react";
import ViewOutDiv from "../ViewOutDiv";

const Title: React.FC<{ title: string; animation: string }> = ({
  title,
  animation,
}) => {
  return (
    <div className="overflow-hidden  -rotate-90  flex-center flex-col relative ">
      <span
        className={` max-md:text-4xl md:text-[5rem] uppercase ${animation} `}
      >
        {title}
      </span>
      <ViewOutDiv />
    </div>
  );
};

export default Title;
