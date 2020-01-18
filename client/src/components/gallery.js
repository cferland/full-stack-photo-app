import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CreatePost from './createPost';

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      addingPost: false
    }
  }

  componentDidMount = async () => {
    await this.props.getPosts();
  }

  render() {
    return (
      <div>
        <header>All the Cheetoh Photos</header>
        <main>
          {this.props.posts ? (
            <div>
              {this.props.posts.map((post, index) => {
                const setPostDate = new Date(post.createdAt);
                const postDate = setPostDate.toDateString();
                return (
                  <div key={index} className="post-card">
                    <h2 className="name">{post.username}</h2>
                    <img src={post.image_url}></img>
                    <p>{post.caption}</p>
                    <p>{post.location}</p>
                    <p>{postDate}</p>
                    <Link to={`/post/${post.id}`}>Go to Post</Link>
                  </div>)
              })}
              {this.props.currentUser &&
                <button onClick={() => (this.setState({ addingPost: true }))}>Add a Post</button>
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