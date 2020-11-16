import React from 'react';
import '../CSS/StampBoard.css';
import NavStampEditor from '../../component/NavStampEditor'

class StampBoard extends React.Component {
    render() {
        return (

            <div id="workspace">
                {NavStampEditor}
                <canvas className="canvas"></canvas>
                <canvas></canvas>

            </div>
        );
    }
}

export default StampBoard;