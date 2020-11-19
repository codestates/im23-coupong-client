import React from 'react';
import DatePicker from 'react-date-picker';
import './CouponEditor.css';

class CouponEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // no: this.props.match.parms.no,

    }

  }

  render() {

    const { handleInputChange, title, startDate, endDate, no } = this.props;
    return (
      < div className="write-container" >
        <h5 className="coupon-no">#{no}</h5>
        <label type="coupon-title">Title:</label>
        <input type="text"
          onChange={handleInputChange("title", no)}
          value={title}
        />
        <label type="coupon-start-date">Start Date:</label>
        <div className="editor-date-picker">
          <DatePicker
            // format="y-M-d"
            className="expire-date-picker"
            onChange={handleInputChange("start_date", no)}
            value={startDate}
          />
        </div>
        <label type="coupon-end-date">End Date:</label>
        <div className="editor-date-picker">
          <DatePicker
            className="expire-date-picker"
            onChange={handleInputChange("end_date", no)}
            value={endDate}
          />
        </div>
      </div >
    )
  };
}
export default CouponEditor;

