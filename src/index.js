import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./streams/client/reducers";
import ClientApp from "./streams/client/ClientApp";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
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
