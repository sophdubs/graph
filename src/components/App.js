import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "../components/Home";
import Graph from "../components/Graph";

class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/Graph/:id" component={Graph}/>
           </BrowserRouter>
        );
    };
} 

export default App;