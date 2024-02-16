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
      } left-0 z-10 w-full bg-main-bg-color/20 p-3 px-10 transition-all duration-500 `}
    >
      <div className="top-32  m-auto flex w-full  max-w-[1200px] items-center justify-between max-sm:gap-10">
        <Link href={"/"}>
          <h1 className="bg-cyan-400 bg-clip-text text-4xl text-transparent max-sm:text-3xl max-2xsm:text-3xl">
            Movie Mate
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
