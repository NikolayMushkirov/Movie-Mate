"use client";

import VideoPopup from "@/components/VideoPopup";
import VideoCard from "@/components/cards/VideoCard";

import { VideoType, VideosType } from "@/types/video.types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { videos: VideosType };

const Videos = ({ videos }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleSetVideoId = (videoId : string) => setVideoId(videoId);

  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Videos</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        className="cursor-pointer"
        style={{ position: "static" }}
      >
        {videos.results?.map((video: VideoType) => (
          <SwiperSlide key={video.id}>
            <VideoCard
              videoKey={video.key}
              videoName={video.name}
              handleOpenPopup={handleOpenPopup}
              handleSetVideoId={handleSetVideoId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <VideoPopup
        videoKey={videoId}
        isOpen={isOpen}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
};

export default Videos;
