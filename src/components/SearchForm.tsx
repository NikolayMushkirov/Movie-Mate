const SearchForm = () => {
  return (
    <form action="/search" className="z-20 w-full flex justify-center">
      <input
        name="search"
        className="bg-white w-1/2 p-5 pl-6 rounded-tl-full rounded-bl-full text-black text-xl  placeholder-gray-900 outline-none"
        placeholder="Enter movie title"
      />

      <button className="w-1/6 bg-gradient-main rounded-tr-full rounded-br-full text-xl">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
