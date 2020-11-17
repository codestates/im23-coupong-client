import React from 'react';
import Coupon from '../component/coupon/Coupon';
import DatePicker from 'react-date-picker';
import './CSS/CouponSetUp.css';



class CouponSetUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coupon_cnt: 1,
      coupon_data: [
        {
          no: 1,
          title: "",
          start_date: "",
          end_date: ""
        }
      ],
      errMsg: ""
    }

    this.handleMoreBtn = this.handleMoreBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleMoreBtn() {
    console.log(this.state);
    if (this.state.coupon_cnt === 3) {
      return this.setState({ errMsg: "쿠폰 추가 최대갯수는 3개입니다." })
    } else {
      // this.setState({ coupon_cnt: prevCnt + 1 })
      return this.setState((state) => {
        return {
          coupon_cnt: state.coupon_cnt + 1,
          coupon_data: [...state.coupon_data, {
            no: state.coupon_cnt + 1,
            title: "",
            start_date: "",
            end_date: ""
          }]
        }
      })
    }
  }

  handleInputChange = (key, num) => (event) => {

    let items = [...this.state.coupon_data];
    let item = { ...items[num - 1] };
    if (key === "title") {
      item[key] = event.target.value;
    } else {
      item[key] = event
    }
    items[num - 1] = item;
    this.setState({ coupon_data: items })

  }

  // this.setState((state, props) => {
  //   return {counter: state.counter + props.step};
  // });
  render() {
    return (
      // 여기에 couponEditor comp들어와야됨
      <div className="coupon-editor-container">
        <section className="editor-viewer-section">
          <div className="viewer-display">

            {this.state.coupon_data.map(coupon => {
              return (
                <Coupon no={coupon.no}
                  title={coupon.title}
                  startDate={coupon.start_date}
                  endDate={coupon.end_date}
                />
              )
            })}

            {this.state.errMsg && (alert(this.state.errMsg))}

          </div>
          <div className="viewer-btn-container">
            <button className="viewer-more-btn" onClick={this.handleMoreBtn}>+</button>
          </div>
        </section>
        <section className="editor-write-section">

          <div className="write-container no-1">
            <h5 className="coupon-no">#1</h5>
            <label type="coupon-title">Title:</label>
            <input type="text"
              onChange={this.handleInputChange("title", 1)}
              value={this.state.coupon_data[0].title}
            />
            <label type="coupon-start-date">Start Date:</label>
            <DatePicker
              onChange={this.handleInputChange("start_date", 1)}
              value={this.state.coupon_data[0].start_date}
            />
            <label type="coupon-end-date">End Date:</label>
            <DatePicker
              onChange={this.handleInputChange("end_date", 1)}
              value={this.state.coupon_data[0].end_date}
            />
          </div>

        </section>
      </div>
    );
  }
}

export default CouponSetUp;