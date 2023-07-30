import SearchForm from "@/components/SearchForm";

import Trending from "./trending/page";
import {
  getPopularData,
  getTopRatedData,
  getTrendingData,
} from "../api/getMoviesData";
import Popular from "./popular/page";
import TopRated from "./top-rated/page";

type Props = {};

const HomePage = async (props: Props) => {
  const trendingData = getTrendingData();
  const popularData = getPopularData();
  const topRatedData = getTopRatedData();

  const [trending, popular, topRated] = await Promise.all([
    trendingData,
    popularData,
    topRatedData,
  ]);



  return (
    <main className=" flex flex-col justify-center items-center gap-24">
      <SearchForm />
      <Trending trending={trending} />
      <Popular popular = {popular}/>
      <TopRated topRated = {topRated}/>
    </main>
  );
};

export default HomePage;
