"use client";
import { useEffect, useState } from "react";

import { getTrendingData } from "@/app/api/getMoviesData";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";


const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const [trendingData, setTrendingData] = useState([]);

  const onTabChange = (tab: string): void => {
    setTimeWindow(tab === "leftTab" ? "week" : "day");
  };

  useEffect(() => {
    getTrendingData(timeWindow).then((res) => {
      setTrendingData(res);
    });
  }, [timeWindow]);
  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-6 text-2xl font-bold">Trending</h2>
        <Tabs
          leftTabName={"Day"}
          rightTabName={"Week"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel data={trendingData} />
    </section>
  );
};

export default Trending;
