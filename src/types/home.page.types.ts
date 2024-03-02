import { MovieAndTVShowType } from "./movieAndTV.types";

export type TrendingDataType = {
  trendingDay: { results: MovieAndTVShowType[] };
  trendingWeek: { results: MovieAndTVShowType[] };
};
export type PopularDataType = {
  popularMovie: { results: MovieAndTVShowType[] };
  popularTVShow: { results: MovieAndTVShowType[] };
};
export type TopRatedDataType = {
  topRatedMovie: { results: MovieAndTVShowType[] };
  topRatedTVShow: { results: MovieAndTVShowType[] };
};
