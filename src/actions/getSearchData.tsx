const key = process.env.NEXT_PUBLIC_TMDB_KEY;

import { searchUrl } from "@/app/api/tmdb.constants";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const getSearchData = async (formData: FormData) => {
  "use server";

  const searchValue = formData.get("search");

  const headers = new Headers();
  headers.append("accept", "application/json");
  headers.append("Authorization", `Bearer ${key}`);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${searchValue}&page=1`,
    { headers },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from TMDB API");
  }
  try {
    const data = await response.json();
    console.log(data, "search");
  } catch (error) {
    throw new Error("Failed to parse response from TMDB API");
  }
  return searchValue;
};

export { getSearchData };
