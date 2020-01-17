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
        
      </div>
    )
  }

}