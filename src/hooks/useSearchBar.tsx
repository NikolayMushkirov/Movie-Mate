"use client";

import { useState } from "react";

const useSearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleOpenSearchBar = () => setIsSearchBarOpen(true);
  const handleCloseSearchBar = () => setIsSearchBarOpen(false);

  return {
    isSearchBarOpen,
    handleOpenSearchBar,
    handleCloseSearchBar,
  };
};

export default useSearchBar;
