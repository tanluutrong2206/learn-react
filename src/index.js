import React from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from "./seasons/SeasonDisplay";

ReactDOM.render(
  <React.StrictMode>
    {/* Season display */}
    <SeasonDisplay />
  </React.StrictMode>,
  document.getElementById("root")
);
