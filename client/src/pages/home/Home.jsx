import { useAuth } from "../../hooks/useAuth";
import Hero from "./Hero";
import News from "./News";
import Recommanded from "./Recommanded";
import TopSeller from "./TopSeller";

function Home() {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

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
