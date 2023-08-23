"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CustomStylesType = {
  backgroundColor: string;
  textColor: string;
  textSize: string;
  fontWeight: string;
  pathColor: string;
};

type Props = {
  rating: number;
  customStyles: CustomStylesType;
};

const CircularRating = ({ rating, customStyles }: Props) => {
  return (
    <CircularProgressbar
      value={rating && rating}
      maxValue={10}
      text={rating?.toFixed(1)}
      background
      styles={customStyles && buildStyles(customStyles)}
    />
  );
};

export default CircularRating;
