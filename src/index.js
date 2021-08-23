import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import SongApp from "./songs/SongApp";
import reducers from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    {/* Season display */}
    {/* <SeasonDisplay /> */}

    {/* Pics App */}
    {/* <PicsApp /> */}
    {/* <FormIoMaterialUiApp /> */}
    <Provider store={createStore(reducers)}>
      <SongApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
