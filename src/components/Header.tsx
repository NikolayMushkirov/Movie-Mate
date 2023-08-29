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
          <FaSearch className="text-lg cursor-pointer hover:text-cyan-500" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
