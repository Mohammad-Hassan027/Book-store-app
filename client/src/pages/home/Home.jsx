import Hero from "./Hero";
import News from "./News";
import Recommanded from "./Recommanded";
import TopSeller from "./TopSeller";
import Trending from "./Trending";

function Home() {

  return (
    <div className="">
      <Hero />
      <TopSeller />
      <Recommanded />
      <Trending />
      <News />
    </div>
  );
}

export default Home;
