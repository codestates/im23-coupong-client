
import React from 'react';
import CouponOverlap from './CouponOverlap';

import FAKE_DATA from '../../FAKE_DATA';

class MyPageCoupon extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="coupon-overlap-wrapper">
        {/* {
          FAKE_DATA.coupon_data.map(group => {
            return (
              <CouponOverlap data={grouup.data} />
            )
          })
        } */}
      </div>
    )
  };
}
export default MyPageCoupon;
