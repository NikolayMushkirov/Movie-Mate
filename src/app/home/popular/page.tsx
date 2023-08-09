"use client";

import { useState, useEffect } from "react";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

import { getPopularData } from "@/app/api/getMoviesData";

const Popular = () => {
  const [mediaType, setMediaType] = useState("movie");
  const [popularData, setPopularData] = useState([]);

  console.log(mediaType, 'media');

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  useEffect(() => {
    getPopularData(mediaType).then((res) => {
      setPopularData(res);
    });
  }, [mediaType]);

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-6 text-2xl font-bold">Popular</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel data={popularData} />
    </section>
  );
};

export default Popular;
