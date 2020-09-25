import React, { Component } from "react";
import "./node.css";
//var t = 1;

class Node extends Component {
  state = {};
  getClassName = () => {
    let str = "node";
    if (this.props.isStart === true) {
      str = str + " startNode";
    } else if (this.props.isEnd === true) {
      str = str + " endNode";
    }
    return str;
  };

  render() {
    const {
      row,
      column,
      isStart,
      isEnd,
      distance,
      isVisited,
      previousNode,
    } = this.props;
    //  console.log(this.props);
    return (
      <div className={this.getClassName()} id={`node-${row}-${column}`}></div>
    );
  }
}

export default Node;
