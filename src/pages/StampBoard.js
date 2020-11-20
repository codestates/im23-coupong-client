import React from 'react';
import DatePicker from 'react-date-picker';
import './CSS/StampBoard.css';
import tree from '../images/tree.png'

const user = "mira kwak"

class StampBoard extends React.Component {



    render() {
        return (
            <div className="stamp-wrap">
                <form className="canvas">
                    <h2 id="to">To: <input type="text" placeholder="내용을 입력하세요..." /></h2>
                    <div className="img-stamp">
                        <img src={tree} alt='tree' className="img" />
                        <div className="stamp-circle-wrapper">
                            <div className="circle">1</div>
                            <button className="addBtn" onClick={this.handleAddcircle}>+</button>
                        </div>
                    </div>
                    <h2 id="from">From: {user}</h2>
                </form>
                <form className="textbox">
                    <h2>Title</h2>
                    <textarea id="text" placeholder="내용을 입력하세요..." onChange={this.addText}></textarea>
                    <h2>Start date</h2>
                    <DatePicker className="expire-date-picker" />
                    <h2>End date</h2>
                    <DatePicker className="expire-date-picker" />
                    <div><button id="submit" onClick={this.newCouponBTN}>SAVE</button></div>
                </form>
            </div>
        )
    }
}

export default StampBoard;