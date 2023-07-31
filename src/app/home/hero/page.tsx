import SearchForm from "@/components/SearchForm";

type Props = {};

const Hero = ({ upcoming }: Props) => {
  const bgImage = `https://image.tmdb.org/t/p/original${
    upcoming.results[Math.floor(Math.random() * 20)].backdrop_path
  }`;
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="relative min-h-[800px] w-full flex flex-col items-center justify-center  bg-cover bg-no-repeat bg-center opacity-80"
    >
      <div className="absolute bottom-0 h-[350px] w-full bg-gradient"></div>
      <SearchForm />
    </section>
  );
};

export default Hero;
