import React from "react";
import { ENGLISH } from "../constant";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const text = language === ENGLISH ? "Name" : "Tên";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
