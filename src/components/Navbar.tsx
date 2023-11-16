import React from "react";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import { Transition } from "@tailwindui/react";

import SearchBar from "./search/SearchBar";
import useSearchBar from "@/hooks/useSearchBar";

const Navbar = () => {
  const { isSearchBarOpen, handleToggleSearchBar } = useSearchBar();
  return (
    <nav className="flex items-center gap-5 max-sm:flex-col">
      <Link
        href="/discover"
        className="text-xl font-medium hover:text-cyan-500  max-sm:text-center   "
      >
        Discover <span className="max-sm:hidden">new Movies & TV</span>
      </Link>
      <FaSearch
        onClick={handleToggleSearchBar}
        className="text-lg cursor-pointer hover:text-cyan-500 "
      />
      <Transition
        className=""
        show={isSearchBarOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <SearchBar handleToggle={handleToggleSearchBar} />
      </Transition>
    </nav>
  );
};

export default Navbar;
