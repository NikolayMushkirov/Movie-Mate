import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { register } from "swiper/element/bundle";
register();

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

import VideoCard from "@/components/cards/VideoCard";
import { VideoType, VideosType } from "@/types/video.types";

type Props = {
  videos: VideosType;
  handleOpenPopup: () => void;
  handleSetVideoKey: (videoId: string) => void;
};

const VideoSlider = ({ videos, handleOpenPopup, handleSetVideoKey }: Props) => {
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className="relative ">
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        spaceBetween={20}
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
        className="absolute -left-16 top-[21%]  h-10 w-20 cursor-pointer text-cyan-500"
        onClick={handlePrev}
      />
      <IoIosArrowForward
        className="absolute -right-16 top-[21%] h-10 w-20 cursor-pointer text-cyan-500"
        onClick={handleNext}
      />
    </div>
  );
};

export default VideoSlider;
