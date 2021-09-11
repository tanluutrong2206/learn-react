import React from "react";
import { ENGLISH } from "../constant";

const Context = React.createContext({ language: ENGLISH });

export class LanguageStore extends React.Component {
  state = { language: ENGLISH };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
