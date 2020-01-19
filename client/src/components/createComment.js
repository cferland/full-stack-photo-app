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
            this.props.createPost(this.state);
          }}
        >
          <input className="comment"
            type="textarea"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="add comment"
          />
          <input className="send-comment" type='submit' />
        </form>
      </div>
    );
  }
}

export default CreateComment;
