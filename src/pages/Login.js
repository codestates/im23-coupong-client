import React from 'react';
import './CSS/Login.css';
import GoogleLoginComp from '../component/socialLogin/GoogleLogin';
import FacebookLoginComp from '../component/socialLogin/FacebookLogin';



const TEMP_ACCOUNT = {
  email: 'a@a.a',
  password: '1234'
}

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: ""
    }

    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePwInputChange = this.handlePwInputChange.bind(this);
    this.userValidCheck = this.userValidCheck.bind(this);
  }

  handleEmailInputChange(e) {

    this.setState({ email: e.target.value });
  }

  handlePwInputChange(e) {

    this.setState({ pw: e.target.value });
  }

  userValidCheck(e) {
    e.preventDefault();
    // 정상 로그인
    if (TEMP_ACCOUNT.email === this.state.email) {
      if (TEMP_ACCOUNT.password === this.state.pw) {

        this.props.handleLogin(this.state);
        this.setState({ errMsg: "" })
      } else { // 비밀번호가 틀림
        this.setState({ errMsg: "비밀번호가 일치하지 않습니다." });
      }
    } else { // 가입된 유저가 아님
      this.setState({ errMsg: "가입된 이력이 없습니다." });
    }

  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-container">

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
                <input type="password" id="password-input" name="password" value={this.state.pw} onChange={this.handlePwInputChange} />
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