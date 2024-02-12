
const key = process.env.NEXT_PUBLIC_TMDB_KEY;

import { revalidatePath } from "next/cache";

const getSearchData = async (searchValue: FormData) => {
  const baseUrl = `https://api.themoviedb.org/3/search/multi?query=`;

  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("Authorization", `Bearer ${key}`);

  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch data from TMDB API");
  }
  try {
    console.log(response.json(), "search");
    const data = await response.json();
    revalidatePath(`/search/${searchValue.get("name")}`);
    return data;
  } catch (error) {
    throw new Error("Failed to parse response from TMDB API");
  }
};

export { getSearchData };
