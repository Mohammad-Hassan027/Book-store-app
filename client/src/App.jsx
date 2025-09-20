import { Outlet } from "react-router-dom";
import NaveBar from "./component/NaveBar";
import Footer from "./component/Footer";
import { useAuth } from "./hooks/useAuth";
import Loader from "./component/Loader";

function App() {
  const { authLoading } = useAuth();

  if (authLoading) {
    return <Loader />;
  }
  return (
    <>
      <NaveBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
