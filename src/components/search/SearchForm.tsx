const SearchForm = () => {
  return (
    <form action="/search" className="z-20 w-full flex justify-center">
      <input
        name="search"
        className="bg-white w-1/2 max-sm:w-72 p-5 pl-6 rounded-tl-full rounded-bl-full text-black text-lg  placeholder-gray-900 outline-none  max-md:text-base"
        placeholder="Enter a movie or TV show title..."
      />
      <button className="w-1/6 max-sm:min-w-[30%] bg-gradient-main rounded-tr-full rounded-br-full text-lg max-md:text-base">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
