import { genresData } from "@/constants/genres";
import { Genre } from "@/types/details.types";

type Props = {
  genres?: Genre[] | number[];
};

const isGenreArray = (genres: Props["genres"]): genres is Genre[] => {
  return (
    Array.isArray(genres) && genres.length > 0 && typeof genres[0] === "object"
  );
};

const Genres = ({ genres }: Props) => {
  const genresIds = isGenreArray(genres)
    ? genres?.map((genre) => genre.id).slice(0, 3)
    : genres?.slice(0, 2);

  return (
    <div className="flex gap-2 ">
      {genresIds?.map((genreId) => {
        if (!genresData[genreId]?.name) return <span>Not found</span>;
        return (
          <span
            key={genreId}
            className="cursor-pointer whitespace-nowrap rounded-sm bg-sky-700 p-1 text-sm"
          >
            {genresData[genreId]?.name}
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
