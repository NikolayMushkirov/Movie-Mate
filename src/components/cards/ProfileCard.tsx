import { CastType } from "@/types/cast.types";
import Image from "next/image";

import placeholder from "../../assets/placeholder.png";

type Props = CastType;

const ProfileCard = ({ name, character, profile_path }: Props) => {
  return (
    <div className="text-center">
      <div className="mb-3  w-[400px] h-[250px]  overflow-hidden ">
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : placeholder
          }
          alt="profile photo"
          width={200}
          height={200}
          className="rounded-2xl"
          loading="lazy"
        />
      </div>

      <h2 className="text-xl font-bold">{name}</h2>
      <h4 className="text-lg text-gray-300">{character}</h4>
    </div>
  );
};

export default ProfileCard;
