import React from "react";
import { Link, Redirect } from "react-router-dom";
import './CSS/Signup.css';
import axios from "axios";
import sha1 from "js-sha1";
import { SECREAT_KEY } from '../config/config.json'

axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirm: "",
      username: "",
      errorMessage: "",
      redirect: null
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.checkValidPw = this.checkValidPw.bind(this);
  }

  checkValidPw() {
    if (this.state.password === this.state.password_confirm) {
      return true;
    }
    return false;
  }

  handleInputValue = (key) => (e) => {
    console.log(this.state);
    if (key === "password" || key === "password_confirm") {
      this.setState({ [key]: sha1(e.target.value + SECREAT_KEY) })
    } else {
      this.setState({ [key]: e.target.value });
    }
  };

  handleSignup = () => {
    const { email, password, username } = this.state;
    if (!email || !password || !username) {
      this.setState({
        errorMessage: "모든 항목은 필수입니다"
      });
      return;
    } else if (!this.checkValidPw()) {
      this.setState({
        errorMessage: "비밀번호를 확인해 주세요."
      });
      return;
    } else {
      this.setState({
        errorMessage: ""
      });
      return axios
        .post("http://54.180.150.143:3001/users/signup", {
          email: email,
          password: password,
          username: username,
        })
        .then((res) => {
          // 로그인 성공 (home page redirection & root state update)
          sessionStorage.setItem("login_type", "local");
          sessionStorage.setItem("user_name", res.data.username);
          sessionStorage.setItem("user_email", res.data.email);
          sessionStorage.setItem("user_profile", "https://cdn.onlinewebfonts.com/svg/img_83486.png");
          sessionStorage.setItem("user_birth", "");
          this.props.usrUpdate(res.data.username);
          this.setState({ redirect: "/" });
        })
        .catch((err) => {
          if (err.response.status === 409) {
            this.setState({
              errorMessage: "이미 존재하는 이메일입니다."
            })
          }
        });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="signup-wrapper">
        <div className="signup-container">
          {/* signup form */}
          <div className="signup-form-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="signup-title">Sign Up</h1>
              <div className="signup-warnning"><p>모든 항목은 필수입니다</p></div>

              <div className="signup-group">
                <label type="email">Email:</label>
                <input
                  type="email" id="email-input"
                  onChange={this.handleInputValue("email")}></input>
              </div>

              <div className="signup-group">
                <label type="password">Password:</label>
                <input
                  type="password" id="password-input"
                  onChange={this.handleInputValue("password")}></input>
              </div>

              <div className="signup-group">
                <label type="password">Password Confirm:</label>
                <input
                  type="password" id="password-confirm-input"
                  onChange={this.handleInputValue("password_confirm")}></input>
              </div>

              <div className="signup-group">
                <label type="text">Name:</label>
                <input
                  type='text'
                  onChange={this.handleInputValue("username")}></input>
              </div>

              <div><Link to='/login'>이미 아이디가 있으신가요?</Link></div>

              <button className="signup-btn" type='submit' onClick={this.handleSignup}>
                Sign-up
              </button>

              {this.state.errorMessage ? <div className="alert-box">{this.state.errorMessage}</div> : ''}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;