"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  vote_average: number;
};

const CircularRating = ({ vote_average }: Props) => {
  const strokeColor =
    vote_average < 5 ? "red" : vote_average < 7 ? "orange" : "green";

  return (
    <CircularProgressbar
      value={vote_average && vote_average}
      maxValue={10}
      text={vote_average?.toFixed(1)}
      background
      styles={{
        root: {
          verticalAlign: "middle",
        },
        background: {
          fill: "#fff",
        },
        text: {
          fill: strokeColor,
          fontSize: "2.2rem",
          fontWeight: "600",
          transform: "translate(0px, 5px)",
        },

        path: {
          stroke: strokeColor,
        },
      }}
    />
  );
};

export default CircularRating;
