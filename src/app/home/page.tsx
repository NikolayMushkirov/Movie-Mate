import Trending from "./trending/page";

import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";
import { MovieDataType } from "@/types/types";
import ContentWrapper from "@/components/ContentWrapper";

type Props = {
  upcoming: MovieDataType;
  trending: MovieDataType;
  popular: MovieDataType;
  topRated: MovieDataType;
};

const HomePage = ({ upcoming, trending, popular, topRated }: Props) => {
  return (
    <main className="w-full flex flex-col gap-14">
      <Hero upcoming={upcoming} />
      <Trending trending={trending} />
      <Popular popular={popular} />
      <TopRated topRated={topRated} />
    </main>
  );
};

export default HomePage;
