import React, { Component } from "react";
import CreateComment from "./createComment";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: ""
    };
  }

  componentDidMount = async () => {
    await this.props.getComments(this.props.postId);
  };

  render() {
    return (
      <div>
        {this.props.comments &&
          <div className="comments">
            <h2>Comments</h2>
            {this.props.comments.map((comment, index) => {
              return (
                <div key={index} className='comment-box'>
                  <p><span className="bold">{comment.username}:</span> {comment.comment}</p>
                  {this.props.currentUser && this.props.currentUser.username === comment.username &&
                    <button className="delete" onClick={(e) => {
                      e.preventDefault();
                      let safeguard = window.confirm('You are about to delete this comment! Press OK to confirm.');
                      if (safeguard === true) {
                        this.props.deleteComment(e, this.props.postId, comment.id);
                      }
                    }
                    }>
                      Delete
                  </button>}
                </div>
              )
            })
            }
          </div>
        }

        {this.props.currentUser &&
          <CreateComment
            postId={this.props.postId}
            createComment={this.props.createComment}
            currentUser={this.props.currentUser}
          />
        }
      </div>

    )
  }
}

export default Comments;
