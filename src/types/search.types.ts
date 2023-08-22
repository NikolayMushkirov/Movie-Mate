export type MovieAndTVShowSearchResultsType = {
    adult?: false;
    backdrop_path?: string ;
    id: number;
    name?: string;
    original_language?: string;
    original_name?: string;
    overview?: string;
    poster_path: string ;
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

  export type MovieAndTVShowSearchType = {
    page?: number;
    results: MovieAndTVShowSearchResultsType[]
  }
