import { CastType } from "@/types/cast.types";
import Image from "next/image";

import placeholder from "../../assets/placeholder.png";
import Link from "next/link";

type Props = CastType;

const ProfileCard = ({ name, character, profile_path, id }: Props) => {
  return (
    <Link href={`/details/person/${id}`}>
      <div className="flex flex-col items-center gap-2  transition-all duration-200 text-center ">
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w342${profile_path}`
              : placeholder
          }
          alt="profile photo"
          width={180}
          height={100}
          className="  rounded-xl transition-all duration-200  shadow-2xl hover:shadow-2xl hover:shadow-cyan-500"
          loading="lazy"
        />
          <h2 className="text-xl font-bold ">{name}</h2>
          <h4 className="text-lg text-gray-300 ">{character}</h4>

      </div>
    </Link>
  );
};

export default ProfileCard;
