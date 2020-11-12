
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
function Nav() {
  return (
    <nav>

      <div id="nav-container">
        <div className="logo-container">
          <span>COUPONG</span>
        </div>
        <ul className="nav-content-list">
          <li className="nav-content">
            <Link className="nav-list-link" to="/">Home</Link>
          </li>
          <li className="nav-content">
            <Link className="nav-list-link" to="/mypage">My Page</Link>
          </li>
          <li className="nav-content">
            <Link className="nav-list-link" to="/login">Login</Link>
          </li>
          <li className="nav-content">
            <Link className="nav-list-link" to="/signup">JOIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;



