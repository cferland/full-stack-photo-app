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
    await this.props.setPost(this.state);
    this.setState({
      likes: this.state.likes + 1
    })
    await this.props.updatePost(this.props.postId, this.state);
    
  };

  render() {
    return (
      <div>
        {this.props.currentUser.username !== this.state.username &&
          <div>
            <img onClick={this.addLike} className="like" src="https://res.cloudinary.com/teepublic/image/private/s--jEJ3rCFV--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-122,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-233,y_-215/b_rgb:e3ab0a/c_limit,f_jpg,h_630,q_90,w_630/v1574562214/production/designs/6863864_0.jpg" />
            <p>Give this a cheetoh!</p>
          </div>
        }
        <p>This photo has {this.state.likes || 0} cheetohs!</p>
      </div>
    )
  }
}

export default LikeButton;