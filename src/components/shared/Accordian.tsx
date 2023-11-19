import React, { useState } from "react";
import { AccordianData } from "../../constants";
import { ChevronDown } from "lucide-react";
import Divider from "./Divider";

const Accordian: React.FC = () => {
  const [expanded, setExpanded] = useState("Accordian-Item-0");
  return (
    <>
      {AccordianData.map((item, index) => (
        <Bellow
          expanded={expanded}
          setExpanded={setExpanded}
          {...item}
          key={`Accordian-Item-${index}`}
          bellowId={`Accordian-Item-${index}`}
        />
      ))}
    </>
  );
};

export default Accordian;

export const Bellow: React.FC<{
  title: string;
  description: string;
  bellowId: string;
  expanded: string;
  setExpanded: React.Dispatch<React.SetStateAction<string>>;
}> = ({ expanded, title, description, setExpanded, bellowId }) => {
  const isExpanded = bellowId === expanded;
  return (
    <div
      className="w-full transition-[height] overflow-hidden duration-700 ease-in-out relative flex flex-col p-3 min-h-[4rem]  "
      style={{
        height: isExpanded ? "13rem" : "4rem",
        justifyContent: "center",
      }}
    >
      <span className="font-mango text-[2rem] font-bold tracking-widest">
        {title}
      </span>
      {isExpanded && <p className="flex-grow">{description}</p>}
      {!isExpanded && (
        <div className="w-full  h-full absolute top-0 bg-gradient-to-b from-transparent from-70% to-secondary" />
      )}
      {!isExpanded && (
        <ChevronDown
          size={15}
          onClick={() => {
            if (isExpanded) return;
            setExpanded(bellowId);
          }}
          className="cursor-pointer absolute right-2 "
          style={{ rotate: isExpanded ? "180deg" : "" }}
        />
      )}
      <Divider className="w-full absolute bottom-0 h-[0.5px] bg-[#00000044] " />
    </div>
  );
};
