import Trending from "./trending/page";

import Popular from "./popular/page";
import TopRated from "./top-rated/page";
import Hero from "./hero/page";

const HomePage = async () => {
  return (
    <main className="w-full flex flex-col gap-14">
      <Hero />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  );
};

export default HomePage;
