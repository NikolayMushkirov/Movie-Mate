"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSearchMultiData } from "../api/getMoviesData";
import MovieCard from "@/components/cards/MovieCard";


type Props = {};

const SearchResults = () => {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    getSearchMultiData(search).then((movieData) => {
      setData(movieData);
    });
  }, [search]);

  console.log(data, "data");

  return (
    <section>
      <h2 className="mt-28  text-5xl">Search results</h2>
      <div className="mt-10 grid grid-cols-5 gap-6">
        {data?.results?.map((item) => (
          <MovieCard
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            release_date={item.release_date}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
