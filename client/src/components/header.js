import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav>
    {props.currentUser ?
      <div>
        <p>Hello, {props.currentUser.username}</p>
        <button onClick={props.logout}>Logout</button>
        <div>
          <img className="logo" src="https://res.cloudinary.com/teepublic/image/private/s--jEJ3rCFV--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-122,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-233,y_-215/b_rgb:e3ab0a/c_limit,f_jpg,h_630,q_90,w_630/v1574562214/production/designs/6863864_0.jpg"/>
        </div>
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