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
        <h2>Login!!</h2>
        <label htmlFor='username'>username</label>
        <input className='input'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor='passwrod'>Password</label>
        <input className='input'
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type='submit' className='btn'/>
        <Link to ='/register'>Register</Link>
      </form>
    )
  }

}