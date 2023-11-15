'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { fetchMovieData } from "../api/fetchMovieData";

import MovieCard from "@/components/cards/MovieCard";
import ProfileCard from "@/components/cards/ProfileCard";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import { PersonType } from "@/types/person.types";

type DifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;
type SameKeys<T, U> = Omit<T | U, keyof DifferentKeys<T, U>>;
type MergeTwoTypes<T, U> = Partial<DifferentKeys<T, U>> & {
  [K in keyof SameKeys<T, U>]: T[K] | U[K];
};

type SearchResultsType = {
  results: MergeTwoTypes<MovieAndTVShowType, PersonType>[];
};

const SearchResults = () => {
  const [data, setData] = useState<SearchResultsType>({ results: [] });
  const [pageNum, setPageNum] = useState(1);
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const searchValue = searchParams.get("search");

  const initialFetchData = async () => {
    const initData: SearchResultsType = await fetchMovieData(
      `search/multi?query=${searchValue}&page=${pageNum}`
    );
    setData(initData);
    setPageNum((prev) => prev + 1);
  };

  const nextPageFetchData = async () => {
    const nextPageData: SearchResultsType = await fetchMovieData(
      `search/multi?query=${searchValue}&page=${pageNum}`
    );
    if (data.results) {
      setData({ ...data, results: [...data.results, ...nextPageData.results] });
    } else {
      setData(nextPageData);
    }
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    setPageNum(1);
    initialFetchData();
  }, [searchValue]);

  useEffect(() => {
    if (inView) {
      nextPageFetchData();
    }
  }, [inView]);

  return (
    <section>
      <h2 className="mt-28 mb-10 text-4xl">
        Search Results {data.results.length}
      </h2>

      <div className=" grid grid-cols-5 gap-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {data?.results?.map((item) => {
          if (item.media_type === "movie" || item.media_type === "tv") {
            const movie = item as MovieAndTVShowType;
            return <MovieCard key={movie.id} data={movie} />;
          }
          if (item.media_type === "person") {
            const person = item as PersonType;
            return (
              <ProfileCard
                key={person.id}
                name={person.name}
                profile_path={person.profile_path}
                id={person.id}
              />
            );
          }
        })}
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default SearchResults;
