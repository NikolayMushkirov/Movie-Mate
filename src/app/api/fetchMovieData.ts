const key = process.env.NEXT_PUBLIC_TMDB_KEY;

const fetchMovieData = async (url: string) => {
  const baseUrl = `https://api.themoviedb.org/3/` + url;

  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("Authorization", `Bearer ${key}`);

  const response = await fetch(baseUrl, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch data from TMDB API");
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Failed to parse response from TMDB API");
  }
};

export { fetchMovieData };
