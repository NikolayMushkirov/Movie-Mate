import { CastType } from "@/types/cast.types";
import Image from "next/image";

import placeholder from "../../assets/placeholder.png";
import Link from "next/link";

type Props = CastType;

const ProfileCard = ({ name, character, profile_path, id }: Props) => {
  return (
    <Link href={`/details/person/${id}`}>
      <div className="flex flex-col items-center">
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w342${profile_path}`
              : placeholder
          }
          alt="profile photo"
          width={342}
          height={330}
          className="min-h-[340px] w-full mb-2 rounded-lg"
          loading="lazy"
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <h4 className="text-lg text-gray-300">{character}</h4>
      </div>
    </Link>
  );
};

export default ProfileCard;
