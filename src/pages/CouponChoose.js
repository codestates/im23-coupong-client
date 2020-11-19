import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/CouponChoose.css';

class CouponChoose extends React.Component {
  render() {
    return (
      <div className="coupon-choose-wrapper">
        <div className="choose-router-container stamp">
          <Link className="coupon-choose-list-link" to="/">
            <i class="fas fa-stamp fa-5x"></i>
            <span>스탬프형</span>
          </Link>
        </div>
        <div className="choose-router-container ticket">
          <Link className="coupon-choose-list-link" to="/couponsetting/ticket">
            <i className="fas fa-ticket-alt fa-5x"></i>
            <span>티켓형</span>
          </Link>
        </div>
      </div >
    );
  }
}

export default CouponChoose;