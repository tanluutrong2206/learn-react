import React from "react";
import UserCreate from "./components/UserCreate";
import { LanguageStore } from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

class TranslateApp extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default TranslateApp;
