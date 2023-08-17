export type MovieDataType = {
  results: MovieInfoType[];
};

export type MovieAndTVShowType = MovieInfoType & TVShowInfoType;

export type MovieInfoType = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
};

export type TVShowInfoType = {
  backdrop_path?: string;
  first_air_date?: string;
  genre_ids: number[];
  id: number;
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  vote_average: number;
  vote_count?: number;
};

export type customStylesType = {
  backgroundColor: string;
  textColor: string;
  textSize: string;
  pathColor: string;
};
