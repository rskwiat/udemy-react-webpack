import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    const { posts } = this.props;

    return _.map(posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {

    return (
      <div className="row">
        <div className="posts-header col-12">
          <div className="pull-right">
            <Link className="btn btn-primary"
              to="/posts/new">New Post</Link>
          </div>
          <h3>Posts</h3>
        </div>
        <div className="col-12">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  fetchPosts
})(PostsIndex);
