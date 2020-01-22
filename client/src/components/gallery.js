import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="gallery-header">
        <p className="header">All the Cheetoh Photos</p>
        <main className="gallery-space">
          {this.props.posts ? (
            <div className="gallery">
              {this.props.posts.map((post, index) => {
                return (
                  <div key={index} className="social_card">
                    <h2 className="name">{post.username}</h2>
                    <img className="gallery-img" src={post.image_url}></img>
                    <button className="post-link"><Link to={`/posts/${post.id}`}>Go to Post</Link></button> 
                  </div>)
              })}
              {this.props.currentUser &&
                <div className="add-post">
                {this.state.addingPost ?
                <CreatePost
                createPost={this.props.createPost}
                currentUser={this.props.currentUser} 
                  /> :
                  <button className="add-button" onClick={() => (this.setState({ addingPost: true }))}>Add a Post <br /><span className="plus-button">+</span></button>
                }
                
                
              </div>
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