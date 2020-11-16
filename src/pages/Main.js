import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Main.css';
// import bg_image from '../images/mainpage_background.jpg';
const INTRO_TEXT_TITLE_1 = '진심이 담긴 당신의';
const INTRO_TEXT_TITLE_2 = '선물을 만들어 주는 곳';
const INTRO_TEXT_BODY = '종이와 스티커 없이도 예쁜 쿠폰북을 간편하게 만들 수 있도록 \n Coupong 이 도와드리겠습니다!';

class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="main-img-container">
        </div>
        <div className="main-text-container">
          <h1 className="intro-title-1">{INTRO_TEXT_TITLE_1}</h1>
          <h2 className="intro-title-2">{INTRO_TEXT_TITLE_2}</h2>
          <p className="intro-body">{INTRO_TEXT_BODY}</p>
        </div>
        <div className="router-container">
          <Link className="main-list-link" to="/CouponEditSelect">
            <span>쿠폰 만들러 가기</span>
          </Link>
        </div>

      </div >
    );
  }
}

export default Main;