//time complexity name change
//changing position of start and end

import React, { Component } from "react";
import Node from "./node/node.jsx";
import "./graphAlgoVisualizer.css";
import { dijkstra, getShortestPathDijkstra } from "../algorithms/dijkstra.js";
import { aStar, getShortestPathAstar } from "../algorithms/aStar.js";

const total_rows = 18;
const total_columns = 50;
var startNode_Row = 5;
var startNode_Col = 10;
var endNode_Row = 10;
var endNode_Col = 40;
var time = 0;

class GraphAlgoVisualizer extends Component {
  state = {
    grid: [],
    isMousePressed: false,
    timeComplexity: 0,
    isMovingStart: false,
    isMovingEnd: false,
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
          distance: Infinity,
          isVisited: false,
          previousNode: null,
          isWall: false,
        };
        currentRow.push(currentNode);
      }
      grid.push(currentRow);
    }
    this.setState({ grid });
  }

  getNewGridWithWallToggled = (row, column) => {
    const newGrid = this.state.grid.slice();
    const node = newGrid[row][column];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][column] = newNode;
    return newGrid;
  };

  handleMouseDown = (row, column) => {
    if (
      !(
        (row === startNode_Row && column === startNode_Col) ||
        (row === endNode_Row && column === endNode_Col)
      )
    ) {
      console.log(row, column, "mouse down");
      const newGrid = this.getNewGridWithWallToggled(row, column);
      this.setState({ grid: newGrid, isMousePressed: true });
    }
    // if user wants to change positon of start or end node
    else {
      console.log(row, column, "mouse down starting or ending");
      this.setState({ isMousePressed: true });
      if (row === startNode_Row && column === startNode_Col) {
        const newGrid = this.state.grid.slice();
        const node = newGrid[row][column];
        const newNode = {
          ...node,
          isStart: false,
        };
        newGrid[row][column] = newNode;
        this.setState({ grid: newGrid, isMovingStart: true });
      } else if (row === endNode_Row && column === endNode_Col) {
        const newGrid = this.state.grid.slice();
        const node = newGrid[row][column];
        const newNode = {
          ...node,
          isEnd: false,
        };
        newGrid[row][column] = newNode;
        this.setState({ grid: newGrid, isMovingEnd: true });
      }
    }
  };

  handleMouseEnter = (row, column) => {
    if (!this.state.isMousePressed) return;
    if (this.state.isMovingStart || this.state.isMovingEnd) return;
    if (
      !(
        (row === startNode_Row && column === startNode_Col) ||
        (row === endNode_Row && column === endNode_Col)
      )
    ) {
      console.log(row, column, "mouse enter");
      const newGrid = this.getNewGridWithWallToggled(row, column);
      this.setState({ grid: newGrid });
    } else {
      console.log("mouse entered starting or ending");
    }
  };

  handleMouseUp = (row, column) => {
    console.log("mouse up");
    this.setState({ isMousePressed: false });

    //if moving start or end
    if (this.state.isMovingStart === true) {
      const newGrid = this.state.grid.slice();
      const node = newGrid[row][column];
      const newNode = {
        ...node,
        isWall: false,
        isStart: true,
      };
      newGrid[row][column] = newNode;
      this.setState({ grid: newGrid, isMovingStart: false });
      startNode_Row = row;
      startNode_Col = column;
    } else if (this.state.isMovingEnd === true) {
      const newGrid = this.state.grid.slice();
      const node = newGrid[row][column];
      const newNode = {
        ...node,
        isWall: false,
        isEnd: true,
      };
      newGrid[row][column] = newNode;
      this.setState({ grid: newGrid, isMovingEnd: false });
      endNode_Row = row;
      endNode_Col = column;
    }
  };

  animateAlgo = (visitedNodesInOrder, shortestPath) => {
    for (let i = 1; i < visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        for (let j = 0; j < shortestPath.length; j++)
          setTimeout(() => {
            setTimeout(() => {
              const node = shortestPath[j];
              document.getElementById(
                `node-${node.row}-${node.column}`
              ).className = "node node-shortestPath";
            }, 50 * j);
          }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.column}`).className =
          "node node-visited";
      }, 10 * i);
    }
  };

  visualizeDijkstra = () => {
    this.clearAlgo(); //for clearing grid for any previous algo if implemented
    const { grid } = this.state;
    const startNode = grid[startNode_Row][startNode_Col];
    const endNode = grid[endNode_Row][endNode_Col];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    const shortestPath = getShortestPathDijkstra(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    this.animateAlgo(visitedNodesInOrder, shortestPath);
    this.setState({ timeComplexity: visitedNodesInOrder.length });
    // console.log(shortestPath);
    // console.log(grid);
  };

  visualizeAstar = () => {
    this.clearAlgo(); //for clearing grid for any previous algo if implemented
    const { grid } = this.state;
    const startNode = grid[startNode_Row][startNode_Col];
    const endNode = grid[endNode_Row][endNode_Col];
    const visitedNodesInOrder = aStar(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    const shortestPath = getShortestPathAstar(grid, startNode, endNode);
    console.log(visitedNodesInOrder);
    this.animateAlgo(visitedNodesInOrder, shortestPath);
    this.setState({ timeComplexity: visitedNodesInOrder.length });
    // console.log(shortestPath);
    // console.log(grid);
  };

  clearAlgo = () => {
    const newGrid = this.state.grid;
    for (let row = 0; row < total_rows; row++) {
      for (let column = 0; column < total_columns; column++) {
        newGrid[row][column].distance = Infinity;
        newGrid[row][column].isVisited = false;
        newGrid[row][column].previousNode = null;
        if (
          !(
            (row === startNode_Row && column === startNode_Col) ||
            (row === endNode_Row && column === endNode_Col) ||
            newGrid[row][column].isWall === true
          )
        ) {
          console.log("hi");
          document.getElementById(`node-${row}-${column}`).className = "node";
        }
      }
    }
    this.setState({ grid: newGrid, timeComplexity: 0 });
  };

  undoAlgoAndWalls = () => {
    const newGrid = this.state.grid;
    for (let row = 0; row < total_rows; row++) {
      for (let column = 0; column < total_columns; column++) {
        newGrid[row][column].distance = Infinity;
        newGrid[row][column].isVisited = false;
        newGrid[row][column].previousNode = null;
        newGrid[row][column].isWall = false;
        if (
          !(
            (row === startNode_Row && column === startNode_Col) ||
            (row === endNode_Row && column === endNode_Col)
          )
        ) {
          console.log("hi");
          document.getElementById(`node-${row}-${column}`).className = "node";
        }
      }
    }
    this.setState({ grid: newGrid, timeComplexity: 0 });
  };

  render() {
    const { grid } = this.state;
    //  console.log(grid);
    return (
      <div className="container-fluid">
        <button
          className="btn btn-primary btn-lg"
          onClick={this.visualizeDijkstra}
        >
          Visualize Dijkstra Algorithm
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.visualizeAstar}
        >
          Visualize A* Algorithm
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={this.undoAlgoAndWalls}
        >
          Undo Algo and walls
        </button>
        <button className="btn btn-primary btn-lg" onClick={this.clearAlgo}>
          Clear Algo
        </button>
        <span className="time">
          Time Complexity = {this.state.timeComplexity}
        </span>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {
                    row,
                    column,
                    isStart,
                    isEnd,
                    distance,
                    isVisited,
                    previousNode,
                    isWall,
                    isMousePressed,
                  } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      row={row}
                      column={column}
                      isStart={isStart}
                      isEnd={isEnd}
                      distance={distance}
                      isVisited={isVisited}
                      previousNode={previousNode}
                      isWall={isWall}
                      isMousePressed={isMousePressed}
                      onMouseDown={(row, column) =>
                        this.handleMouseDown(row, column)
                      }
                      onMouseEnter={(row, column) =>
                        this.handleMouseEnter(row, column)
                      }
                      onMouseUp={(row, column) =>
                        this.handleMouseUp(row, column)
                      }
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
