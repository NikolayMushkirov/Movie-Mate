"use client";

import { useState } from "react";
import Select, { StylesConfig } from "react-select";

type Props = {};

type SelectedOptionType = {
  label: string;
  value: string;
};

const SelectOptions = ({
  genresData,
  handleChangeGenres,
  handleChangeMediaType,
}: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const mediaTypeOptions = [
    { value: "movie", label: "Movie" },
    { value: "tv", label: "TV Show" },
  ];

  const genreOptions = genresData.genres?.map((genre) => {
    return { value: genre.id, label: genre.name };
  });

  const customStyles: StylesConfig = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff " : "#04152D",
      backgroundColor: state.isSelected ? "#354D73 " : "#fff",
      cursor: "pointer",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: " #354D73",
      padding: "5px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#fff",
      fontSize: "1rem",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      color: "#fff",
      backgroundColor: " #354D73",
      fontSize: "1rem",
      overflow: "hidden",
      opacity: menuIsOpen ? 1 : 0,
      transition: "all 0.2s ease-out",
      visibility: menuIsOpen ? "visible" : "hidden",
    }),
  };

  return (
    <div className="flex gap-3">
      <div
        className="w-[300px]"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Select
          defaultValue={{
            label: mediaTypeOptions[0].label,
            value: mediaTypeOptions[0].value,
          }}
          options={mediaTypeOptions}
          onChange={handleChangeMediaType}
          styles={customStyles}
          menuIsOpen
        />
      </div>
      <div className="w-[300px]">
        <Select
          options={genreOptions && genreOptions}
          onChange={handleChangeGenres}
          styles={customStyles}
          isMulti={true}

        />
      </div>
    </div>
  );
};

export default SelectOptions;
