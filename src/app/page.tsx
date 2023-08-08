import HomePage from "./home/page";

import {
  getPopularData,
  getTopRatedData,
  getTrendingData,
  getUpcomingData,
} from "./api/getMoviesData";

export default async function Main() {
  const popularData = getPopularData();
  const topRatedData = getTopRatedData();
  const upComingData = getUpcomingData();

  const [trending, popular, topRated, upcoming] = await Promise.all([
    popularData,
    topRatedData,
    upComingData,
  ]);

  return (
    <>
      <HomePage  popular={popular} topRated={topRated} />
    </>
  );
}
