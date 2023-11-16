"use client";

import { useState } from "react";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

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
      <div className="flex justify-between items-baseline max-sm:mb-6 max-sm:flex-col max-sm:items-center">
        <h2 className="mb-6 text-2xl font-semibold max-xsm:text-xl max-2xsm:text-lg">Top Rated</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel
        contentData={
          mediaType === "movie"
            ? topRatedData.topRatedMovie.results
            : topRatedData.topRatedTVShow.results
        }
        contentName="movie"
      />
    </section>
  );
};

export default TopRated;
