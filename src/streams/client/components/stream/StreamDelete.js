import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <>
        <button className="ui button negative" onClick={this.onDelete}>
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this streams?";
    } else {
      return `Are you sure you want to delete the streams with title: ${this.props.stream.title}?`;
    }
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
