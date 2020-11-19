import React from 'react';
import MyPageNav from '../component/mypage/MyPageNav';
import MyPageCoupon from '../component/mypage/MyPageCoupon';
import MyPageProfile from '../component/mypage/MyPageProfile';
import MyPageSecurity from '../component/mypage/MyPageSecurity';
import MyPageDelete from '../component/mypage/MyPageDelete';
import './CSS/MyPage.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class MyPage extends React.Component {
  render() {
    return (
      <div className="mypage-grid">
        <Router>
          <MyPageNav />
          <Switch>
            <div className="mypage-content-area">
              <Route exact path="/mypage">
                <MyPageProfile />
              </Route>
              <Route path="/mypage/coupon">
                <MyPageCoupon />
              </Route>
              <Route path="/mypage/security">
                <MyPageSecurity />
              </Route>
              <Route path="/mypage/delete">
                <MyPageDelete />
              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MyPage;
