
import React from 'react';
import { Link } from 'react-router-dom';


class NavLgoin extends React.Component {

  constructor(props) {
    super(props);

    this.handleUiByLogin = this.handleUiByLogin.bind(this);
  }

  handleUiByLogin() {
    if (!this.props.isLogin) {
      return (
        <div className="nav-auth-container">
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
            login!
          </li>
        </div>
      )
    }
  }

  render() {
    return (
      this.handleUiByLogin()
    )
  }
}

export default NavLgoin;