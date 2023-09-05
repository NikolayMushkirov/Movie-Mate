import { MovieAndTVShowType } from "./movieAndTV.types";

export type PersonType = {
  adult?: boolean;
  also_known_as?: string[];
  biography: string;
  birthday: string;
  deathday?: null;
  gender: number;
  homepage?: string;
  id: number;
  imdb_id?: string;
  known_for_department?: string;
  name: string;
  place_of_birth: string;
  popularity?: number;
  profile_path: string;
};

export type PersonImagesType = {
  profiles: PersonImageType[];
};

export type PersonImageType = {
  aspect_ratio?: number;
  height: number;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type PersonMovieType =  MovieAndTVShowType & {
  character : string
}
