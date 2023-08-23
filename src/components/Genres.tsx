type Props = {
  genre_ids?: number[];
};

type GenreType = {
  id: number;
  name: string;
};
export const genresData: Record<number, GenreType> = {
  28: {
    id: 28,
    name: "Action",
  },
  12: {
    id: 12,
    name: "Adventure",
  },
  16: {
    id: 16,
    name: "Animation",
  },
  35: {
    id: 35,
    name: "Comedy",
  },
  80: {
    id: 80,
    name: "Crime",
  },
  99: {
    id: 99,
    name: "Documentary",
  },
  18: {
    id: 18,
    name: "Drama",
  },
  10751: {
    id: 10751,
    name: "Family",
  },
  14: {
    id: 14,
    name: "Fantasy",
  },
  36: {
    id: 36,
    name: "History",
  },
  27: {
    id: 27,
    name: "Horror",
  },
  10402: {
    id: 10402,
    name: "Music",
  },
  9648: {
    id: 9648,
    name: "Mystery",
  },
  10749: {
    id: 10749,
    name: "Romance",
  },
  878: {
    id: 878,
    name: "Science Fiction",
  },
  10770: {
    id: 10770,
    name: "TV Movie",
  },
  53: {
    id: 53,
    name: "Thriller",
  },
  10752: {
    id: 10752,
    name: "War",
  },
  37: {
    id: 37,
    name: "Western",
  },
  10759: {
    id: 10759,
    name: "Action & Adventure",
  },
  10762: {
    id: 10762,
    name: "Kids",
  },

  10763: {
    id: 10763,
    name: "News",
  },
  10764: {
    id: 10764,
    name: "Reality",
  },
  10765: {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  10766: {
    id: 10766,
    name: "Soap",
  },
  10767: {
    id: 10767,
    name: "Talk",
  },
  10768: {
    id: 10768,
    name: "War & Politics",
  },
};

const Genres = ({ genre_ids }: Props) => {
  const slicedGenres = genre_ids?.slice(0, 2);

  return (
    <div className="flex gap-2 ">
      {slicedGenres?.map((genreId) => {
        if (!genresData[genreId]?.name) return <span>Not found</span>;
        return (
          <span
            key={genreId}
            className="p-1 text-sm whitespace-nowrap bg-sky-700 rounded-sm cursor-pointer"
          >
            {genresData[genreId]?.name}
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
