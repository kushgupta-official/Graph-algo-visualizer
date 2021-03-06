import React, { Component } from "react";
import "./node.css";

class Node extends Component {
  state = {};
  getClassName = () => {
    let str = "node";
    if (this.props.isStart === true) {
      str = str + " startNode";
    } else if (this.props.isEnd === true) {
      str = str + " endNode";
    } else if (this.props.isWall === true) {
      str = str + " wall-true";
    } else if (this.props.weight > 0) {
      str = str + " weight-present";
    }
    return str;
  };

  render() {
    const {
      row,
      column,
      // isStart,
      // isEnd,
      // distance,
      // isVisited,
      // previousNode,
      // isWall,
      // weight,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
    } = this.props;
    //console.log(  this.props);
    return (
      <div
        className={this.getClassName()}
        id={`node-${row}-${column}`}
        onMouseDown={() => onMouseDown(row, column)}
        onMouseEnter={() => onMouseEnter(row, column)}
        onMouseUp={() => onMouseUp(row, column)}
      ></div>
    );
  }
}

export default Node;
