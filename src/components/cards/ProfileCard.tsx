import { CastType } from "@/types/cast.types";
import Image from "next/image";

import placeholder from "../../assets/placeholder.png";
import Link from "next/link";
import { profilePhotoUrl } from "@/app/api/tmdb.constants";

type Props = CastType;

const ProfileCard = ({ name, character, profile_path, id }: Props) => {
  return (
    <Link href={`/details/person/${id}`}>
      <div className="flex flex-col items-center gap-2 group transition-all duration-300 text-center ">
        <Image
          src={
            profile_path
              ? profilePhotoUrl + profile_path
              : placeholder
          }
          alt="profile photo"
          width={180}
          height={100}
          className="h-[270px]  rounded-xl transition-all duration-300  group-hover:shadow-md group-hover:shadow-cyan-500 "
          loading="lazy"
        />
          <h2 className="text-xl font-bold transition-all duration-300 group-hover:text-cyan-500 ">{name}</h2>
          <h4 className="text-lg text-gray-300 ">{character}</h4>

      </div>
    </Link>
  );
};

export default ProfileCard;
