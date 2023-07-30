import Carousel from "@/components/Carousel";
import MovieCard from "@/components/MovieCard";

type Props = {};

const Trending = ({ trending }: Props) => {
  return (
    <div className="w-5/6">
      <h2 className="mb-6 text-2xl">Trending</h2>
      <Carousel movieData={trending}></Carousel>
    </div>
  );
};

export default Trending;
