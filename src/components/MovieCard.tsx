import Image from "next/image";
type Props = {
  title : string;
  overview: string;
  poster_path: string;
  vote_average:number;
  release_date: string;
};

const MovieCard = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
}: Props) => {
  return (
    <div className="flex items-center justify-center flex-col w-64 ">
      <p>{overview}</p>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div>
        <div>{vote_average}</div>
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
