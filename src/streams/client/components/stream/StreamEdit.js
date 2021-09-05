import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }
  render() {
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, { match }) => {
  const { params } = match;
  const id = params.id;
  return { stream: state.streams[id], id };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
