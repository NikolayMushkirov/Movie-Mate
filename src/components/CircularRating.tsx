import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  rating: number;
};

const CircularRating = ({ rating }: Props) => {
  const customStyles = {
    backgroundColor: "white",
    textColor: "black",
    textSize: "2.4rem",
    fontWeight: 'bold',
    pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
  };
  return (
    <div className="w-12">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        background
        styles={buildStyles(customStyles)}
      />
    </div>
  );
};

export default CircularRating;
