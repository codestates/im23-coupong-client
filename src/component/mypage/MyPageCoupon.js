
import React from 'react';
import FAKE_DATA from '../../FAKE_DATA';

class MyPageCoupon extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(FAKE_DATA.coupon_data);
    return (
      <div className="coupon-container">
        쿠폰 히얼
      </div>
    )
  };
}
export default MyPageCoupon;
