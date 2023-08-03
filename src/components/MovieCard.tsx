import Image from "next/image";
import CircularRating from "./CircularRating";
type Props = {
  title: string;
  poster_path: string | undefined;
  vote_average: number;
  release_date: string;
  movie_id: number | string;
};
import Link from "next/link";
const MovieCard = ({
  title,
  poster_path,
  vote_average,
  release_date,
  movie_id,
}: Props) => {

  const customStyles = {
    backgroundColor: "white",
    textColor: "black",
    textSize: "2.1rem",
    fontWeight: "bold",
    pathColor: vote_average < 5 ? "red" : vote_average < 7 ? "orange" : "green",
  };

  return (
    <Link href={`/details/${movie_id}`}>
      <div className="flex  flex-col   relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          width={500}
          height={500}
          alt="Poster"
        />
        <div className="w-14 relative -top-7 left-2">
          <CircularRating rating={vote_average} customStyles = {customStyles}/>
        </div>
        <div className="justify-self-start">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
