"use client";

import { useState } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setVideoKey("");
  };

  const handleSetVideoKey = (videoId: string) => setVideoKey(videoId);

  return {
    isOpen,
    videoKey,
    handleOpenPopup,
    handleClosePopup,
    handleSetVideoKey,
  };
};

export default usePopup;
