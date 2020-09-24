import React, { Component } from "react";
import Node from "./node/node.jsx";
import "./graphAlgoVisualizer.css";

const total_rows = 20;
const total_columns = 50;
const startNode_Row = 10;
const startNode_Col = 15;
const endNode_Row = 10;
const endNode_Col = 35;

class GraphAlgoVisualizer extends Component {
  state = {
    grid: [],
  };
  componentDidMount() {
    const grid = [];
    for (let row = 0; row < total_rows; row++) {
      const currentRow = [];
      for (let column = 0; column < total_columns; column++) {
        const currentNode = {
          row,
          column,
          isStart: row === startNode_Row && column === startNode_Col,
          isEnd: row === endNode_Row && column === endNode_Col,
        };
        currentRow.push(currentNode);
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
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, column, isStart, isEnd } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      row={row}
                      column={column}
                      isStart={isStart}
                      isEnd={isEnd}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GraphAlgoVisualizer;
