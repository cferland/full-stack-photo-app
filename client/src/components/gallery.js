import React, { Component } from 'react'
import axios from 'axios'

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

  // componentDidMount = async e => {
  //   const response = await axios.get('http://localhost:3001/posts')
  //   console.log(response.data);

  //   this.setState({
  //     post: response.data,
  //     apiDataLoaded: true
  //   })
    
  // }

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