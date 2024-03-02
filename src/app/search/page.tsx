import { fetchMovieData } from "../api/fetchMovieData";
import SearchResults, { SearchResultsType } from "./_components/SearchResults";

type Props = {
  searchParams: { search: string };
};

const SearchPage = async (props: Props) => {
  const searchValue = props.searchParams.search;
  const getSearchData = async (pageNum: number) => {
    "use server";
    return await fetchMovieData<SearchResultsType>(
      `search/multi?query=${searchValue}&page=${pageNum}`,
    );
  };

  return (
    <section>
      <SearchResults getSearchData={getSearchData} />
    </section>
  );
};

export default SearchPage;
