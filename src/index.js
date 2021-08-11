import React from "react";
import ReactDOM from "react-dom";
import FormIoMaterialUiApp from "./formio-materialui/FormIoMaterialUiApp";
import PicsApp from "./pics/PicsApp";

ReactDOM.render(
  <React.StrictMode>
    {/* Season display */}
    {/* <SeasonDisplay /> */}

    {/* Pics App */}
    <PicsApp />
    <FormIoMaterialUiApp />
  </React.StrictMode>,
  document.getElementById("root")
);
