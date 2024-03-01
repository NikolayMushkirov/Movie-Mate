import { fetchMovieData } from "../api/fetchMovieData";
import SearchResults from "./_components/SearchResults";

type Props = {
  searchParams: { search: string };
};

const SearchPage = async (props: Props) => {
  const searchValue = props.searchParams.search;
  const searchData = async (pageNum: number) => {
    "use server";
    return await fetchMovieData(
      `search/multi?query=${searchValue}&page=${pageNum}`,
    );
  };

  return (
    <section>
      <SearchResults searchData={searchData} />
    </section>
  );
};

export default SearchPage;
