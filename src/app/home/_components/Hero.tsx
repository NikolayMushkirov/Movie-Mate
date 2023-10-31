import SearchForm from "@/components/search/SearchForm";

import { fetchMovieData } from "@/app/api/fetchMovieData";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type MovieDataType = {
  results: MovieAndTVShowType[];
};

const Hero = async () => {
  const trendingData: MovieDataType = await fetchMovieData(
    `trending/movie/week`
  );
  const bgImage = `https://image.tmdb.org/t/p/w1280${
    trendingData.results[Math.floor(Math.random() * 20)].backdrop_path
  }`;

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
