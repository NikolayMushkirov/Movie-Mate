import Trending from "./trending/page";

import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";
import { MovieData } from "@/types/types";

type Props = {
  upcoming: MovieData;
  trending: MovieData;
  popular: MovieData;
  topRated: MovieData;
};

const HomePage = ({ upcoming, trending, popular, topRated }: Props) => {
  return (
    <main className=" flex flex-col justify-center items-center gap-14">
      <Hero upcoming={upcoming} />
      <Trending trending={trending} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </main>
  );
};

export default HomePage;
