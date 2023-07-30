"use client";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <form className="w-3/4 flex justify-center">
      <input
        className="w-1/2 p-5 pl-6 rounded-tl-full rounded-bl-full text-black outline-none"
        placeholder="Enter movie title"
      />
      <button
        className="w-1/6 bg-gradient-main rounded-tr-full rounded-br-full"
        onClick={(e) => e.preventDefault()}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
