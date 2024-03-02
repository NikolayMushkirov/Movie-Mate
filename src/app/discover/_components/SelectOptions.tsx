"use client";

import Select, { StylesConfig } from "react-select";
import { GenresDataType } from "./Discover";

type Props = {
  genresData: GenresDataType;
  handleChangeGenres: () => void;
  handleChangeMediaType: () => void;
};

const SelectOptions = ({
  genresData,
  handleChangeGenres,
  handleChangeMediaType,
}: Props) => {
  const mediaTypeOptions = [
    { value: "movie", label: "Movie" },
    { value: "tv", label: "TV Show" },
  ];

  const genreOptions = Object.values(genresData).map((genre) => {
    return { value: genre.id, label: genre.name };
  });

  const customStyles: StylesConfig = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isFocused ? "#fff " : "#2d0404",
      backgroundColor: state.isFocused ? "#354D73 " : "#fff",
      cursor: "pointer",
      ":hover": { background: "#354D73", color: "#fff" },
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: " #354D73",
      padding: "5px",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
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
    }),
    clearIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: "#fff",
      ":hover": { color: "#ffffffb7" },
      fontSize: "1rem",
    }),

    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: "#fff",
      ":hover": { color: "#ffffffb7" },
      fontSize: "1rem",
    }),
  };

  return (
    <div className="flex gap-3">
      <div className="w-[300px]">
        <Select
          defaultValue={{
            label: mediaTypeOptions[0].label,
            value: mediaTypeOptions[0].value,
          }}
          placeholder="Select Media Type"
          options={mediaTypeOptions}
          onChange={handleChangeMediaType}
          styles={customStyles}
        />
      </div>
      <div className="w-[300px]">
        <Select
          placeholder="Select Genres"
          options={genreOptions}
          onChange={handleChangeGenres}
          styles={customStyles}
          isMulti
        />
      </div>
    </div>
  );
};

export default SelectOptions;
