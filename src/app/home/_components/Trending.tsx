"use client";
import { useState } from "react";

import Tabs from "@/components/Tabs";
import MovieSlider from "@/components/sliders/MovieSlider";

import { TrendingDataType } from "@/types/home.page.types";

type Props = {
  trendingData: TrendingDataType;
};

const Trending = ({ trendingData }: Props) => {
  const [timeWindow, setTimeWindow] = useState("day");

  const onTabChange = (tab: string): void => {
    setTimeWindow(tab === "leftTab" ? "week" : "day");
  };

  return (
    <section>
      <div className="flex items-baseline justify-between max-sm:mb-6 max-sm:flex-col max-sm:items-center">
        <h2 className="mb-6 text-2xl font-semibold max-xsm:text-xl max-2xsm:text-lg">
          Trending
        </h2>
        <Tabs
          leftTabName={"Day"}
          rightTabName={"Week"}
          onTabChange={onTabChange}
        />
      </div>
      <MovieSlider
        contentData={
          timeWindow === "day"
            ? trendingData.trendingDay.results
            : trendingData.trendingWeek.results
        }
      />
    </section>
  );
};

export default Trending;
