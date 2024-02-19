"use client";

import useOutsideClick from "@/hooks/useOutsideClick";

import ReactPlayer from "react-player/youtube";

type Props = {
  videoKey?: string;
  isOpen: Boolean;
  handleClosePopup: () => void;
};

const VideoPopup = ({ videoKey, isOpen, handleClosePopup }: Props) => {
  const modalRef = useOutsideClick(handleClosePopup);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="z-50 flex h-3/4 w-4/5 flex-col items-center justify-center bg-gray-900 p-4"
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              controls
              width="100%"
              height="100%"
            />
            <button
              className="mt-4 rounded bg-sky-600 px-4 py-2   font-bold text-white transition-all duration-0 hover:bg-sky-900 hover:duration-200"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
