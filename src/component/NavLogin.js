
import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class NavLgoin extends React.Component {

  constructor(props) {
    super(props);

    this.handleUiByLogin = this.handleUiByLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    sessionStorage.clear();
    this.props.usrUpdate();
  }

  handleUiByLogin() {
    if (!this.props.usrName) {
      return (
        <div className="nav-container-auth">
          <li className="nav-content">
            <Link className="nav-list-link" to="/login">Login</Link>
          </li>
          <li className="nav-content">
            <Link className="nav-list-link" to="/signup">JOIN</Link>
          </li>
        </div>
      )
    } else {
      return (
        <div className="nav-container-auth">
          <li className="nav-content">
            <div className="user-progile-container">
              <img src={sessionStorage.getItem('user_profile')} alt={sessionStorage.getItem('user_name')} />
            </div>
          </li>
          <li className="nav-content">
            <button className="nav-logout" onClick={this.handleLogout}>로그아웃</button>
          </li>
        </div>
      )
    }
  }

  render() {

    return this.handleUiByLogin()

  }
}

export default NavLgoin;
