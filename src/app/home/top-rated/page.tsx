import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
  topRated: MovieDataType;
};

const TopRated = ({ topRated }: Props) => {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Top Rated</h2>
      <Carousel data={topRated} />
    </section>
  );
};

export default TopRated;
