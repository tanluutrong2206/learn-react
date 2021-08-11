import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Field } from "redux-form";
import { ReactComponent } from "react-formio";
import { TextField } from "@material-ui/core";

/**
 * An example React component
 *
 * Replace this with your custom react component. It needs to have two things.
 * 1. The value should be stored is state as "value"
 * 2. When the value changes, call props.onChange(null, newValue);
 *
 * This component is very simple. When clicked, it will set its value to "Changed".
 */
const MyTextFieldCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      label: props.label,
    };

    console.log(props.validators);
    console.log(props.error);
  }

  setValue = () => {
    this.setState(
      (prevState) => ({ value: prevState.value }),
      () => this.props.onChange(null, this.state.value)
    );
  };

  render() {
    return (
      <TextField
        variant="outlined"
        label={this.state.label}
        value={this.state.value}
      />
    );
  }
};

export default class MyTextField extends ReactComponent {
  static schema(...extend) {
    return ReactComponent.schema({
      type: "mytextfield",
      label: "My Component",
      key: "mytextfield",
    });
  }

  static get builderInfo() {
    return {
      title: "My Component",
      icon: "terminal",
      group: "basic",
      documentation: "/userguide/#textfield",
      weight: 0,
      schema: MyTextField.schema(),
    };
  }

  attachReact(element) {
    console.log(this);
    ReactDOM.render(
      <MyTextFieldCustomComp
        component={this.component} // These are the component settings if you want to use them to render the component.
        value={this.dataValue} // The starting value of the component.
        label={this.label}
        error={this.error}
        validators={this.validators}
        onChange={this.updateValue} // The onChange event to call when the value changes.
      />,
      element
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
