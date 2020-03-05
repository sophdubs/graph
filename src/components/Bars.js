import React from 'react';
import { getRandomInt } from "../helpers";

class Bars extends React.Component {
    componentDidMount() {
        const list = document.querySelector('.bar-list');
        const barList = [];
        for (let i = 0; i < 10; i++) {
            const num = getRandomInt();
            barList.push(`<li class="bar index${num}" style="grid-area: a${i}; height:${num}%;">${num}</li>`);
        }
        list.innerHTML=barList.join('');
    }
    render() {
        return (
            <div className="bars">
                <ul className="bar-list">
                </ul>
            </div>
        );
    };
}

export default Bars;