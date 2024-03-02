"use client";

import React, { useState } from "react";

type Props = {
  leftTabName: string;
  rightTabName: string;
  onTabChange: (_tab: string) => void;
};

const Tabs = ({ leftTabName, rightTabName, onTabChange }: Props) => {
  const [selectedTab, setSelectedTab] = useState("leftTab");

  const switchActiveTab = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLSpanElement;
    if (selectedTab !== target.id) {
      setTimeout(() => {
        setSelectedTab(target.id);
      }, 200);
    }
    onTabChange(selectedTab);
  };

  return (
    <div className="flex">
      <span
        id="leftTab"
        className={`duration-400  flex  w-32 cursor-pointer select-none items-center   justify-center rounded-l-full p-[5px] transition-all  max-2xsm:w-24 ${
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
        className={`duration-400  flex  w-32 cursor-pointer select-none  items-center justify-center rounded-r-full transition-all   max-2xsm:w-24 ${
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
