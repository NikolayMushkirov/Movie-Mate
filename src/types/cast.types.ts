export type CrewType = {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string;
  department?: string;
  job: string;
};

export type CastType = {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
};

export type CreditsType = {
  crew: CrewType[];
  cast: CastType[];
};
