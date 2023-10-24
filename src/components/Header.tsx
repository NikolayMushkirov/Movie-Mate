"use client";
import Link from "next/link";
import { Transition } from "@tailwindui/react";

import { FaSearch } from "react-icons/fa";

import useScrollDirection from "@/hooks/useScrollDirection";
import useSearchBar from "@/hooks/useSearchBar";

import SearchBar from "./search/SearchBar";

const Header = () => {
  const { isOpen, handleToggle } = useSearchBar();
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed  ${
        scrollDirection === "down" ? "-top-32" : "top-0"
      } left-0 w-full p-3 z-10 transition-all duration-500 bg-main-bg-color/20 `}
    >
      <div className="max-w-[1200px]  w-full m-auto top-32  flex justify-between items-center max-sm:gap-10">
        <Link href={"/"}>
          <h1 className="text-4xl bg-cyan-400 text-transparent bg-clip-text max-sm:text-3xl">
            MovieMate
          </h1>
        </Link>

        <nav className="flex items-center gap-5 ">
          <Link
            href="/discover"
            className="text-xl font-medium hover:text-cyan-500  max-sm:text-center   "
          >
            Discover <span className="max-xsm:hidden">new Movies & TV</span>
          </Link>
          <FaSearch
            onClick={handleToggle}
            className="text-lg cursor-pointer hover:text-cyan-500 max-sm:hidden"
          />
          <Transition
            className="w-[700px] absolute top-[100%] left-1/2  -translate-x-1/2 "
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <SearchBar handleToggle={handleToggle} />
          </Transition>
        </nav>
      </div>
    </header>
  );
};

export default Header;
