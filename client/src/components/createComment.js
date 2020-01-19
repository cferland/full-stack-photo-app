import React, { Component } from "react";


class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.createComment(this.props.postId, this.state);
          }}
        >
          <input
            type="textarea"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="add comment"
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default CreateComment;
