import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.id, formValues);
  };
  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const { params } = match;
  const id = params.id;
  return { stream: state.streams[id], id };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
