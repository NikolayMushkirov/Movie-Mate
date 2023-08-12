import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
  recommendations: MovieDataType;
};

const Recommendations = ({ recommendations }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Recommendations</h2>
      <Carousel data={recommendations} />
    </div>
  );
};

export default Recommendations;
