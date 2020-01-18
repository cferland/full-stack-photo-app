import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditPostForm from './editPost';

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      postDate: null,
      postId: null,
      editing: false
    }
  }

  componentDidMount = async () => {
    const post = await this.props.getPost(this.props.match.params.id);
    const postId = this.props.match.params.id;
    const setPostDate = new Date(post.createdAt);
    const postDate = setPostDate.toDateString();
    console.log(postDate);
    this.setState({
      post,
      postId,
      postDate
    })
    console.log(this.state.post);
  }

  setPost = (newPost) => {
    this.setState({
      post: newPost,
      editing: false
    })
  }

  editForm = (e) => {
    e.preventDefault();
    this.setState({
      editing: true
    })
  }

  reset = () => {
    this.setState({
      post: null,
      postId: null,
      postDate: null,
      editing: false
    })
  }

  render() {
    return (
      <div>
        {this.state.post &&
          <div>
            <h4>
              {this.state.post.username}
            </h4>
            <img src={this.state.post.image_url} />
            <p>
              {this.state.post.caption}
            </p>
            <p>
              Location: {this.state.post.location}
            </p>
            <p>Date: {this.state.postDate}</p>
            {this.props.currentUser
              ?
              <div>
                <Link to='/'>
                  <button onClick={(e) => {
                    e.preventDefault();
                    let safeguard = window.confirm('You are about to delete this post! Press OK to confirm.');
                    if (safeguard === true) {
                      this.props.deletePost(e, this.state.postId);
                      this.reset();
                    }
                  }
                  }>
                    Delete
                  </button>
                </Link>
                <button onClick={(e) => this.editForm(e)}>
                  Edit
                </button>
                {this.state.editing &&
                  <EditPostForm
                    updatePost={this.props.updatePost}
                    postId={this.props.match.params.id}
                    posts={this.props.posts}
                    setPost={this.setPost}
                  />
                }
              </div>
              :
              <p>You must login to edit posts!</p>
            }
          </div>
        }
      </div>
    )
  }
}

export default Post; 