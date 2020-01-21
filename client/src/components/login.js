import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)

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
      <form className='form' onSubmit={(e) => this.props.handleLogin(e, { username: this.state.username, password: this.state.password })}>
        <h2>Login</h2>
        {/* <label htmlFor='username'></label> */}
        <input className='login-form'
          autocomplete="off"
          type='text'
          name='username'
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor='password'></label>
        <input className='login-form'
          autocomplete="off"
          type='password'
          name='password'
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br/>
        <input type='submit' className='login-submit'/>
        <br/>
        <p>Not logged in? <Link className="register" to ='/register'>Register</Link></p>
      </form>
    )
  }

}