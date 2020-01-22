import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav>
      {props.currentUser ?
        <div className="header-section">
          <p className="greeting">Hello, {props.currentUser.username}</p>
          <button className="logout" onClick={props.logout}>Logout</button>
        </div>
        :
        <div className='login-home'>
          <Link className="login-button" to="/login">Login</Link>
          <Link className="home-nav" to="/">Home</Link>
        </div>
      }
    </nav>
  )
}

export default Header;