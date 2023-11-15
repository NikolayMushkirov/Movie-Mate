"use client";
import { useState } from "react";

import Link from "next/link";

import useScrollDirection from "@/hooks/useScrollDirection";

import MenuButton from "./buttons/MenuButton";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollDirection = useScrollDirection();

  const handleToggleMenuMode = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <MenuButton
          isMenuOpen={isMenuOpen}
          handleToggleMenuMode={handleToggleMenuMode}
        />
        <div className="max-sm:hidden">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
