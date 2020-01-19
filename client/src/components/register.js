import React, { Component } from 'react'


export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({
        [name]: value
      })
    }

    render() {
      return (
        <form onSubmit={(e) => this.props.handleRegister(e, { username: this.state.username, password: this.state.password })}>
          <h2>Register!!</h2>
          <label htmlFor='username'></label>
          <input className="reg-form"
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor='password'></label>
          <input className="reg-form"
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br/>
          <input type='submit' />
        </form>
      )
    }
  
  
  }