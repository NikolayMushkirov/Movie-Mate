"use client";

import { useState, useEffect } from "react";

import { getTopRatedData } from "@/app/api/getMoviesData";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

const TopRated = () => {
  const [mediaType, setMediaType] = useState("movie");
  const [topRatedData, setTopRatedData] = useState([]);

  console.log(mediaType, "media");

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  useEffect(() => {
    getTopRatedData(mediaType).then((res) => {
      setTopRatedData(res);
    });
  }, [mediaType]);

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-6 text-2xl font-bold">Top Rated</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel data={topRatedData} />
    </section>
  );
};

export default TopRated;
