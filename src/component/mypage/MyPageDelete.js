
import React from 'react';
import './MyPageDelete.css'

class MyPageDelete extends React.Component {

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
      <div className="mypage-delete-container">
        <div className="delete-group-title">
          <h1>회원 탈퇴</h1>
        </div>
        <div className="delete-form-container">
          <form>
            <div className="delete-group">
              <label type="password">비밀번호:</label>
              <input type="password" id="new-pw-input" name="new-pw" />
            </div>
            <div className="delete-group">
              <label type="password">비밀번호 확인:</label>
              <input type="password" id="new-pw-confirm-input" name="new-pw-confirm" />
            </div>
            <input type="submit" value="탈퇴" id="delete-submit" />
          </form>
        </div>
      </div>
    )
  };
}
export default MyPageDelete;



