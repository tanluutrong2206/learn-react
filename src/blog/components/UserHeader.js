import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return <div>Loading ... </div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((u) => u.id === ownProps.userId);
  return { user };
};
export default connect(mapStateToProps)(UserHeader);
