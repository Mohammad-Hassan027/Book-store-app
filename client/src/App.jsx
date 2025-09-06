import { Outlet } from "react-router-dom";
import NaveBar from "./component/NaveBar";
import Footer from "./component/Footer";

function App() {
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
