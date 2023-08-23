"use client";

import { useState, useEffect } from "react";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";



const TopRated = () => {
  const [mediaType, setMediaType] = useState("movie");
  const [topRatedData, setTopRatedData] = useState<MovieAndTVShowType[]>([]);

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  const getTopRatedData = async () => {
    const data: MovieAndTVShowType[] = await fetchMovieData(
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
        <h2 className="mb-6 text-2xl font-bold">Top Rated</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel data={topRatedData} renderData = 'movie' />
    </section>
  );
};

export default TopRated;
