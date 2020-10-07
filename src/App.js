import React, { Component } from "react";
import GraphAlgoVisualizer from "./graphAlgoVisualizer/graphAlgoVisualizer";
//import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      //<div className="App-header">
      <div>
        <GraphAlgoVisualizer />
      </div>
    );
  }
}

export default App;
