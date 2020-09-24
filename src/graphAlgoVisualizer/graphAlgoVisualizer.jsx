import React, { Component } from "react";
import Node from "./node/node.jsx";
import "./graphAlgoVisualizer.css";

const total_rows = 2;
const total_columns = 5;

class GraphAlgoVisualizer extends Component {
  state = {
    grid: [],
  };
  componentDidMount() {
    const grid = [];
    for (let i = 0; i < total_rows; i++) {
      const currentRow = [];
      for (let j = 0; j < total_columns; j++) {
        currentRow.push([]);
      }
      grid.push(currentRow);
    }
    this.setState({ grid });
  }
  render() {
    const { grid } = this.state;
    console.log(grid);
    return (
      <div>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div>
                {row.map((node, nodeIdx) => (
                  <Node />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GraphAlgoVisualizer;
