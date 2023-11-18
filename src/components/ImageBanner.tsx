import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const ImageBanner: React.FC<
  { containerClass?: string } & ComponentProps<"img">
> = ({ containerClass = "", className = "", ...props }) => {
  return (
    <div className={twMerge("w-max h-full overflow-hidden relative ", containerClass)}>
      <img
        className={twMerge("object-contain h-full w-full tilt animate-slideRight ", className)}
        {...props}
      />
      <div className="bg-white opa h-full w-full top-0 absolute translate-x-[100%] animate-slideRightOut"> </div>
    </div>
  );
};

export default ImageBanner;
