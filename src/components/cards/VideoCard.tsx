import Image from "next/image";

import SmallPlayIcon from "../playIcons/SmallPlayIcon";

type Props = {
  videoKey: string;
  videoName: string;
  handleOpenPopup: () => void;
  handleSetVideoKey: (_videoKey: string) => void;
};

const VideoCard = ({
  videoKey,
  videoName,
  handleOpenPopup,
  handleSetVideoKey,
}: Props) => {
  return (
    <>
      <div
        onClick={() => {
          handleSetVideoKey(videoKey);
          handleOpenPopup();
        }}
        className="flex justify-center small-play-icon-box  mb-6  transform cursor-pointer duration-300 ease-in-out hover:scale-105 group  hover:filter"
      >
        <Image
          src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}
          alt="video image"
          width={300}
          height={200}
          className="min-h-[130px] w-auto  group-hover:opacity-50 duration-300"
        />

        <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
          <SmallPlayIcon />
        </div>
      </div>
      <p>{videoName}</p>
    </>
  );
};

export default VideoCard;
