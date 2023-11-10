import { fetchMovieData } from "../api/fetchMovieData";

import Hero from "./_components/Hero";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Trending from "./_components/Trending";

import { PopularDataType, TopRatedDataType, TrendingDataType } from "@/types/home.page.types";

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

  return (
    <main className="w-full flex flex-col gap-14">
      <Hero  trendingWeek = {trendingData.trendingWeek}/>
      <Trending trendingData={trendingData} />
      <Popular popularData = {popularData} />
      <TopRated  topRatedData = {topRatedData}/>
    </main>
  );
};

export default HomePage;
