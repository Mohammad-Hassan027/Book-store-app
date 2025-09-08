import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import Store from "./context";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <Router />
      </Store>
    </BrowserRouter>
  </React.StrictMode>
);
