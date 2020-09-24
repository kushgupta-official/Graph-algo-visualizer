import React, { Component } from "react";
import "./node.css";
//var t = 1;

class Node extends Component {
  state = {};

  getClassName = () => {
    let str = "node";
    if (this.props.isStart === true) {
      str = str + " startNode";
      console.log("start");
    } else if (this.props.isEnd === true) {
      str = str + " endNode";
      console.log("end");
    }
    return str;
  };

  render() {
    return <div className={this.getClassName()}></div>;
  }
}

export default Node;
