import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  <nav>
    {this.props.currentUser ?
      <div>
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.props.handleLogout}>Logout</button>
      </div>
      :
      <Link to="/login">Login / Register</Link>
    }
    <br />
    <Link to="/">Home</Link>
  </nav>
}

export default Header;