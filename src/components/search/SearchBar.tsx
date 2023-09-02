import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  handleToggle: () => void;
};

const SearchBar = ({ handleToggle }: Props) => {
  const ref = useOutsideClick(handleToggle);
  return (
    <div ref={ref}>
      <form action="/search">
        <input
          name="search"
          className="w-full p-3 bg-[#354D73]  text-center placeholder-slate-200 rounded-full outline-none"
          placeholder="Enter a movie or TV show title..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
