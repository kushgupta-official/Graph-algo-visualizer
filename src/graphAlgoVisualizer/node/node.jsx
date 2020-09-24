import React, { Component } from "react";
import "./node.css";
var t = 1;

class Node extends Component {
  state = {};
  render() {
    // console.log((t = t + 1));
    return <div className="node"></div>;
  }
}

export default Node;
