import React, { useState } from 'react';
import 'NavStampEditor.css';
import img from '../images/*';

function NavStampEditor() {


    let [count1, count2] = useState(1);

    return (
        <nav class="menu-bar">
            <ul id="tool-menu">
                <li>
                    <a><i class="fas fa-star"></i></a>
                    <ul>
                        <li><img src={img.grape.png} /></li>
                        <li><img src={img.tree.png} /></li>
                        <li><img src={img.whale.png} /></li>
                    </ul>
                </li>
                <li>
                    <a>color</a>
                    <input type='color' id='myBestColor' value='#0000ff'></input>
                </li>
                <li>
                    <a>background</a>
                    <ul>
                        <li><img src={img.back.png} /></li>
                        <li><img src={img.back2.png} /></li>
                        <li><img src={img.back3.png} /></li>
                    </ul>
                </li>
                <li>icon</li>
                <li>Count<span onClick={() => { count2(count1 + 1) }}>➕</span>{count1}</li>
                <li>Text</li>
            </ul>
        </nav>
    )
}
export function NavStampEditor();
