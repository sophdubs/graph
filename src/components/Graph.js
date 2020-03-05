import React from "react";
import Bars from "./Bars";

import { bubbleSort } from "../algorithms/bubbleSort";
import { swap } from "../helpers";
import '../styles/graph.css';


class Graph extends React.Component {
    sortBars() {
        const bars = Array.from(document.querySelectorAll(".bar-list li"));
        let moves = bubbleSort(bars);
        swap(moves);
    }

    render() {
        return (
            <div className="graph">
                <Bars></Bars>
                <button className="sort-button" onClick={this.sortBars}>Sort</button>
            </div>
        );
    };
}

export default Graph;