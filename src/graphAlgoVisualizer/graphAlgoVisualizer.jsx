import React, { Component } from "react";
import Node from "./node/node.jsx";
import Navbar from "./navbar";
import "./graphAlgoVisualizer.css";
import {
  dijkstra,
  getShortestPathDijkstra,
  getWeightOfShortestPathDijkstra,
} from "../algorithms/dijkstra.js";
import {
  aStar,
  getShortestPathAstar,
  getWeightOfShortestPathAstar,
} from "../algorithms/aStar.js";
import {
  bfs,
  getPathBFS,
  getWeightOfShortestPathBFS,
} from "../algorithms/bfs.js";
import { dfs, getPathDFS, getWeightOfPathDFS } from "../algorithms/dfs";

const total_rows = 20;
const total_columns = 40;
var startNode_Row = 5;
var startNode_Col = 10;
var endNode_Row = 10;
var endNode_Col = 37;
const FixedWeight = 10;

// const Checkbox = (props) => <input type="checkbox" {...props} />;
class GraphAlgoVisualizer extends Component {
  state = {
    grid: [],
    isMousePressed: false,
    timeComplexity: 0,
    pathCost: 0,
    pathLength: 0,
    isMovingStart: false,
    isMovingEnd: false,
    addWeights: false,
    processActive: false,
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
          weight: 0,
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
      weight: 0,
    };
    newGrid[row][column] = newNode;
    return newGrid;
  };

  getNewGridWithWeights = (row, column) => {
    const newGrid = this.state.grid.slice();
    const node = newGrid[row][column];
    let changeInValue = 0;
    if (node.weight === 0) {
      changeInValue = FixedWeight;
    } else {
      changeInValue = -FixedWeight;
    }
    const newNode = {
      ...node,
      isWall: false,
      weight: node.weight + changeInValue,
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
      let newGrid;
      if (!this.state.addWeights) {
        newGrid = this.getNewGridWithWallToggled(row, column);
      } else {
        newGrid = this.getNewGridWithWeights(row, column);
      }
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
      let newGrid;
      if (!this.state.addWeights) {
        newGrid = this.getNewGridWithWallToggled(row, column);
      } else {
        newGrid = this.getNewGridWithWeights(row, column);
      }
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
    // document.getElementById("function").disabled = true;
    for (let i = 1; i < visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        for (let j = 0; j < shortestPath.length; j++) {
          setTimeout(() => {
            setTimeout(() => {
              const node = shortestPath[j];
              if (
                document.getElementById(`node-${node.row}-${node.column}`)
                  .className === "node weight-present-visited"
              ) {
                document.getElementById(
                  `node-${node.row}-${node.column}`
                ).className = "node weight-present-path";
              } else {
                document.getElementById(
                  `node-${node.row}-${node.column}`
                ).className = "node node-shortestPath";
              }
            }, 50 * j);
          }, 25 * i);
        }
        //Finally the solution to bug
        // setTimeout(() => {
        //   setTimeout(() => {
        //     console.log("ho jayega");
        //     document.getElementById("function").disabled = false;
        //   }, 50 * shortestPath.length);
        // }, 25 * visitedNodesInOrder.length);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (
          document.getElementById(`node-${node.row}-${node.column}`)
            .className === "node weight-present"
        ) {
          document.getElementById(`node-${node.row}-${node.column}`).className =
            "node weight-present-visited";
        } else {
          document.getElementById(`node-${node.row}-${node.column}`).className =
            "node node-visited";
        }
      }, 25 * i);
    }
  };

  visualizeDijkstra = () => {
    // const toBeDisabled = document.getElementById("button");
    // toBeDisabled.disabled = true;
    this.clearAlgo(); //for clearing grid for any previous algo if implemented
    const { grid } = this.state;
    const startNode = grid[startNode_Row][startNode_Col];
    const endNode = grid[endNode_Row][endNode_Col];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    const shortestPath = getShortestPathDijkstra(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    const shortestPathCost = getWeightOfShortestPathDijkstra(
      grid,
      shortestPath
    );
    this.animateAlgo(visitedNodesInOrder, shortestPath);
    this.setState({
      timeComplexity: visitedNodesInOrder.length,
      pathLength: shortestPath.length,
      pathCost: shortestPathCost,
    });
    // toBeDisabled.disabled = false;
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
    const shortestPathCost = getWeightOfShortestPathAstar(grid, shortestPath);
    this.animateAlgo(visitedNodesInOrder, shortestPath);
    this.setState({
      timeComplexity: visitedNodesInOrder.length,
      pathLength: shortestPath.length,
      pathCost: shortestPathCost,
    });
    // console.log(shortestPath);
    // console.log(grid);
  };

  visualizeBFS = () => {
    this.clearAlgo(); //for clearing grid for any previous algo if implemented
    const { grid } = this.state;
    const startNode = grid[startNode_Row][startNode_Col];
    const endNode = grid[endNode_Row][endNode_Col];
    const visitedNodesInOrder = bfs(grid, startNode, endNode);
    //console.log(visitedNodesInOrder);
    const path = getPathBFS(grid, startNode, endNode);
    console.log(visitedNodesInOrder);
    this.animateAlgo(visitedNodesInOrder, path);
    const pathCost = getWeightOfShortestPathBFS(grid, path);
    this.setState({
      timeComplexity: visitedNodesInOrder.length,
      pathLength: path.length,
      pathCost,
    });
    console.log(path);
    console.log(grid);
  };

  visualizeDFS = () => {
    this.clearAlgo(); //for clearing grid for any previous algo if implemented
    const { grid } = this.state;
    const startNode = grid[startNode_Row][startNode_Col];
    const endNode = grid[endNode_Row][endNode_Col];
    const visitedNodesInOrder = dfs(grid, startNode, endNode);
    console.log(visitedNodesInOrder);
    const path = getPathDFS(grid, startNode, endNode);
    console.log(visitedNodesInOrder);
    this.animateAlgo(visitedNodesInOrder, path);
    const pathCost = getWeightOfPathDFS(grid, path);
    this.setState({
      timeComplexity: visitedNodesInOrder.length,
      pathLength: path.length,
      pathCost,
    });
    console.log(path);
    console.log(grid);
  };

  //clear visitedNodes and shortestPath properties from the grid leaving walls and weights untouched
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
          if (newGrid[row][column].weight > 0) {
            document.getElementById(`node-${row}-${column}`).className =
              "node weight-present";
          } else {
            document.getElementById(`node-${row}-${column}`).className = "node";
          }
        }
      }
    }
    this.setState({
      grid: newGrid,
      timeComplexity: 0,
      pathLength: 0,
      pathCost: 0,
    });
  };

  //clear whole grid
  undoAlgoAndWalls = () => {
    const newGrid = this.state.grid;
    for (let row = 0; row < total_rows; row++) {
      for (let column = 0; column < total_columns; column++) {
        newGrid[row][column].distance = Infinity;
        newGrid[row][column].isVisited = false;
        newGrid[row][column].previousNode = null;
        newGrid[row][column].isWall = false;
        newGrid[row][column].weight = 0;
        if (
          !(
            (row === startNode_Row && column === startNode_Col) ||
            (row === endNode_Row && column === endNode_Col)
          )
        ) {
          document.getElementById(`node-${row}-${column}`).className = "node";
        }
      }
    }
    this.setState({
      grid: newGrid,
      timeComplexity: 0,
      pathLength: 0,
      pathCost: 0,
    });
  };

  handleCheckboxChange = () => {
    console.log(this.state.addWeights);
    this.setState({ addWeights: !this.state.addWeights });
    console.log(this.state.addWeights, "hi");
  };

  render() {
    const { grid } = this.state;
    //  console.log(grid);
    return (
      // <div className="container-fluid">
      <div>
        <Navbar
          addWeights={this.state.addWeights}
          handleDijkstra={this.visualizeDijkstra}
          handleAstar={this.visualizeAstar}
          handleBFS={this.visualizeBFS}
          handleDFS={this.visualizeDFS}
          handleClearAlgorithm={this.clearAlgo}
          handleClearGrid={this.undoAlgoAndWalls}
          handleCheckboxChange={this.handleCheckboxChange}
        ></Navbar>
        {/* <button
          className="btn btn-primary btn-lg"
          id="dijkstra-btn"
          onClick={this.visualizeDijkstra}
        >
          Visualize Dijkstra Algorithm
        </button>
        <button
          className="btn btn-primary btn-lg"
          id="astar-btn"
          onClick={this.visualizeAstar}
        >
          Visualize A* Algorithm
        </button>
        <button
          className="btn btn-primary btn-lg"
          id="dfs-btn"
          onClick={this.visualizeDFS}
        >
          Depth First Search
        </button>
        <button
          className="btn btn-primary btn-lg"
          id="bfs-btn"
          onClick={this.visualizeBFS}
        >
          Breadth First Search
        </button>
        <button
          className="btn btn-primary btn-lg"
          id="function"
          onClick={this.undoAlgoAndWalls}
        >
          Undo Algo and walls
        </button>
        <button
          className="btn btn-primary btn-lg"
          id="function"
          onClick={this.clearAlgo}
        >
          Clear Algo
        </button> */}

        {/*CheckBox*/}

        {/* <label>
          <Checkbox
            checked={this.state.addWeights}
            onChange={this.handleCheckboxChange}
          />
          <span>Switch to Weights</span>
        </label> */}
        <div>
          <span className="time">
            Time Complexity = {this.state.timeComplexity}
          </span>
          <span className="pathLength">
            Path Length = {this.state.pathLength}
          </span>
          <span className="pathCost">Path Cost = {this.state.pathCost}</span>
        </div>
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
                    weight,
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
                      weight={weight}
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
