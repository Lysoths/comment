import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
