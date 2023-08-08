"use client";

import { getTrendingData } from "@/app/api/getMoviesData";
import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";
import { useEffect, useState } from "react";

type Props = {
  trending: MovieDataType;
};

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const [trendingData, setTrendingData] = useState([]);

  console.log(trendingData, "trend");

  useEffect(() => {
    getTrendingData(timeWindow).then((trendData) => {
      setTrendingData(trendData);
    });
  }, [timeWindow]);
  return (
    <section>
      <div>
        <h2 className="mb-6 text-2xl font-bold">Trending</h2>
      </div>
      <Carousel data={trendingData} />
    </section>
  );
};

export default Trending;
