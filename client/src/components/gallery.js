import React, { Component } from 'react'
import axios from 'axios'

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [],
      apiDataLoaded: false
    }
  }

  componentDidMount = async e => {
    const response = await axios.get('http://localhost:3000/posts')
    console.log(response.data);

    this.setState({
      post: response.data,
      apiDataLoaded: true
    })
    
  }

  render() {
    return (
      <div>
        <header>All the Cheetoh Photos</header>
        <main>
          {this.state.apiLoaded ? (
            <div>
              {this.state.posts.map((person, index) => (
                <div key={index} className="post-card">
                  <h2 className="name">{person.username}</h2>
                  <h3>{person.image_url}</h3>
                  <p>{person.caption}</p>
                  <p>{person.location}</p>
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