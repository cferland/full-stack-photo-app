import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null
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
              {this.props.posts.map((post, index) => (
                <div key={index} className="post-card">
                  <h2 className="name">{post.username}</h2>
                  <img src={post.image_url}></img>
                  <p>{post.caption}</p>
                  <p>{post.location}</p>
                  <Link to={`/post/${post.id}`}>Go to Post</Link>
                </div>
              ))}
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