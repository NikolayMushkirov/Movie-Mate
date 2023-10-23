"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import usePopup from "@/hooks/usePopup";

import VideoPopup from "@/components/popup/VideoPopup";
import VideoCard from "@/components/cards/VideoCard";

import { VideoType } from "@/types/video.types";

type Props = { videos: { results: VideoType[] } };

const Videos = ({ videos }: Props) => {
  const {
    isOpen,
    videoKey,
    handleOpenPopup,
    handleClosePopup,
    handleSetVideoKey,
  } = usePopup();
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
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {videos.results?.map((video: VideoType) => (
          <SwiperSlide key={video.id}>
            <VideoCard
              videoKey={video.key}
              videoName={video.name}
              handleOpenPopup={handleOpenPopup}
              handleSetVideoKey={handleSetVideoKey}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <VideoPopup
        videoKey={videoKey}
        isOpen={isOpen}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
};

export default Videos;
