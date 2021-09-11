import React from "react";
import { ENGLISH, VIETNAMESE } from "../constant";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange(ENGLISH)}
        />
        <i
          className="flag vn"
          onClick={() => this.context.onLanguageChange(VIETNAMESE)}
        />
      </div>
    );
  }
}

export default LanguageSelector;
