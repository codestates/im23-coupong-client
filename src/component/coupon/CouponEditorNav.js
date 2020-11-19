
import React from 'react';
import './CouponEditorNav.css'
import { Link } from 'react-router-dom';

class CouponEditorNav extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
    this.getCntNum = this.getCntNum.bind(this);
    // this.handleBtnClick = this.handleBtnClick.bind(this);
    // this.removeClickedClass = this.removeClickedClass.bind(this);
    // this.addClickedClass = this.addClickedClass.bind(this);
  }

  getCntNum(maxNum) {
    let arr = [];
    for (let i = 1; i <= maxNum; i++) {
      arr.push(i);
    }
    return arr;
  }

  // handleBtnClick(e) {
  //   const navBtnList = document.querySelectorAll('.editor-nav-btn');
  //   this.removeClickedClass(navBtnList);
  //   this.addClickedClass(navBtnList, e.target.value);
  //   this.props.handleCurEditor(e);
  //   return;
  // }

  // removeClickedClass(navBtnList) {
  //   navBtnList.forEach(link => {
  //     link.classList.remove('clicked')
  //   })
  //   return;
  // }

  // addClickedClass(navBtnList, no) {
  //   navBtnList.forEach(btn => {
  //     if (btn.value === no) {
  //       btn.classList.add('clicked')
  //       return;
  //     }
  //   })
  // }

  render() {
    console.log('current editor num: ', this.props.curEditor)
    return (
      <div className="editor-nav-container">
        <ul className="editor-nav-list">

          {this.getCntNum(this.props.couponCnt)
            .map(no => {
              return (
                <li className="editor-nav-content">
                  <button
                    className={this.props.curEditor === no ? (
                      "editor-nav-btn clicked"
                    ) : (
                        "editor-nav-btn"
                      )
                    }
                    value={no}
                    onClick={this.props.handleCurEditor}
                  >
                    {no}
                  </button>
                </li>
              )
            })}
        </ul>
      </div>
    )
  };
}
export default CouponEditorNav;



