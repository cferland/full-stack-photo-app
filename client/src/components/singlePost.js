import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditPostForm from './editPost';
import Comments from './comments'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      postDate: null,
      postId: null,
      editing: false,
      likes: 0,
      comments: []
    }
  }

  addLike = (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
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
        <Link className="back-nav" to="/">Back</Link>
        {this.state.post &&
          <div>
          <div className='post-card'>
            <h4>
              {this.state.post.username}
            </h4>
            <img className="single-img" src={this.state.post.image_url} />
            <p className="caption">
              {this.state.post.caption}
            </p>
            <p>
              Location: {this.state.post.location}
            </p>
            <p>Date: {this.state.postDate}</p>
            <button className="like" onClick={this.addLike}>Like</button>
          <p>{this.state.likes}</p>
          
          {/* <p>Comments:</p> */}
          <Comments
            postId={this.props.match.params.id}
            createComment={this.props.createComment}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}
            getComments={this.props.getComments}
            comments={this.props.comments}
            />
            </div>

            {this.props.currentUser
              ?
              <div>
                <Link to='/'>
                  <button className="delete" onClick={(e) => {
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
                <button className="edit" onClick={(e) => this.editForm(e)}>
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