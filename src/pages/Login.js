/*eslint-disable*/
import React from 'react';
import './CSS/Login.css';
import GoogleLoginComp from '../component/socialLogin/GoogleLogin';
import FacebookLoginComp from '../component/socialLogin/FacebookLogin';
import { Redirect } from "react-router-dom";
import axios from "axios";
import { SECREAT_KEY } from '../config/config.json'
import sha1 from "js-sha1";



const TEMP_ACCOUNT = {
  email: 'a@a.a',
  password: '1234'
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: "",
      redirect: null
    }

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePwInputChange = this.handlePwInputChange.bind(this);
    this.userValidCheck = this.userValidCheck.bind(this);
    this.handleResponseSuccess = this.handleResponseSuccess.bind(this);
  }

  handleEmailInputChange(e) {

    this.setState({ email: e.target.value });
  }

  handlePwInputChange(e) {

    this.setState({ pw: sha1(e.target.value + SECREAT_KEY) });
  }

  handleResponseSuccess(res) {
    // let history = useHistory();
    // console.log(res);
    console.log('----------');
    console.log(res);
    console.log('----------');
    sessionStorage.setItem("login_type", "local");
    sessionStorage.setItem("user_id", res.data.userId);
    sessionStorage.setItem("user_name", res.data.username);
    sessionStorage.setItem("user_email", res.data.email);
    sessionStorage.setItem("user_profile", "https://cdn.onlinewebfonts.com/svg/img_83486.png");
    sessionStorage.setItem("user_birth", "");
    this.props.usrUpdate(res.data.username);
    this.setState({ redirect: "/" })

  }

  userValidCheck(e) {
    e.preventDefault();

    const { email, pw } = this.state;

    if (!email || !pw) {
      this.setState({
        errorMessage: "이메일과 비밀번호를 입력하세요"
      });
      return;
    } else {
      this.setState({
        errorMessage: ""
      });
    }

    return axios
      .post("http://54.180.150.143:3001/users/signin", {
        email: email,
        password: pw,
      })
      .then(this.handleResponseSuccess)
      .catch((err) => {
        // alert("로그인 실패: 아이디와 비밀번호를 다시 확인해주세요.")
        console.log(err);
      });




  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          {/* social lgoin */}
          <FacebookLoginComp usrUpdate={this.props.usrUpdate} />

          <GoogleLoginComp usrUpdate={this.props.usrUpdate} />

          {/* seperator */}
          <div className="seperator-container">
            <p className="login-seperator">-OR-</p>
          </div>

          {/* login form */}
          <div className="login-form-container">
            <form className="login-form" autoComplete="off" onSubmit={this.userValidCheck}>
              <div className="login-group">
                <label type="email">Email:</label>
                <input type="email" id="email-input" name="email" value={this.state.email} onChange={this.handleEmailInputChange} />
              </div>
              <div className="login-group">
                <label type="password">Password:</label>
                <input type="password" id="password-input" name="password" onChange={this.handlePwInputChange} />
              </div>
              <a href="/" className="forget-pw-link">Forgot password?</a>
              <input type="submit" value="Login" id="login-submit" />
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default Login;