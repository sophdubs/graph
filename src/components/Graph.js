import React from "react";
import Bars from "./Bars";

import { swap } from "../helpers";
import '../styles/graph.css';


class Graph extends React.Component {
    sortBars = () => {
        const algorithm = this.props.location.state.algorithm;
        const bars = Array.from(document.querySelectorAll(".bar-list li"));
        import(`../algorithms/${algorithm}`).then((module) => {
            const moves = module.sort(bars);
            swap(moves);
        });
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