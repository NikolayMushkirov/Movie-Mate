import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('');

  let lastScrollY = window.scrollY;

  const updateScrollDirection = () => {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? "down" : "up";
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollY > 10 || scrollY - lastScrollY < 0)
    ) {
      setScrollDirection(direction);
    }
    lastScrollY = scrollY > 10 ? scrollY : 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);
  return scrollDirection;
};

export default useScrollDirection;
