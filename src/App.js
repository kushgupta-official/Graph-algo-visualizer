import React, { Component } from "react";
import GraphAlgoVisualizer from "./graphAlgoVisualizer/graphAlgoVisualizer";
import MinimumSpanningTree from "./minimumSpanningTree/minimumSpanningTree";
import {
  BrowserRouter as Router,
  Routes as Switch, 
  Route, 
} from 'react-router-dom';
import Header from "./Header";
// import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      //<div className="App-header">
      <Router>
           {/* <div className="App"> */}
           <Header />
            <Switch>
            <Route exact path="/" element={<GraphAlgoVisualizer />} />
              <Route exact path="/Graph-Algo-Visualizer" element={<GraphAlgoVisualizer />} />
              <Route exact path='/gav' element={<GraphAlgoVisualizer />} />
              <Route exact path="/mst" element={<MinimumSpanningTree />} />
              {/* <Route exact path='/contact' component={Contact}></Route> */}
            </Switch>
          {/* </div> */}
       </Router>
      // <div>
      //   <GraphAlgoVisualizer />
      // </div>
    );
  }
}

export default App;
