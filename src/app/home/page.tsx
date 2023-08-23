import Hero from "./_components/Hero";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Trending from "./_components/Trending";

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
