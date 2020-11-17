
import React from 'react';
import './MyPageNav.css'
import { Link } from 'react-router-dom';

class MyPageNav extends React.Component {

  constructor(props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.removeClickedClass = this.removeClickedClass.bind(this);
    this.addClickedClass = this.addClickedClass.bind(this);
  }

  componentDidMount() {
    const navLinkList = document.querySelectorAll('.mypage-nav-link')
    this.removeClickedClass(navLinkList)
    this.addClickedClass(navLinkList, window.location.href);

  }

  handleLinkClick(e) {
    const navLinkList = document.querySelectorAll('.mypage-nav-link')

    this.removeClickedClass(navLinkList);
    this.addClickedClass(navLinkList, e.target.href);
  }

  removeClickedClass(navLinkList) {
    navLinkList.forEach(link => {
      link.classList.remove('clicked')
    })
    return;
  }

  addClickedClass(navLinkList, eventUrl) {
    navLinkList.forEach(link => {
      if (link.href === eventUrl) {
        link.classList.add('clicked')
        return;
      }
    })
  }

  render() {

    return (
      <div className="mypage-nav-container">
        <ul className="mypage-nav-list">
          <li className="mypage-nav-content">
            <Link className="mypage-nav-link" to="/mypage" onClick={this.handleLinkClick}>프로필 설정</Link>
          </li>
          <li className="mypage-nav-content">
            <Link className="mypage-nav-link" to="/mypage/coupon" onClick={this.handleLinkClick}>쿠폰 내역</Link>
          </li>
          <li className="mypage-nav-content">
            <Link className="mypage-nav-link" to="/mypage/security" onClick={this.handleLinkClick}>비밀번호 변경</Link>
          </li>
          <li className="mypage-nav-content">
            <Link className="mypage-nav-link delete" to="/mypage/delete" onClick={this.handleLinkClick}>회원 탈퇴</Link>
          </li>
        </ul>
      </div>
    )
  };
}
export default MyPageNav;



