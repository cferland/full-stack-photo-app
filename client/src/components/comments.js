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
            {this.props.comments.map((comment, index) => {
              return (
                <div key={index} className='comment-box'>
                  <h2>{comment.username}</h2>
                  <p>{comment.comment}</p>
                </div>
              )
            })
            }
          </div>
            
        }

             

        
        <CreateComment
          postId={this.props.postId}
          createComment={this.props.createComment}
        />
      </div>
        
    )
  }
}

export default Comments;
