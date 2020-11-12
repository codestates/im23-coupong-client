import React from "react";
import { Link } from "react-router-dom";
import './CSS/Signup.css';
// import axios from "axios";

// axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    const { email, password, username } = this.state;
    if (!email || !password || !username) {
      this.setState({
        errorMessage: "모든 항목은 필수입니다"
      });
      return;
    }
    else {
      this.setState({
        errorMessage: ""
      });
    }

    // axios
    //   .post("http://localhost:3001/signup", {
    //     email: email,
    //     password: password,
    //     username: username,
    //     mobile: mobile,
    //   })
    //   .then((res) => {
    //     this.props.history.push("/");
    //   })
    //   .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="signup-wrapper">
        <div className="signup-container">
          {/* signup form */}
          <div className="signup-form-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="title">Sign Up</h1>
              <div className="warnning">모든 항목은 필수입니다</div>

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