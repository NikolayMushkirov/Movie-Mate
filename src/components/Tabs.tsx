"use client";
import React, { useState } from "react";

type Props = {
  leftTabName: string;
  rightTabName: string;
  onTabChange: Function;
};

const Tabs = ({ leftTabName, rightTabName, onTabChange }: Props) => {
  const [selectedTab, setSelectedTab] = useState("leftTab");

  console.log(selectedTab, "tab");

  const switchActiveTab = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (selectedTab !== e.target.id) {
      setTimeout(() => {
        setSelectedTab(e.target.id);
      }, 300);
    }
    onTabChange(selectedTab);
  };

  return (
    <div className="h-9 flex">
      <span
        id="leftTab"
        className={`w-32 p-5 flex items-center justify-center  text-lg select-none rounded-l-full transition-all duration-400   cursor-pointer ${
          selectedTab === `leftTab`
            ? "bg-gradient-main text-white"
            : "bg-white text-black"
        }  `}
        onClick={switchActiveTab}
      >
        {leftTabName}
      </span>
      <span
        id="rightTab"
        className={`w-32 p-5 flex items-center justify-center text-lg select-none rounded-r-full transition-all duration-400   cursor-pointer ${
          selectedTab === `rightTab`
            ? "bg-gradient-main text-white"
            : "bg-white text-black"
        }   `}
        onClick={switchActiveTab}
      >
        {rightTabName}
      </span>
    </div>
  );
};

export default Tabs;
