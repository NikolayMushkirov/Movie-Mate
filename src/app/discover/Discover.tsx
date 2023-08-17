"use client";

import MovieCard from "@/components/cards/MovieCard";
import { useState } from "react";
import Select from "react-select";
import { genresData } from "@/components/Genres";
type Props = {};

const Discover = ({ discoverData }: Props) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    if (selectedOption)
      setSelectedGenres([...selectedGenres, selectedOption.value]);
  };

  const options = Object.values(genresData).map((genre) => {
    return { value: genre.name, label: genre.name };
  });

  console.log(options, "opt");

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#04152D" : "#fff",
      backgroundColor: state.isSelected ? "#fff" : "#04152D",
      height: "50px",
      cursor: "pointer",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#fff",
      padding: "5px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#04152D",
      fontSize: "1rem",
    }),
  };
  return (
    <div className="mt-24 ">
      <div className="mb-6 flex justify-between">
        <h2 className="text-xl font-bold">Discover</h2>
        <div className="w-[300px]">
          <Select
            options={options}
            onChange={handleChange}
            styles={customStyles}
            isMulti={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {discoverData.results.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
        d
      </div>
    </div>
  );
};

export default Discover;
