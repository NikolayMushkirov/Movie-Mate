import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  handleCloseSearchBar: () => void;
};

const SearchBar = ({ handleCloseSearchBar }: Props) => {
  const ref = useOutsideClick(handleCloseSearchBar);

  return (
    <div ref={ref} className="fixed">
      <form action="/search">
        <input
          autoFocus
          name="search"
          className="  fixed left-1/2 top-12 w-full max-w-[700px] -translate-x-1/2 items-center rounded-full  bg-[#354D73]   p-3 text-center placeholder-slate-200 outline-none max-lg:max-w-[600px]  max-md:flex max-md:justify-center max-sm:top-32 max-sm:max-w-[400px]"
          placeholder="Enter Movie/TV Title."
        />
      </form>
    </div>
  );
};

export default SearchBar;
