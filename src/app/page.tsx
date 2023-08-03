import HomePage from "./home/page";

import {
  getPopularData,
  getTopRatedData,
  getTrendingData,
  getUpcomingData,
} from "./api/getMoviesData";

export default async function Main() {
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
    <>
      <HomePage
        trending={trending}
        popular={popular}
        topRated={topRated}
        upcoming={upcoming}
      />
    </>
  );
}
