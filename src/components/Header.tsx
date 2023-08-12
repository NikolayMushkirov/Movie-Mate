"use client";

import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed  ${
        scrollDirection === "down" ? "-top-20" : "top-0"
      } left-0 w-full p-3 z-10 transition-all duration-500 bg-main-bg-color/40 `}
    >
      <div className="lg-wrapper top-32  flex justify-between ">
        <Link href={"/"}>
          <h1 className="text-4xl bg-gradient-main text-transparent bg-clip-text">
            Movie App
          </h1>
        </Link>

        <nav className="flex items-center  gap-5">
          <Link href="/movies" className="text-lg">
            Movies
          </Link>
          <Link href="/tvshows" className="text-lg">
            TV Shows
          </Link>
          <FaSearch className="text-lg cursor-pointer" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
