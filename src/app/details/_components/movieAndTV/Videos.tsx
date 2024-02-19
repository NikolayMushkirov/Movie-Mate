"use client";

import usePopup from "@/hooks/usePopup";

import VideoPopup from "@/components/popup/VideoPopup";

import { VideoType } from "@/types/video.types";
import VideoSlider from "@/components/sliders/VideoSlider";

type Props = { videos: { results: VideoType[] } };

const Videos = ({ videos }: Props) => {
  if (!videos.results.length) {
    return null;
  }

  const {
    isOpen,
    videoKey,
    handleOpenPopup,
    handleClosePopup,
    handleSetVideoKey,
  } = usePopup();

  return (
    <div className="max-lg:text-center">
      <h2 className="mb-6 text-2xl font-bold max-xsm:text-xl">Videos</h2>
      <VideoSlider
        videos={videos}
        handleOpenPopup={handleOpenPopup}
        handleSetVideoKey={handleSetVideoKey}
      />
      <VideoPopup
        videoKey={videoKey}
        isOpen={isOpen}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
};

export default Videos;
