import SearchForm from "@/components/SearchForm";

import Trending from "./trending/page";
import {
  getPopularData,
  getTopRatedData,
  getTrendingData,
} from "../api/getMoviesData";

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

  console.log(trending, "trending");
  console.log(popular, "popular");

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <SearchForm />
      <Trending trending={trending} />
    </main>
  );
};

export default HomePage;
