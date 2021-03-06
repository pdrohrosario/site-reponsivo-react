import React from'react';

import {Link} from 'react-router-dom';
import './color.css';
import logo3 from './LOGO-site.png';
function Navbar(){
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-primary">
      <a className="navbar-brand" href="#"><img  className="mx-2"src={logo3}width="50" height="50"/></a>
      <button className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarColor01" 
              aria-controls="navbarColor01" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login">Login</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;