"use client";

import { useState } from "react";

import Carousel from "@/components/Carousel";
import Tabs from "@/components/Tabs";

import { PopularDataType } from "@/types/home.page.types";

type Props = {
  popularData: PopularDataType;
};

const Popular = ({ popularData }: Props) => {
  const [mediaType, setMediaType] = useState("movie");

  const onTabChange = (tab: string): void => {
    setMediaType(tab === "leftTab" ? "tv" : "movie");
  };

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-6 text-2xl font-bold max-xsm:text-xl">Popular</h2>
        <Tabs
          leftTabName={"Movies"}
          rightTabName={"TV Shows"}
          onTabChange={onTabChange}
        />
      </div>
      <Carousel
        contentData={
          mediaType === "movie"
            ? popularData.popularMovie.results
            : popularData.popularTVShow.results
        }
        contentName="movie"
      />
    </section>
  );
};

export default Popular;
