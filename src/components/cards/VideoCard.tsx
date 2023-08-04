import Image from "next/image";

import { VideoType } from "@/types/video.types";
import SmallPlayIcon from "../SmallPlayIcon";
type Props = VideoType;
const VideoCard = ({ key, name }: Props) => {
  return (
    <>
      <div className=" relative mb-6">
        <Image
          src={`https://img.youtube.com/vi/${key}/mqdefault.jpg`}
          alt="video image"
          width={300}
          height={200}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <SmallPlayIcon />
        </div>
      </div>
      <p>{name}</p>
    </>
  );
};

export default VideoCard;
