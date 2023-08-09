const key = process.env.NEXT_PUBLIC_TMDB_KEY;

const getTrendingData = async (timeWindow: string) => {
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};
const getPopularData = async (mediaType : string) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/popular`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};
const getTopRatedData = async (mediaType : string) => {
  const url = `https://api.themoviedb.org/3/${mediaType}/top_rated`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};
const getUpcomingData = async () => {
  const url = "https://api.themoviedb.org/3/movie/upcoming";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getMovieDetailsData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getMovieSimilarData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getMovieRecommendationsData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getMovieCastData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getMovieVideosData = async (id: string) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

const getSearchMultiData = async (searchValue: string , page: number) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${searchValue}&page=${page}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });
  return response.json();
};

export {
  getTrendingData,
  getPopularData,
  getTopRatedData,
  getUpcomingData,
  getMovieDetailsData,
  getMovieSimilarData,
  getMovieRecommendationsData,
  getMovieCastData,
  getMovieVideosData,
  getSearchMultiData,
};
