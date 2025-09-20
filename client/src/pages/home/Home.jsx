import Hero from "./Hero";
import News from "./News";
import Recommanded from "./Recommanded";
import TopSeller from "./TopSeller";

function Home() {

  return (
    <div className="">
      <Hero />
      <TopSeller />
      <Recommanded />
      <News />
    </div>
  );
}

export default Home;
