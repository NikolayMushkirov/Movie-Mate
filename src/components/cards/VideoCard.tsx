import Image from "next/image";

import SmallPlayIcon from "../playIcons/SmallPlayIcon";

type Props = {
  videoKey: string;
  videoName: string;
  handleOpenPopup: () => void;
  handleSetVideoId: (_videoKey: string) => void;
};

const VideoCard = ({
  videoKey,
  videoName,
  handleOpenPopup,
  handleSetVideoId,
}: Props) => {
  return (
    <div>
      <div
        onClick={() => {
          handleSetVideoId(videoKey);
          handleOpenPopup();
        }}
        className=" small-play-icon-box  mb-6  transition duration-300 ease-in-out transform hover:opacity-75 hover:filter hover:brightness-75"
      >
        <Image
          src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}
          alt="video image"
          width={300}
          height={200}
          className=""
        />

        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <SmallPlayIcon />
        </div>
      </div>
      <p>{videoName}</p>
    </div>
  );
};

export default VideoCard;
