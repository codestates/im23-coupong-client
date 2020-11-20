
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


class NavLgoin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      showModal: false
    }

    this.handleUiByLogin = this.handleUiByLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }


  handleLogout() {
    this.handleModalClick();
    sessionStorage.clear();
    axios.post('http://54.180.150.143:3001/users/signout')
      .then(res => {
        console.log(res)
        this.props.usrUpdate();
        // this.props.updateRedirect("/");
        this.props.goToHome();
      })
      .catch(err => console.log(err));

  }



  handleModalClick(e) {
    // let modalEle = document.querySelector('.nav-modal-container-off');
    // if (modalEle) {
    //   modalEle.setAttribute("class", "nav-modal-container-on");
    // } else {
    //   modalEle = document.querySelector('.nav-modal-container-on');
    //   modalEle.setAttribute("class", "nav-modal-container-off");
    // }
    // return;
    // e.preventDefault();
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
    return;
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
            <Link className="nav-list-link" to="/mypage/coupon">쿠폰 현황</Link>
          </li>
          <li className="nav-content">
            <button className="user-progile-container" onClick={this.handleModalClick}>
              <img src={sessionStorage.getItem('user_profile')} alt={sessionStorage.getItem('user_name')} />
            </button>
          </li>
          { this.state.showModal && (
            <div className="nav-modal-container">
              <Link className="modal-nav-content list-link" onClick={this.handleModalClick} to="/mypage">마이 페이지</Link>
              <button className="modal-nav-content logout" onClick={this.handleLogout}>로그아웃</button>
            </div>
          )}

          {/* <li className="nav-content">
            <button className="nav-logout" onClick={this.handleLogout}>로그아웃</button>
          </li> */}
        </div>

      )
    }
  }

  render() {

    if (this.props.redirect) {
      return (
        <>
          <div className="nav-container-auth">
            <li className="nav-content">
              <Link className="nav-list-link" to="/login">Login</Link>
            </li>
            <li className="nav-content">
              <Link className="nav-list-link" to="/signup">JOIN</Link>
            </li>
          </div>
          <Redirect to={this.state.redirect} />
        </>
      )
    } else {
      return this.handleUiByLogin()
    }


  }
}

export default NavLgoin;
