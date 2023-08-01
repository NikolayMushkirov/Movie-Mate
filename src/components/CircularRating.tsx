"use client";

import { customStylesType } from "@/types/types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  rating: number;
  customStyles: customStylesType;
};

const CircularRating = ({ rating, customStyles }: Props) => {
  return (

      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating.toFixed(1)}
        background
        styles={customStyles && buildStyles(customStyles)}
      />

  );
};

export default CircularRating;
