import React from "react";
import { ENGLISH } from "../constant";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderSubmit = (language) => {
    return language === ENGLISH ? "Submit" : "Lưu";
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  };
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
