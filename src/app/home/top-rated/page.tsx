import Carousel from "@/components/Carousel";
import { MovieData } from "@/types/types";

type Props = {
  topRated: MovieData;
};

const TopRated = ({ topRated }: Props) => {
  return (
    <section className="w-5/6">
      <h2 className="mb-6 text-2xl font-bold">Top Rated</h2>
      <Carousel movieData={topRated} />
    </section>
  );
};

export default TopRated;
