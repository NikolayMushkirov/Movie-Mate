import React from "react";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import SearchBar from "./search/SearchBar";
import useSearchBar from "@/hooks/useSearchBar";

const Navbar = () => {
  const { isSearchBarOpen, handleOpenSearchBar, handleCloseSearchBar } =
    useSearchBar();

  return (
    <nav className="relative flex items-center gap-5 max-sm:flex-col">
      <Link
        href="/discover"
        className="text-xl font-medium hover:text-cyan-500  max-sm:text-center   "
      >
        Discover <span className="max-sm:hidden">new Movies & TV</span>
      </Link>
      <FaSearch
        onClick={handleOpenSearchBar}
        className="cursor-pointer text-lg hover:text-cyan-500 "
      />

      {isSearchBarOpen && (
        <SearchBar handleCloseSearchBar={handleCloseSearchBar} />
      )}
    </nav>
  );
};

export default Navbar;
