import Trending from "./trending/page";
import {
  getPopularData,
  getTopRatedData,
  getTrendingData,
  getUpcomingData,
} from "../api/getMoviesData";
import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";

type Props = {};

const HomePage = async (props: Props) => {
  const trendingData = getTrendingData();
  const popularData = getPopularData();
  const topRatedData = getTopRatedData();
  const upComingData = getUpcomingData();
  const [trending, popular, topRated, upcoming] = await Promise.all([
    trendingData,
    popularData,
    topRatedData,
    upComingData,
  ]);

  return (
    <main className=" flex flex-col justify-center items-center gap-24">
      <Hero upcoming = {upcoming}/>
      <Trending trending={trending} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </main>
  );
};

export default HomePage;
