import Carousel from "@/components/Carousel";
import { VideosType } from "@/types/video.types";

type Props = { videos: VideosType };

const Videos = ({ videos }: Props) => {
  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Videos</h2>
      <Carousel data={videos} renderData="video" />
    </div>
  );
};

export default Videos;
