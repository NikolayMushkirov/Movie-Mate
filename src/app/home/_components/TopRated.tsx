"use client";

import { useState, useEffect } from "react";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type TopRatedDataType = {
  results: MovieAndTVShowType[];
};

const TopRated = () => {
  const [mediaType, setMediaType] = useState("movie");
  const [topRatedData, setTopRatedData] = useState<TopRatedDataType>({
    results: [],
  });

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  const getTopRatedData = async () => {
    const data: TopRatedDataType = await fetchMovieData(
      `${mediaType}/top_rated`
    );
    setTopRatedData(data);
  };

  useEffect(() => {
    getTopRatedData();
  }, [mediaType]);

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-6 text-2xl font-bold max-xsm:text-xl">Top Rated</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel contentData={topRatedData.results} contentName="movie" />
    </section>
  );
};

export default TopRated;
