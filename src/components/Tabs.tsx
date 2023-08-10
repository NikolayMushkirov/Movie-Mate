"use client";

import React, { useState } from "react";

type Props = {
  leftTabName: string;
  rightTabName: string;
  onTabChange: (tab: string) => void;
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
        className={`w-32 p-[5px] flex items-center justify-center   select-none rounded-l-full transition-all duration-400   cursor-pointer ${
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
        className={`w-32 p- flex items-center justify-center  select-none rounded-r-full transition-all duration-400   cursor-pointer ${
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
