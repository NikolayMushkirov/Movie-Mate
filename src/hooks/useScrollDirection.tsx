'use client';

import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 0 || scrollY - lastScrollY < 0)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 10 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return scrollDirection;
};

export default useScrollDirection;
