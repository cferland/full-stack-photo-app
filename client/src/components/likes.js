import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      image_url: "",
      caption: "",
      location: "",
      likes: 0
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = () => {
    if (this.props.posts.length) {
      const { username, image_url, caption, location, likes } = this.props.posts.find(post => {
        return post.id === parseInt(this.props.postId)
      })
      this.setState({
        username,
        image_url,
        caption,
        location,
        likes
      })
    }
  }

  addLike = async (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
    await this.props.updatePost(this.props.postId, this.state)
    await this.props.setPost(this.state)
  };

  render() {
    return (
      <div>
        <button className="like" onClick={this.addLike}>Cheetohs!</button>
        <p>{this.state.likes}</p>
      </div>
    )
  }
}

export default LikeButton;