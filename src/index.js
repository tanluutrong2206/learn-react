import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./blog/reducers";
import ClientApp from "./streams/client/ClientApp";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    {/* Season display */}
    {/* <SeasonDisplay /> */}

    {/* Pics App */}
    {/* <PicsApp /> */}
    {/* <FormIoMaterialUiApp /> */}
    <Provider store={store}>
      {/* <SongApp /> */}
      {/* <BlogApp /> */}
      <ClientApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
