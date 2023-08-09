import Trending from "./trending/page";

import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";
import { MovieDataType } from "@/types/types";

import {
  getPopularData,
  getTopRatedData,
  getUpcomingData,
} from "../api/getMoviesData";

type Props = {
  upcoming: MovieDataType;
  popular: MovieDataType;
  topRated: MovieDataType;
};

const HomePage = async () => {
  const popularData = getPopularData();
  const topRatedData = getTopRatedData();
  const upComingData = getUpcomingData();

  const [popular, topRated, upcoming] = await Promise.all([
    popularData,
    topRatedData,
    upComingData,
  ]);

  return (
    <main className="w-full flex flex-col gap-14">
      <Hero upcoming={upcoming} />
      <Trending />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </main>
  );
};

export default HomePage;
