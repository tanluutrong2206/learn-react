import React from "react";
import Formio from "formiojs/Formio";

import { Components } from "react-formio";
import components from "./mytextfield";
import MyTextField from "./mytextfield/MyTextField";
class FormIoMaterialUiApp extends React.Component {
  componentDidMount() {
    Components.setComponents(components);
    Formio.registerComponent("mytextfield", MyTextField);
    Formio.createForm(document.getElementById("formio"), {
      components: [
        {
          type: "mytextfield",
          key: "firstName",
          label: "First Name",
          placeholder: "Enter your first name.",
          hideLabel: true,
          input: true,
          validate: {
            required: true,
            minLength: 2,
            maxLength: 12,
          },
        },
      ],
    });
  }

  render() {
    return <div id="formio"></div>;
  }
}

export default FormIoMaterialUiApp;
