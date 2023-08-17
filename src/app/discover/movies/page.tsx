import MovieCard from "@/components/cards/MovieCard";
import { fetchMovieData } from "../../api/fetchMovieData";
import { MovieInfoType } from "@/types/types";
import Discover from "../Discover";

type Props = {};

type DiscoverMoviesType = {
  results: MovieInfoType[];
};

const page = async (props: Props) => {
  const discoverMovies: DiscoverMoviesType = await fetchMovieData(
    `discover/movie`
  );
  return (
    <section >
      <Discover discoverData={discoverMovies} />
    </section>
  );
};

export default page;
