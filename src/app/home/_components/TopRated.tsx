"use client";

import { useState } from "react";

import Tabs from "@/components/Tabs";
import MovieSlider from "@/components/sliders/MovieSlider";

import { TopRatedDataType } from "@/types/home.page.types";

type Props = {
  topRatedData: TopRatedDataType;
};

const TopRated = ({ topRatedData }: Props) => {
  const [mediaType, setMediaType] = useState("movie");

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  return (
    <section>
      <div className="flex items-baseline justify-between max-sm:mb-6 max-sm:flex-col max-sm:items-center">
        <h2 className="mb-6 text-2xl font-semibold max-xsm:text-xl max-2xsm:text-lg">
          Top Rated
        </h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <MovieSlider
        contentData={
          mediaType === "movie"
            ? topRatedData.topRatedMovie.results
            : topRatedData.topRatedTVShow.results
        }
      />
    </section>
  );
};

export default TopRated;
