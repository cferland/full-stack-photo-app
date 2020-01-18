import React, { Component } from 'react'
import CreateComment from './createComment'

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comment: ''
    }
  }


  render() {
    return (
      <div>
        {this.state.comment}
        <CreateComment />
      </div>
    )
  }


}


export default Comments