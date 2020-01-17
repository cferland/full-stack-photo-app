import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav>
    {props.currentUser ?
      <div>
        <p>Hello, {props.currentUser.username}</p>
        <button onClick={props.logout}>Logout</button>
      </div>
      :
      <Link to="/login">Login / Register</Link>
    }
    <br />
    <Link to="/">Home</Link>
    </nav>
  )
}

export default Header;