import React from 'react';
import DatePicker from 'react-date-picker';
import './CSS/StampBoard.css';
import tree from '../images/tree.png'

const user = "mira kwak"

class StampBoard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { handleInputChange, title, startDate, endDate, no } = this.props;
        return (
            <div className="stamp-wrap">
                <h5 className="stamp-no">#{no}</h5>
                <form className="canvas">
                    <h2 id="to">To: <input type="text" onChange={handleInputChange("title", no)} value={title} placeholder="내용을 입력하세요..." /></h2>
                    <div className="img-stamp">
                        <img src={tree} alt='tree' className="img" />
                        <div className="stamp-circle-wrapper">
                            <div className="circle">1</div>
                            <div className="circle">2</div>
                            <div className="circle">3</div>
                            <div className="circle">4</div>
                            <div className="circle">5</div>
                            <div className="circle">6</div>
                            <div className="circle">7</div>
                            <div className="circle">8</div>
                            <button className="addBtn">➕</button>
                        </div>
                    </div>
                    <h2 id="from">From: {user}</h2>
                </form>
                <form className="textbox">
                    <h2>Title</h2>
                    <textarea id="text" placeholder="내용을 입력하세요..." onChange={this.addText}></textarea>
                    <h2>Start date</h2>
                    <DatePicker className="expire-date-picker" onChange={handleInputChange("start_date", no)} value={startDate} />
                    <h2>End date</h2>
                    <DatePicker className="expire-date-picker" onChange={handleInputChange("end_date", no)} value={endDate} />
                    <div><button id="submit" onClick={this.newCouponBTN}>SAVE</button></div>
                </form>
            </div>
        )
    }
}

export default StampBoard;