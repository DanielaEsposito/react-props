import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import css + js bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
// import file css
import "./assets/css/index.css";
// import file App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
