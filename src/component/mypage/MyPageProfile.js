
import React from 'react';
import DatePicker from 'react-date-picker';
import './MyPageProfile.css'


class MyPageProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login_type: sessionStorage.getItem("login_type"),
      user_name: sessionStorage.getItem("user_name"),
      user_email: sessionStorage.getItem("user_email"),
      user_profile: sessionStorage.getItem("user_profile"),
      user_birth: sessionStorage.getItem("user_birth")
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.socialLoginTag = this.socialLoginTag.bind(this)
  }

  handleDateChange(date) {
    ;
    this.setState({ user_birth: date });
  }

  socialLoginTag(type) {
    console.log(type);
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
          <form className="profile-setting-form">

            <div className="profile-group">
              <label type="name">Name:</label>
              <input type="name" id="profile-name-input" name="name"
                value={this.state.user_name}
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
                onChange={this.handleDateChange}
                value={this.state.user_birth}
              />
            </div>
            <input type="submit" value="정보 수정" id="profile-setting-submit" />
          </form>
        </div>
      </div>
    )
  };
}
export default MyPageProfile;



