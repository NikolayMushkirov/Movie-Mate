import Carousel from "@/components/Carousel";
import { VideoType } from "@/types/video.types";

type Props = { movieVideos: VideoType };

const Videos = ({ movieVideos }: Props) => {
  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Videos</h2>
      <Carousel data={movieVideos} />
    </div>
  );
};

export default Videos;
