"use client";

import { useRef, useEffect } from "react";

import ReactPlayer from "react-player/youtube";
type Props = {
  videoKey: number | string;
  isOpen: Boolean;
  handleClosePopup: () => void;
};

const VideoPopup = ({ videoKey, isOpen, handleClosePopup }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      console.log(modalRef, "ref");
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClosePopup();
        console.log(e, "eee");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div
            ref={modalRef}
            className="  w-3/4 h-3/4 bg-gray-900 p-4 z-50 flex flex-col justify-center items-center"
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              controls
              width="100%"
              height="100%"
            />
            <button
              className="bg-sky-600 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleClosePopup}
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
