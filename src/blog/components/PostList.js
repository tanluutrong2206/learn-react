import React from "react";
import { connect } from "react-redux";

import { fetchPostsAndUser } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }

  renderList() {
    return this.props.posts.map(({ id, title, body, userId }) => {
      return (
        <div className="item" key={id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <UserHeader userId={userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);
