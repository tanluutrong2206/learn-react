import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import StreamCreate from "./components/stream/StreamCreate";
import StreamDelete from "./components/stream/StreamDelete";
import StreamEdit from "./components/stream/StreamEdit";
import StreamList from "./components/stream/StreamList";
import StreamShow from "./components/stream/StreamShow";
import history from "./history";

const ClientApp = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact component={StreamList} path="/" />
          <Route exact component={StreamCreate} path="/stream/new" />
          <Route exact component={StreamEdit} path="/stream/edit/:id" />
          <Route exact component={StreamDelete} path="/stream/delete/:id" />
          <Route exact component={StreamShow} path="/stream/:id" />
        </Switch>
      </Router>
    </div>
  );
};

export default ClientApp;
