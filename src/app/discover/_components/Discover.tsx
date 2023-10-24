"use client";

import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { fetchMovieData } from "../../api/fetchMovieData";

import MovieCard from "@/components/cards/MovieCard";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import SelectOptions from "./SelectOptions";

export type GenresDataType = {
  genres: { id: number; name: string }[];
};

export type DiscoverDataType = {
  results: MovieAndTVShowType[];
};

export type SelectedOptionType = {
  label: string;
  value: string;
};

const Discover = () => {
  const [discoverData, setDiscoverData] = useState<DiscoverDataType>({
    results: [],
  });
  const [genresData, setGenresData] = useState<GenresDataType>({ genres: [] });
  const [pageNum, setPageNum] = useState(1);
  const [mediaType, setMediaType] = useState("movie");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const { ref, inView } = useInView();

  const getInitialDiscoverData = async () => {
    const data: DiscoverDataType = await fetchMovieData(
      `discover/${mediaType}?&page=${pageNum}&with_genres=${selectedGenres}`
    );
    setDiscoverData(data);
    setPageNum((prev) => prev + 1);
  };

  const getNewDiscoverData = async () => {
    const newData: DiscoverDataType = await fetchMovieData(
      `discover/${mediaType}?&page=${pageNum}&with_genres=${selectedGenres}`
    );
    discoverData?.results
      ? setDiscoverData({
          results: [...discoverData.results, ...newData.results],
        })
      : setDiscoverData(newData);

    setPageNum((prev) => prev + 1);
  };

  const getGenresData = async () => {
    const data: GenresDataType = await fetchMovieData(
      `genre/${mediaType}/list`
    );
    setGenresData(data);
  };

  const handleChangeGenres = (selectedOption?: SelectedOptionType[] | null) => {
    const selectedValues = selectedOption?.map((option) => option.value);
    if (selectedValues) setSelectedGenres(selectedValues);
    setPageNum(1);
  };

  const handleChangeMediaType = (
    selectedOption?: SelectedOptionType | null
  ) => {
    if (selectedOption) setMediaType(selectedOption.value);
    setPageNum(1);
  };

  useEffect(() => {
    setPageNum(1);
    getInitialDiscoverData();
  }, [mediaType, selectedGenres]);

  useEffect(() => {
    getGenresData();
  }, [mediaType]);

  useEffect(() => {
    if (inView) {
      getNewDiscoverData();
    }
  }, [inView]);

  return (
    <>
      <div className="mt-24 ">
        <div className="mb-6 flex justify-between max-lg:flex-col max-lg:gap-4">
          <h2 className="text-xl font-bold">
            Discover new Movies and TV Shows
          </h2>
          <SelectOptions
            genresData={genresData}
            handleChangeGenres={handleChangeGenres}
            handleChangeMediaType={handleChangeMediaType}
          />
        </div>
        <div className="grid grid-cols-5 gap-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {discoverData?.results?.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
      <div ref={ref}></div>
    </>
  );
};

export default Discover;
