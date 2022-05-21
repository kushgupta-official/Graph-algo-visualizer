import React, { Component } from "react";
import GraphAlgoVisualizer from "./graphAlgoVisualizer/graphAlgoVisualizer";
import MinimumSpanningTree from "./minimumSpanningTree/minimumSpanningTree";
import TopologicalSorting from "./topologicalSorting/FormInput";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" element={<GraphAlgoVisualizer />} />
            <Route
              exact
              path="/Graph-Algo-Visualizer"
              element={<GraphAlgoVisualizer />}
            />
            <Route exact path="/gav" element={<GraphAlgoVisualizer />} />
            <Route exact path="/mst" element={<MinimumSpanningTree />} />
            <Route
              exact
              path="/TopologicalSorting"
              element={<TopologicalSorting />}
            />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
