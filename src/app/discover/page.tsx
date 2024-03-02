import { fetchMovieData } from "../api/fetchMovieData";
import Discover, { DiscoverDataType } from "./_components/Discover";

const DiscoverPage = () => {
  const getDiscoverData = async (
    mediaType: string,
    pageNum: number,
    selectedGenres: string[],
  ) => {
    "use server";
    return await fetchMovieData<DiscoverDataType>(
      `discover/${mediaType}?&page=${pageNum}&with_genres=${selectedGenres}`,
    );
  };
  return (
    <section>
      <Discover getDiscoverData={getDiscoverData} />
    </section>
  );
};

export default DiscoverPage;
