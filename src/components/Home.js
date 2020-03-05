import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
        <div>
            <p>testing</p>
            <Link to={{
                pathname:"/Graph/bubbleSort",
                state: {
                    algorithm: 'bubbleSort'
                }
            }}>Go To Bubble Sort</Link>
            <Link to={{
                pathname:"/Graph/insertionSort",
                state: {
                    algorithm: 'insertionSort'
                }
            }}>Go To Insertion Sort</Link>
        </div>
        );
    };
}

export default Home;