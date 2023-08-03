import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
  popular: MovieDataType;
};

const Popular = ({popular}: Props) => {
  return (
    <section >
      <h2 className="mb-6 text-2xl font-bold">Popular</h2>
        <Carousel movieData = {popular}/>
    </section>
  );
};

export default Popular;
