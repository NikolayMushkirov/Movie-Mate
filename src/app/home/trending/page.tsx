"use client";
import { useEffect, useState } from "react";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

import { MovieDataType } from "@/types/types";

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const [trendingData, setTrendingData] = useState<MovieDataType[]>([]);

  const onTabChange = (tab: string): void => {
    setTimeWindow(tab === "leftTab" ? "week" : "day");
  };

  const getTrendingData = async () => {
    const data: MovieDataType[] = await fetchMovieData(
      `trending/movie/${timeWindow}`
    );
    setTrendingData(data);
  };

  useEffect(() => {
    getTrendingData();
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
      <Carousel data={trendingData}  renderData = 'movie'/>
    </section>
  );
};

export default Trending;
