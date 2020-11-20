
import React from 'react';
import CouponSingle from './CouponSingle';
import './CouponOverlap.css'



class CouponOverlap extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div
        className={
          `coupon-overlap-container group-no-${this.props.groupNo}`
        }
      >
        {
          this.props.data.map(single => {
            return (
              <CouponSingle
                no={single.no}
                title={single.title}
                startDate={single.start_date}
                endDate={single.end_date}
              />
            )
          })
        }
      </div>
    )
  }
}
export default CouponOverlap;