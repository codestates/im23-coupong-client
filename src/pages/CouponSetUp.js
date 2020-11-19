import React from 'react';
import Coupon from '../component/coupon/Coupon';
import CouponEditor from '../component/coupon/CouponEditor';
import CouponEditorNav from '../component/coupon/CouponEditorNav';
import axios from "axios";
import dateFormat from 'dateformat';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './CSS/CouponSetUp.css';



class CouponSetUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coupon_cnt: 1,
      cur_editor_num: 1,
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
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
    this.displayErrMsg = this.displayErrMsg.bind(this);
    this.postCouponData = this.postCouponData.bind(this);
    this.getCouponData = this.getCouponData.bind(this);
    this.handleCurEditor = this.handleCurEditor.bind(this);
  }

  handleMoreBtn() {
    if (this.state.coupon_cnt === 3) {
      this.setState({ errMsg: "쿠폰 추가 최대갯수는 3개입니다." })
    } else {
      // this.setState({ coupon_cnt: prevCnt + 1 })
      this.setState((prevState) => {
        return {
          coupon_cnt: prevState.coupon_cnt + 1,
          cur_editor_num: prevState.coupon_cnt < 3 ? (
            prevState.coupon_cnt + 1) : (
              prevState.coupon_cnt
            ),
          coupon_data: [...prevState.coupon_data, {
            no: prevState.coupon_cnt + 1,
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
      let date = new Date(event);
      item[key] = dateFormat(date, "yyyy-mm-dd")
    }
    items[num - 1] = item;
    this.setState({ coupon_data: items })

  }

  handleCloseBtn(num) {
    let items = [...this.state.coupon_data];
    this.setState((prevState) => {
      return ({
        coupon_cnt: prevState.coupon_cnt - 1,
        cur_editor_num: prevState.cur_editor_num > 1 ? (
          prevState.cur_editor_num - 1) : (
            prevState.cur_editor_num
          ),
        coupon_data: items.filter(item => item.no !== num)
      })
    })
  }

  displayErrMsg() {
    alert(this.state.errMsg);
    this.setState({ errMsg: "" });
  }

  postCouponData() {
    console.log('###')
    const { user_id, user_name, login_type, user_email } = sessionStorage
    axios.post('http://54.180.150.143:3001/tickets/create', {
      id: user_id,
      name: user_name,
      email: user_email,
      login_type: login_type,
      coupon_cnt: this.state.coupon_cnt,
      coupon_data: this.state.coupon_data
    },
      {
        headers: {
          'User-Id': user_id
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  getCouponData(key, no) {
    let data = this.state.coupon_data.filter(item => item.no === no);
    return data[key];
  }

  handleCurEditor(e) {
    return this.setState({ cur_editor_num: parseInt(e.target.value) })
  }

  render() {
    return (
      // 여기에 couponEditor comp들어와야됨
      <div className="coupon-editor-container">
        <div className="viewer-section-wrapper">
          <div className="editor-title-container">
            <h3>쿠폰 미리보기</h3>
          </div>
          <section className="editor-viewer-section">
            <div className="viewer-display">

              {this.state.coupon_data.map(coupon => {
                return (
                  <Coupon no={coupon.no}
                    title={coupon.title}
                    startDate={coupon.start_date}
                    endDate={coupon.end_date}
                    closeAction={this.handleCloseBtn}
                    totalCnt={this.state.coupon_cnt}
                  />
                )
              })}

              {this.state.errMsg && (this.displayErrMsg())}

            </div>
            <div className="viewer-btn-container">
              <button className="viewer-more-btn" onClick={this.handleMoreBtn}>+</button>
            </div>
          </section>
        </div>
        <div className="write-section-wrapper">
          <section className="editor-write-section">
            <div className="editor-title-container write">
              <h3>쿠폰 정보입력</h3>
            </div>
            <CouponEditorNav
              couponCnt={this.state.coupon_cnt}
              handleCurEditor={this.handleCurEditor}
              curEditor={this.state.cur_editor_num}
            />
            <CouponEditor
              no={this.state.cur_editor_num}
              title={this.getCouponData("title", this.state.cur_editor_num)}
              startDate={this.getCouponData("start_date", this.state.cur_editor_num)}
              endDate={this.getCouponData("end_date", this.state.cur_editor_num)}
              handleInputChange={this.handleInputChange}
            />
            <div className="editor-submit-btn-container">
              <button className="editor-submit-btn" onClick={this.postCouponData}>쿠폰 저장</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CouponSetUp;