import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          component={this.renderInput}
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter the Title";
  }
  if (!formValues.description) {
    errors.description = "You must enter the Description";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "STREAM_CREATE",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
