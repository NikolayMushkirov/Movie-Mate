import { PersonImagesType } from "@/types/person.types";
import Image from "next/image";

type Props = {
  personImages: PersonImagesType;
};

const PersonImages = ({ personImages }: Props) => {
  return (
    <div className="max-h-[400px] grid grid-cols-4 overflow-hidden">
      {personImages.profiles.map((img, index) => (
        <Image
          key={index}
          src={`https://image.tmdb.org/t/p/original${img.file_path}`}
          alt="Person Image"
          width={500}
          height={500}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default PersonImages;
