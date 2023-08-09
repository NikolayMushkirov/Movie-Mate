"use client";

import { getTrendingData } from "@/app/api/getMoviesData";
import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";
import { MovieDataType } from "@/types/types";
import { useEffect, useState } from "react";

type Props = {
  trending: MovieDataType;
};

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const [trendingData, setTrendingData] = useState([]);

  const onTabChange = (tab: string): void => {
    setTimeWindow(tab === "Day" ? "day" : "week");
  };

  useEffect(() => {
    getTrendingData(timeWindow).then((trendData) => {
      setTrendingData(trendData);
    });
  }, [timeWindow]);
  return (
    <section>
      <div className="flex justify-between">
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
