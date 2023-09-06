"use client";

import VideoPopup from "@/components/popup/VideoPopup";
import PlayIcon from "@/components/playIcons/PlayIcon";
import usePopup from "@/hooks/usePopup";

type Props = {
  videoTrailerKey?: string;
};

const WatchTrailer = ({ videoTrailerKey }: Props) => {
  const { isOpen, handleOpenPopup, handleClosePopup } = usePopup();

  return (
    <>
      <div
        onClick={handleOpenPopup}
        className="play-icon-box flex items-center gap-5 cursor-pointer  hover:text-sky-300"
      >
        <PlayIcon />
        <span className="text-xl transition-all ease-in-out duration-700">
          Watch Trailer
        </span>
      </div>
      <VideoPopup
        videoKey={videoTrailerKey}
        isOpen={isOpen}
        handleClosePopup={handleClosePopup}
      />
    </>
  );
};

export default WatchTrailer;
