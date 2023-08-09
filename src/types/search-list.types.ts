export type MovieAndTVShowResultsType = {
    adult?: false;
    backdrop_path?: string | null;
    id: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path: string | null;
    media_type?: "tv" | "movie";
    genre_ids?: number[];
    popularity?: number;
    first_air_date?: string;
    vote_average: number;
    vote_count?: number;
    origin_country?: string[];
    title?: string;
    release_date?: string;
    video?: boolean;
  };

  export type MovieAndTVShowType = {
    page?: number;
    results: MovieAndTVShowResultsType[]
  }
