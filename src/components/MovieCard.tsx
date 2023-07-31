import Image from "next/image";
import CircularRating from "./CircularRating";
type Props = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  release_date,
}: Props) => {
  return (
    <div className="flex  flex-col   relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="relative -top-5 left-2">
        <CircularRating rating={vote_average} />
      </div>
      <div className="justify-self-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
