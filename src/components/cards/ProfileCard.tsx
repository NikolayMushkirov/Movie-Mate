import Image from "next/image";

import placeholder from "../../assets/placeholder.png";
import Link from "next/link";
import { profilePhotoUrl } from "@/app/api/tmdb.constants";

type Props = {
  name: string;
  character: string;
  profile_path: string;
  id: number;
};

const ProfileCard = ({ name, character, profile_path, id }: Partial<Props>) => {
  return (
    <Link href={`/details/person/${id}`}>
      <div className=" group flex  flex-col items-center gap-2  text-center transition-all duration-300 ">
        <Image
          src={profile_path ? profilePhotoUrl + profile_path : placeholder}
          alt="profile photo"
          width={180}
          height={100}
          className="h-[270px] w-auto rounded-xl transition-all duration-300 group-hover:shadow-md  group-hover:shadow-cyan-500 max-2xsm:h-[200px] "
          loading="lazy"
        />
        <h2 className=" text-xl font-bold transition-all  duration-300 group-hover:text-cyan-500 max-2xsm:text-lg ">
          {name}
        </h2>
        <h4 className=" text-lg  text-gray-300 max-2xsm:text-base">
          {character}
        </h4>
      </div>
    </Link>
  );
};

export default ProfileCard;
