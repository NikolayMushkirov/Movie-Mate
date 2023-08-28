export type VideoType = {
  iso_639_1?: string;
  iso_3166_1?: string;
  key: string;
  name: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
};

export type VideosType = {
  results: VideoType[];

};
