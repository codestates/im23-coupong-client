
import React from 'react';
import './MyPageSecurity.css'

class MyPageSecurity extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   login_type: sessionStorage.getItem("login_type"),
    //   user_name: sessionStorage.getItem("user_name"),
    //   user_email: sessionStorage.getItem("user_email"),
    //   user_profile: sessionStorage.getItem("user_profile")
    // }
  }



  render() {

    return (
      <div className="mypage-security-container">
        <div className="security-group-title">
          <h1>비밀번호 변경</h1>
        </div>
        <div className="security-form-container">
          <form>
            <div className="security-group">
              <label type="password">기존 비밀번호:</label>
              <input type="password" id="old-pw-input" name="old-pw"
              // value={this.state.user_name}
              />
            </div>
            <div className="security-group">
              <label type="password">새 비밀번호:</label>
              <input type="password" id="new-pw-input" name="new-pw" />
            </div>
            <div className="security-group">
              <label type="password">비밀번호 확인:</label>
              <input type="password" id="new-pw-confirm-input" name="new-pw-confirm" />
            </div>
            <input type="submit" value="변경" id="password-setting-submit" />
          </form>
        </div>
      </div>
    )
  };
}
export default MyPageSecurity;



