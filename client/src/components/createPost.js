import React, { Component } from 'react';

export default class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.currentUser.username,
            image_url: "",
            caption: "",
            location: ""
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
                <form onSubmit={(e) => {e.preventDefault(); this.props.createPost(this.state)}}>
                    {/* <input className="add"
                        type="textarea"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                    /> */}

                    <input className="add"
                        autocomplete="off"
                        type="textarea"
                        name="image_url"
                        value={this.state.image_url}
                        onChange={this.handleChange}
                        placeholder="Image"
                    />

                    <input className="add"
                        autocomplete="off"
                        type="textarea"
                        name="caption"
                        value={this.state.caption}
                        onChange={this.handleChange}
                        placeholder="Caption"
                    />

                    <input className="add"
                        autocomplete="off"
                        type="textarea"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        placeholder="Location"
                    />

                    <input className="create" type="submit" />
                </form>
            </div>
        )
    }
}