
import React from 'react';

import IMG from '../../images/coupon_template_1.png';
import ScaleText from "react-scale-text";


class CouponSingle extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="bg-container" style={{ backgroundImage: `url(${IMG})` }}>
        <div className="bg-text-container parent" style={{ width: "100%", height: "6rem" }}>
          <ScaleText>
            <p className="child"> {this.props.title ? this.props.title : "제목을 입력해 주세요"} </p>
          </ScaleText>
        </div>

        <div className="bg-desc-container" style={{ width: "100%", height: "6rem" }}>
          <div className="bg-clock-container">
            <img src="https://image.flaticon.com/icons/png/512/223/223404.png"
              alt="clock"
            />
          </div>
          <div className="bg-date-container">
            <label type="start-date">Start Date:</label>
            <input readOnly id="start-date" value={this.props.startDate} />
            <label type="end-date">End Date:</label>
            <input readOnly id="end-date" value={this.props.endDate} />
          </div>
        </div>
      </div>
    )
  }
}
export default CouponSingle;