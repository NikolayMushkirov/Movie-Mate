import CircularRating from "@/components/CircularRating";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const Details = ({ poster, rating, params: { id } }: Props) => {
  return (
    <div>
      <div>
        {/* <Image src={poster} alt="poster" width={500} height={500} /> */}
        <div>
          <h3>Title {id}</h3>
          <h4>Subtitle</h4>
          <div>
            {/* <CircularRating rating={rating} /> */}
          </div>
          <h3>Overview</h3>
          <p>
            A life of an ordinary Parisian teenager Marinette goes superhuman
            when she becomes Ladybug. Bestowed with magical powers of creation,
            Ladybug must unite with her opposite, Cat Noir, to save Paris as a
            new villain unleashes chaos unto the city.
          </p>
          <span>Status: </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
