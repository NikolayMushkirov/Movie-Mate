import { genresData } from "@/constants/genres";
import { Genre } from "@/types/details.types";

type Props = {
  genres?: Genre[];
};

const Genres = ({ genres }: Props) => {
  const genresIds = genres?.map((genre) => genre.id).slice(0, 3);

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
