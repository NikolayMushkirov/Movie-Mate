"use client";

import { useState, useEffect } from "react";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type PopularDataType = {
  results: MovieAndTVShowType[];
};

const Popular = () => {
  const [mediaType, setMediaType] = useState("movie");
  const [popularData, setPopularData] = useState<PopularDataType>({
    results: [],
  });

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  const getPopularData = async () => {
    const data: PopularDataType = await fetchMovieData(`${mediaType}/popular`);
    setPopularData(data);
  };

  useEffect(() => {
    getPopularData();
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
      <Carousel contentData={popularData.results} contentName="movie" />
    </section>
  );
};

export default Popular;
