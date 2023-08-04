import SearchForm from "@/components/SearchForm";
import {  MovieDataType } from "@/types/types";

type Props = {
  upcoming : MovieDataType;
};

const Hero = ({ upcoming }: Props) => {
  const bgImage = `https://image.tmdb.org/t/p/original${
    upcoming.results[Math.floor(Math.random() * 20)].backdrop_path
  }`;
  return (
    <section className=" min-h-[900px] w-full flex flex-col items-center justify-center ">
      <div
        className="absolute w-full min-h-full  top-0 left-0  bg-cover bg-no-repeat bg-center opacity-50"
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
