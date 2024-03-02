import { fetchMovieData } from "../api/fetchMovieData";
import { backdropUrl } from "../api/tmdb.constants";

import Hero from "./_components/Hero";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Trending from "./_components/Trending";

import {
  PopularDataType,
  TopRatedDataType,
  TrendingDataType,
} from "@/types/home.page.types";

const HomePage = async () => {
  const trendingData: TrendingDataType = {
    trendingDay: await fetchMovieData(`trending/movie/day`),
    trendingWeek: await fetchMovieData(`trending/movie/week`),
  };
  const popularData: PopularDataType = {
    popularMovie: await fetchMovieData(`movie/popular`),
    popularTVShow: await fetchMovieData(`tv/popular`),
  };
  const topRatedData: TopRatedDataType = {
    topRatedMovie: await fetchMovieData(`movie/top_rated`),
    topRatedTVShow: await fetchMovieData(`tv/top_rated`),
  };

  const randomBackDropImageUrl =
    backdropUrl +
    trendingData?.trendingWeek.results[Math.floor(Math.random() * 20)]
      .backdrop_path;

  return (
    <main className="flex w-full flex-col gap-14 ">
      <Hero randomBackDropImageUrl={randomBackDropImageUrl} />
      <Trending trendingData={trendingData} />
      <Popular popularData={popularData} />
      <TopRated topRatedData={topRatedData} />
    </main>
  );
};

export default HomePage;
