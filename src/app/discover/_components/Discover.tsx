"use client";

import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import MovieCard from "@/components/cards/MovieCard";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import SelectOptions from "./SelectOptions";
import { movieGenresList, tvShowGenresList } from "@/constants/genres";
import { Genre } from "@/types/details.types";

export type GenresDataType = Record<number, Genre>;

export type DiscoverDataType = {
  results: MovieAndTVShowType[];
};

export type SelectedOptionType = {
  label: string;
  value: string;
};

type Props = {
  getDiscoverData: (
    mediaType: string,
    pageNum: number,
    selectedGenres: string[],
  ) => Promise<DiscoverDataType>;
};

const Discover = ({ getDiscoverData }: Props) => {
  const [discoverData, setDiscoverData] = useState<DiscoverDataType>({
    results: [],
  });

  const [pageNum, setPageNum] = useState(1);
  const [mediaType, setMediaType] = useState("movie");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const { ref, inView } = useInView();

  const getInitialDiscoverData = async () => {
    const data: DiscoverDataType = await getDiscoverData(
      mediaType,
      pageNum,
      selectedGenres,
    );
    setDiscoverData(data);
    setPageNum((prev) => prev + 1);
  };

  const getNewDiscoverData = async () => {
    const newData: DiscoverDataType = await getDiscoverData(
      mediaType,
      pageNum,
      selectedGenres,
    );
    discoverData?.results
      ? setDiscoverData({
          results: [...discoverData.results, ...newData.results],
        })
      : setDiscoverData(newData);

    setPageNum((prev) => prev + 1);
  };

  const handleChangeGenres = (selectedOption?: SelectedOptionType[] | null) => {
    const selectedValues = selectedOption?.map((option) => option.value);
    if (selectedValues) setSelectedGenres(selectedValues);
    setPageNum(1);
  };

  const handleChangeMediaType = (
    selectedOption?: SelectedOptionType | null,
  ) => {
    if (selectedOption) {
      setMediaType(selectedOption.value);
      setPageNum(1);
    }
  };

  useEffect(() => {
    setPageNum(1);
    getInitialDiscoverData();
  }, [mediaType, selectedGenres]);

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
            genresData={
              mediaType === "movie" ? movieGenresList : tvShowGenresList
            }
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
