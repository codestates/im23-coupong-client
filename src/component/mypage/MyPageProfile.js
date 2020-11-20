
import React from 'react';
import DatePicker from 'react-date-picker';
import './MyPageProfile.css'
import axios from "axios";


class MyPageProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login_type: sessionStorage.getItem("login_type"),
      user_id: sessionStorage.getItem("user_id"),
      user_name: sessionStorage.getItem("user_name"),
      user_email: sessionStorage.getItem("user_email"),
      user_profile: sessionStorage.getItem("user_profile"),
      user_birth: sessionStorage.getItem("user_birth")
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.socialLoginTag = this.socialLoginTag.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleDateChange(e) {
    this.setState({ user_birth: e });
    return;
  }

  handleNameChange(e) {
    this.setState({ user_name: e.target.value })
    return;
  }

  socialLoginTag(type) {
    if (!type) {
      return;
    } else {
      return (
        <div className={`social-login-tag-container ${type}`}>
          <span>{`${type}-login`}</span>
        </div>
      )
    }
  }


  handleUpdateProfile(e) {
    // e.preventDefault()
    // axios
    //   .post(`http://54.180.150.143:3001/users/userchange/48`, {
    //     email: this.state.user_email,
    //     user_name: this.state.user_name,
    //     birth: this.state.user_birth
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    sessionStorage.setItem("user_name", this.state.user_name);
    sessionStorage.setItem("user_birth", this.state.user_birth)

    console.log(e.target.value)
  }

  render() {
    return (
      <div className="mypage-profile-container">
        <div className="profile-group title">
          <h1>프로필 설정</h1>
          {/* 소셜 로그인 여부 태그로 표시! */}
          {this.socialLoginTag(this.state.login_type)}
        </div>

        <div className="profile-group profile-img">
          <div className="profile-img-container">
            <img src={this.state.user_profile} alt={this.state.user_name} />
          </div>
        </div>

        <div className="profile-form-container">
          <form className="profile-setting-form" >

            <div className="profile-group">
              <label type="name">Name:</label>
              <input type="name" id="profile-name-input" name="name"
                value={this.state.user_name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="profile-group">
              <label type="email">Email:</label>
              <input type="email" id="profile-email-input" readOnly name="email"
                value={this.state.user_email}
              />
            </div>
            <div className="profile-group">
              <label type="birth">Birth:</label>
              <DatePicker
                className="birth-picker"
                onChange={this.handleDateChange}
                value={this.state.user_birth}
              />
            </div>
            <input type="submit" id="profile-setting-submit" onClick={this.handleUpdateProfile} value="정보 수정" />
          </form>
        </div>
      </div>
    )
  };
}
export default MyPageProfile;




