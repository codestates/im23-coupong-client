
import React from 'react';
import './MyPageNav.css'

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
        회원 탈퇴
      </div>
    )
  };
}
export default MyPageDelete;



