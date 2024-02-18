const SearchForm = () => {
  return (
    <form action="/search" className="z-20 flex w-full justify-center items-center max-sm:flex-col max-sm:gap-4">
      <input
        name="search"
        className="w-1/2 rounded-bl-full rounded-tl-full bg-white p-5 pl-6 text-lg capitalize text-black placeholder-gray-900 outline-none  max-md:text-base max-sm:w-52 max-sm:p-3   max-sm:rounded-full max-sm:text-center"
        placeholder="Enter Movie/TV Title"
      />
      <button className="w-1/6 h-full rounded-br-full rounded-tr-full bg-gradient-main text-lg max-md:text-base   max-sm:rounded-full max-sm:p-3 max-sm:w-44">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
