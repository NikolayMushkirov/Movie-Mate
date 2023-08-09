"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { getSearchMultiData } from "../api/getMoviesData";

import MovieCard from "@/components/cards/MovieCard";

import { MovieAndTVShowType } from "@/types/search-list.types";

const SearchResults = () => {
  const [data, setData] = useState<MovieAndTVShowType>({ results: [] });
  const [pageNum, setPageNum] = useState(1);
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const searchValue = searchParams.get("search");

  const initialFetchData = () => {
    searchValue &&
      getSearchMultiData(searchValue, pageNum).then((respData) => {
        setData(respData);
        setPageNum((prev) => prev + 1);
      });
  };

  const nextPageFetchData = () => {
    searchValue &&
      getSearchMultiData(searchValue, pageNum).then((respData) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data.results, ...respData.results],
          });
        } else {
          setData(respData);
        }
        setPageNum((prev) => prev + 1);
      });
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
      <h2 className="mt-28 mb-10 text-5xl">Search results</h2>
      <div className=" grid grid-cols-5 gap-6">
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
      <div ref={ref}></div>
    </section>
  );
};

export default SearchResults;
