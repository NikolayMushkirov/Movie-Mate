import Trending from "./trending/page";

import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";

import { getUpcomingData } from "../api/getMoviesData";

const HomePage = async () => {
  const upComingData = getUpcomingData();

  const [upcoming] = await Promise.all([upComingData]);

  return (
    <main className="w-full flex flex-col gap-14">
      <Hero upcoming={upcoming} />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  );
};

export default HomePage;
