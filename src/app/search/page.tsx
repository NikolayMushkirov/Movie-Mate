"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { fetchMovieData } from "../api/fetchMovieData";

import MovieCard from "@/components/cards/MovieCard";

import { MovieAndTVShowType } from "@/types/search-list.types";

const SearchResults = () => {
  const [data, setData] = useState<MovieAndTVShowType>({ results: [] });
  const [pageNum, setPageNum] = useState(1);
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const searchValue = searchParams.get("search");

  const initialFetchData = async () => {
    const initData = await fetchMovieData(
      `search/multi?query=${searchValue}&page=${pageNum}`
    );
    setData(initData);
    setPageNum((prev) => prev + 1);
  };

  const nextPageFetchData = async () => {
    const nextPageData = await fetchMovieData(
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
      <h2 className="mt-28 mb-10 text-5xl">Search results</h2>
      <div className=" grid grid-cols-5 gap-6">
        {data?.results?.map((item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default SearchResults;
