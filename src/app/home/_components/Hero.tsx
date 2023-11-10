import SearchForm from "@/components/search/SearchForm";

type Props = {
  bgImage: string;
};

const Hero = ({ bgImage }: Props) => {
  return (
    <section className=" min-h-[900px] w-full flex flex-col items-center justify-center ">
      <div
        className="absolute w-full min-h-full  top-0 left-0  bg-cover bg-no-repeat  opacity-50 max-lg:bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className="absolute bottom-0 left-0 h-[400px] w-full bg-gradient"></div>
      <SearchForm />
    </section>
  );
};

export default Hero;
