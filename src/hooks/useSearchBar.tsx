"use client";

import { useState } from "react";

const useSearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleToggleSearchBar = () => setIsSearchBarOpen(!isSearchBarOpen);

  return { isSearchBarOpen, handleToggleSearchBar };
};

export default useSearchBar;
