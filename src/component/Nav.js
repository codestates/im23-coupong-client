
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import NavLogin from './NavLogin';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <NavLogin isLogin={this.props.isLogin} />
          </ul>
        </div>
      </nav>
    )
  };
}
export default Nav;



