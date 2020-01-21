import React, { Component } from 'react';

class EditPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      image_url: "",
      caption: "",
      location: ""
    }
  }

  componentDidMount() {
    this.setFormData();
  }
  
  setFormData = () => {
    if (this.props.posts.length) {
      const { username, image_url, caption, location } = this.props.posts.find(post => {
        return post.id === parseInt(this.props.postId)
      })
      this.setState({
        username,
        image_url,
        caption,
        location
      })
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form className="edit-form" onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePost(this.props.postId, this.state)
          this.props.setPost(this.state)
        }}>
          {/* <input
          <input className="edit-input"
            autocomplete="off"
            type="textarea"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          /> */}

          <input className="edit-input"
            autocomplete="off"
            type="textarea"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
            placeholder="Image"
          />

          <input className="edit-input"
            autocomplete="off"
            type="textarea"
            name="caption"
            value={this.state.caption}
            onChange={this.handleChange}
            placeholder="Caption"
          />

          <input className="edit-input"
            autocomplete="off"
            type="textarea"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Location"
          />

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default EditPostForm;