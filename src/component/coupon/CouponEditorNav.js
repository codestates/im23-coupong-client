
import React from 'react';
import './CouponEditorNav.css'
import { Link } from 'react-router-dom';

class CouponEditorNav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: this.getCntNum(this.props.couponCnt)
    }
    this.getCntNum = this.getCntNum.bind(this);
  }

  getCntNum(maxNum) {
    let arr = [];
    for (let i = 1; i <= maxNum; i++) {
      arr.push(i);
    }
    return arr;
  }

  render() {
    return (
      <div className="editor-nav-container">
        <ul className="editor-nav-list">

          {this.getCntNum(this.props.couponCnt)
            .map(no => {
              return (
                <li className="editor-nav-content">
                  <Link className="editor-nav-link" to={`/couponsetting/${no}`} onClick={this.handleLinkClick}>{no}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    )
  };
}
export default CouponEditorNav;



