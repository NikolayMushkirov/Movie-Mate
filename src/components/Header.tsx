"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full z-10 fixed top-0 left-0  p-3 bg-main-bg-color/40">
      <div className="lg-wrapper top-32  flex justify-between ">
        <Link href={"/"}>
          <h1 className="text-4xl bg-gradient-main text-transparent bg-clip-text">
            Movie App
          </h1>
        </Link>

        <div className="flex items-center  gap-5">
          <Link href="/movies" className="text-lg">
            Movies
          </Link>
          <Link href="/tvshows" className="text-lg">
            TV Shows
          </Link>
          <FaSearch className="text-lg cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
