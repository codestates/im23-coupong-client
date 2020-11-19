import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/CouponEditSelect.css'

class CouponEditSelect extends React.Component {
  render() {
    return (
      // 여기에 CouponEditSelect들어와야됨
      <div className="select-wrap">
        <Link className="StampBoard" to="/stampboard">
          <div className="StampBoard-text">Stamp-Board</div>
        </Link>
        <Link className="Ticket" to="/ticket">
          <div className="Ticket-text">Ticket</div>
        </Link>
      </div>
    );
  }
}

export default CouponEditSelect;