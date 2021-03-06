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
          <h2 className="register-screen">Register</h2>
          <label htmlFor='username'></label>
          <input className="reg-form"
            autocomplete="off"
            type='text'
            name='username'
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor='password'></label>
          <input className="reg-form"
            autocomplete="off"
            type='password'
            name='password'
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br/>
          <input className='reg-submit' type='submit' />
        </form>
      )
    }
  
  
  }