'use client'

import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

import usePopup from "@/hooks/usePopup";

import VideoPopup from "@/components/popup/VideoPopup";
import VideoCard from "@/components/cards/VideoCard";

import { VideoType } from "@/types/video.types";


type Props = { videos: { results: VideoType[] } };

const Videos = ({ videos }: Props) => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
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
      <div className="relative">

      <Swiper
        ref={sliderRef}
        slidesPerView={4}
        spaceBetween={25}
        className="cursor-pointer"
        // style={{ position: "static" }}
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
      <IoIosArrowBack
          className="absolute w-20 h-10  top-[20%] -left-16 text-cyan-500 cursor-pointer"
          onClick={handlePrev}
        />
        <IoIosArrowForward
          className="absolute w-20 h-10 top-[20%] -right-16 text-cyan-500 cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <VideoPopup
        videoKey={videoKey}
        isOpen={isOpen}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
};

export default Videos;
