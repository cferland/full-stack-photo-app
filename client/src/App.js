import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import { loginUser, registerUser, verifyUser, showPost, showPosts, createPost, updatePost, deletePost } from './services/api_helper';

import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Post from './components/singlePost';
import Gallery from './components/gallery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      errorText: '',
      post: null,
      posts: null
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({ errorText: "You must supply a username and password." });
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({ currentUser, errorText: '' });
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({ errorText: "You must supply a username and password." })
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({ currentUser, errorText: '' });
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  handleLogout = async () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  getPost = async (id) => {
    const post = await showPost(id);
    this.setState({
      post
    })
    return post;
  }

  getPosts = async () => {
    const posts = await showPosts();
    this.setState({
      posts
    })
    console.log(this.state.posts);
  }

  createPost = async (post) => {
    const newPost = await createPost(post);
    const posts = this.state.posts.slice(0);
    posts.push(newPost);
    this.setState({
      posts
    })
  }

  updatePost = async (id, updates) => {
    const newPost = await updatePost(id, updates);
    this.setState({
      posts: this.state.posts.map(post => (
        post.id === parseInt(id) ? newPost : post
      )),
      post: newPost
    })
  }

  deletePost = async (e, id) => {
    e.preventDefault();
    await deletePost(id);
  }

  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.handleLogout} currentUser={this.state.currentUser} />
        {this.state.errorText && <p className="error">{this.state.errorText}</p>}
        <Route path="/login" render={() => (
          this.state.currentUser ? ( <Redirect to="/" /> ) : (
          <Login handleLogin={this.handleLogin}  /> )
        )} />
        <Route path="/register" render={() => (
          this.state.currentUser ? ( <Redirect to="/" /> ) : (
          <Register handleRegister={this.handleRegister} /> )
        )} />

        <Route exact path="/" render={(props) =>
          <Gallery {...props}
            getPosts={this.getPosts}
            currentUser={this.state.currentUser}
            posts={this.state.posts}
            createPost={this.createPost}
          />}
        />
        <Route exact path="/post/:id" render={(props) =>
          <Post {...props}
            getPost={this.getPost}
            currentUser={this.state.currentUser}
            post={this.state.post}
            posts={this.state.posts}
            updatePost={this.updatePost}
            deletePost={this.deletePost}
          />}
        />
      </div>
    );
  }
}

export default App;