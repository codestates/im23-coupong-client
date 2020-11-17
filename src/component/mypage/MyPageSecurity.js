
import React from 'react';
import './MyPageNav.css'

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
        비밀번호 변경
        <form>
          <div className="security-group">
            <label type="password">기존 비밀번호:</label>
            <input type="password" id="old-pw-input" name="old-pw"
            // value={this.state.user_name}
            />
          </div>
          <div className="security-group">
            <label type="password">새 비밀번호:</label>
            <input type="password" id="new-pw-input" name="new-pw"
            // value={this.state.user_name}
            />
          </div>
          <div className="security-group">
            <label type="password">비밀번호 확인:</label>
            <input type="password" id="new-pw-confirm-input" name="new-pw-confirm"
            // value={this.state.user_name}
            />
          </div>
        </form>
      </div>
    )
  };
}
export default MyPageSecurity;



