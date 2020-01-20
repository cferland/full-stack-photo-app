import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CreatePost from './createPost';

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      addingPost: false,
      likes: 0
    }
  }

  componentDidMount = async () => {
    await this.props.getPosts();
  }

  handleLikes = (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div className="social_wrapper">
        <header className="header">All the Cheetoh Photos</header>
        <main>
          {this.props.posts ? (
            <div>
              {this.props.posts.map((post, index) => {
                const setPostDate = new Date(post.createdAt);
                const postDate = setPostDate.toDateString();
                return (
                  <div key={index} className="social_card">
                    <h2 className="name">{post.username}</h2>
                    <img className="gallery-img" src={post.image_url}></img>
                    {/* <p>{post.caption}</p>
                    <p>{post.location}</p>
                    <p>{postDate}</p> */}
                    <button className="post-link"><Link to={`/posts/${post.id}`}>Go to Post</Link></button> 
                  </div>)
              })}
              {this.props.currentUser &&
              <div className="add-post">
                <button className="add-button" onClick={() => (this.setState({ addingPost: true }))}>Add a Post <br/><span className="plus-button">+</span></button>
                </div>
              }
              {this.state.addingPost &&
                <CreatePost
                  createPost={this.props.createPost}
                />
              }
            </div>
          ) : (
              <div>Loading...</div>
            )}

        </main>
      </div>
    )
  }

}

export default Gallery;