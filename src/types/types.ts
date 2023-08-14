export type MovieDataType = {
  results: MovieInfoType[];
};

export type MovieInfoType = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
};

export type DetailsType = {
  adult?: boolean;
  backdrop_path: string;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
};

export type customStylesType = {
    backgroundColor: string;
    textColor: string;
    textSize: string;
    pathColor: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
