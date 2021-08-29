import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";

import StreamCreate from "./components/stream/StreamCreate";
import StreamDelete from "./components/stream/StreamDelete";
import StreamEdit from "./components/stream/StreamEdit";
import StreamList from "./components/stream/StreamList";
import StreamShow from "./components/stream/StreamShow";

const ClientApp = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route exact component={StreamList} path="/" />
        <Route exact component={StreamCreate} path="/stream/new" />
        <Route exact component={StreamEdit} path="/stream/edit" />
        <Route exact component={StreamDelete} path="/stream/delete" />
        <Route exact component={StreamShow} path="/stream/show" />
      </BrowserRouter>
    </div>
  );
};

export default ClientApp;
