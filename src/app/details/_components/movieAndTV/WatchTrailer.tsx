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
        className="play-icon-box flex cursor-pointer items-center gap-5  hover:text-sky-300 max-lg:flex-col max-lg:gap-2"
      >
        <PlayIcon />
        <span className="text-xl transition-all duration-700 ease-in-out  ">
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
