import Carousel from "@/components/Carousel";
import { VideoType } from "@/types/video.types";

type Props = { videos: VideoType };

const Videos = ({ videos }: Props) => {
  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Videos</h2>
      <Carousel data={videos} />
    </div>
  );
};

export default Videos;
