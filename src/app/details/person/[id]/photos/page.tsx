import { fetchMovieData } from "@/app/api/fetchMovieData";
import { PersonImagesType } from "@/types/person.types";
import Image from "next/image";

type Props = {
  searchParams: {
    personId: string;
  };
};

const PersonImages = async ({ searchParams }: Props) => {
  const personImages: PersonImagesType = await fetchMovieData(
    `person/${searchParams.personId}/images`,
  );

  return (
    <section className="mt-24 ">
      <h2 className="mb-4 text-xl font-semibold">
        {personImages.profiles.length} photos
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {personImages.profiles.map((img, index) => (
          <Image
            key={index}
            src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
            alt="Person Image"
            width={500}
            height={500}
            loading="lazy"
            className="rounded-md"
          />
        ))}
      </div>
    </section>
  );
};

export default PersonImages;
