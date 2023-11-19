import React from "react";
import ViewOutDiv from "../ViewOutDiv";

const Title: React.FC<{ title: string; animation: string }> = ({
  title,
  animation,
}) => {
  return (
    <div className="overflow-hidden  -rotate-90  flex-center flex-col relative ">
      <span
        className={` max-md:text-6xl md:text-[7rem] uppercase ${animation} font-mango `}
      >
        {title}
      </span>
      <ViewOutDiv />
    </div>
  );
};

export default Title;
