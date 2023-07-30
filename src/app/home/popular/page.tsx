import Carousel from "@/components/Carousel";

type Props = {};

const Popular = ({popular}: Props) => {
  return (
    <section className="w-5/6">
      <h2 className="mb-6 text-2xl font-bold">Popular</h2>
        <Carousel movieData = {popular}/>
    </section>
  );
};

export default Popular;
