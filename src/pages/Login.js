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
          <p className="login-seperator">-OR-</p>

          {/* login form */}
          <form>

          </form>

        </div>

      </div>
    );
  }
}

export default Login;