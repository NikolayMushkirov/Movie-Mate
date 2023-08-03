"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="wrapper">
      <header className="z-10 sticky top-32  w-full flex justify-between p-3 bg-main-bg-color/40">
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
      </header>
    </div>
  );
};

export default Header;
