"use client";
import { Transition } from "@tailwindui/react";
import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import useScrollDirection from "@/hooks/useScrollDirection";
import useSearchBar from "@/hooks/useSearchBar";

import SearchBar from "./search/SearchBar";
import UseOutsideClick from "@/hooks/useOutsideClick";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const { isOpen, handleToggle } = useSearchBar();

  return (
    <header
      className={`fixed  ${
        scrollDirection === "down" ? "-top-32" : "top-0"
      } left-0 w-full p-3 z-10 transition-all duration-500 bg-main-bg-color/20 `}
    >
      <div className="lg-wrapper top-32  flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl bg-cyan-400 text-transparent bg-clip-text">
            MovieMate
          </h1>
        </Link>

        <nav className="flex items-center  gap-5">
          <Link href="/discover" className="text-xl hover:text-cyan-500">
            Discover new Movies & TV
          </Link>
          <FaSearch
            onClick={handleToggle}
            className="text-lg cursor-pointer hover:text-cyan-500"
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
            <UseOutsideClick handleClose={handleToggle}>
              <SearchBar />
            </UseOutsideClick>
          </Transition>
        </nav>
      </div>
    </header>
  );
};

export default Header;
