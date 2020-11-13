import React from 'react';
import './CSS/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-container">

          {/* social lgoin */}
          <a href="/" className="fb-login social-login">
            Login with Facebook
          </a>
          <a href="/" className="google-login social-login">
            Login with Google
          </a>

          {/* seperator */}
          <div className="seperator-container">
            <p className="login-seperator">-OR-</p>
          </div>

          {/* login form */}
          <div className="login-form-container">
            <form className="login-form" autoComplete="off" action="">
              <div className="login-group">
                <label type="email">Email:</label>
                <input type="email" id="email-input" name="email" />
              </div>
              <div className="login-group">
                <label type="password">Password:</label>
                <input type="password" id="password-input" name="password" />
              </div>
              <a href="/" class="forget-pw-link">Forgot password?</a>
              <input type="submit" value="Login" id="login-submit" />
            </form>
          </div>

        </div>

      </div>
    );
  }
}

export default Login;