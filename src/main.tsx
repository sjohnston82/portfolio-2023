import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PortfolioContextProvider } from "./context/PortfolioContext";

ReactDOM.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
