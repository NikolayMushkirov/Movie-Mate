"use client";
import React, { useState } from "react";

type Props = {
  leftTabName: string;
  rightTabName: string;
  onTabChange: Function;
};

const Tabs = ({ leftTabName, rightTabName, onTabChange }: Props) => {
  const [selectedTab, setSelectedTab] = useState(leftTabName);

  const switchActiveTab = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (selectedTab !== e.target.id) {
      setTimeout(() => {
        setSelectedTab(e.target.id);
      }, 300);
    }
    onTabChange(selectedTab);
  };

  return (
    <div className="flex gap-3">
      <span
        id={leftTabName}
        className={`h-11 px-10 flex items-center text-xl select-none rounded-full transition-all duration-400   cursor-pointer ${
          selectedTab === `${leftTabName}`
            ? "bg-gradient-main text-white"
            : "bg-white text-black"
        }  `}
        onClick={switchActiveTab}
      >
        {leftTabName}
      </span>
      <span
        id={rightTabName}
        className={`h-11 px-10 flex items-center text-xl select-none rounded-full transition-all duration-400   cursor-pointer ${
          selectedTab === `${rightTabName}`
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
