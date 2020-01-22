import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import './sass/app.scss';

import { loginUser, registerUser, verifyUser, showPost, showPosts, createPost, updatePost, 
        deletePost, createComment, showComments, deleteComment } from './services/api_helper';

import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Post from './components/singlePost';
import Gallery from './components/gallery';
import Footer from './components/footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      errorText: '',
      post: null,
      posts: [],
      comments: []
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
  
  getComments = async (id) => {
    const comments = await showComments(id);
    this.setState({
      comments
    })
  }

  createComment = async (id, comment) => {
    const newComment = await createComment(id, comment);
    const comments = this.state.comments;
    comments.push(newComment);
    this.setState({
      comments
    })
  }
  
  deleteComment = async (e, postId, id) => {
    e.preventDefault();
    await deleteComment(postId, id);
    const comments = await showComments(postId);
    this.setState({
      comments
    })
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
        <Route exact path="/posts/:id" render={(props) =>
          <Post {...props}
            getPost={this.getPost}
            getPosts={this.getPosts}
            currentUser={this.state.currentUser}
            post={this.state.post}
            posts={this.state.posts}
            updatePost={this.updatePost}
            deletePost={this.deletePost}
            createComment={this.createComment}
            getComments={this.getComments}
            deleteComment={this.deleteComment}
            comments={this.state.comments}
          />}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;