import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import Store from "./context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Store>
      <Router />
    </Store>
  </BrowserRouter>
);
