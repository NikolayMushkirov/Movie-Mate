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
          className="  w-[700px] max-lg:w-[600px] max-sm:w-[400px] absolute top-[100%] left-1/2  -translate-x-1/2   max-md:flex max-md:justify-center items-center p-3 bg-[#354D73]  text-center placeholder-slate-200 rounded-full outline-none"
          placeholder="Enter Movie/TV Title."
        />
      </form>
    </div>
  );
};

export default SearchBar;
