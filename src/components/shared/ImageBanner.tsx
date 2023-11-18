import React, { ComponentProps, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ViewOutDiv from "../ViewOutDiv";

const ImageBanner: React.FC<
  { containerClass?: string } & ComponentProps<"img">
> = ({ containerClass = "", className = "", ...props }) => {
  useEffect(()=>{},[props.src])
  return (
    <div className={twMerge("w-max h-full overflow-hidden relative ", containerClass)}>
      <img
        className={twMerge("object-cover h-full w-full tilt animate-slideRight ", className)}
        {...props}
      />
      <ViewOutDiv />
    </div>
  );
};

export default ImageBanner;
