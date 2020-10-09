import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./graphAlgoVisualizer.css";

const Checkbox = (props) => <input type="checkbox" {...props} />;

class classNavbar extends Component {
  state = {
    currentAlgo: "null",
    addWeights: "false",
  };
  forDijkstra = () => {
    this.setState({ currentAlgo: "Dijkstra" });
  };
  forAstar = () => {
    this.setState({ currentAlgo: "Astar" });
  };
  forBFS = () => {
    this.setState({ currentAlgo: "BFS" });
  };
  forDFS = () => {
    this.setState({ currentAlgo: "DFS" });
  };
  visualize = () => {
    if (this.state.currentAlgo === "Dijkstra") {
      this.props.handleDijkstra();
    } else if (this.state.currentAlgo === "Astar") {
      this.props.handleAstar();
    } else if (this.state.currentAlgo === "BFS") {
      this.props.handleBFS();
    } else if (this.state.currentAlgo === "DFS") {
      this.props.handleDFS();
    }
  };
  handleCheckboxChange = () => {
    console.log(this.state.addWeights);
    this.setState({ addWeights: !this.state.addWeights });
    console.log(this.state.addWeights, "hi");
  };
  render() {
    const {
      handleClearAlgorithm,
      handleClearGrid,
      addWeights,
      handleCheckboxChange,
    } = this.props;
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="mr-5">Graph Algo Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.forDijkstra}>
                Dijkstra
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.forAstar}>
                A* Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.forBFS}>
                Breadth First Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.forDFS}>
                Depth First Search
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
            <Button variant="success" className="mx-5" onClick={this.visualize}>
              Visualize!
            </Button>
            <Button
              variant="info"
              className="mx-5"
              onClick={handleClearAlgorithm}
            >
              Clear Algorithm
            </Button>
            <Button variant="info" className="mx-5" onClick={handleClearGrid}>
              Clear Grid
            </Button>
            <label>
              <Checkbox checked={addWeights} onChange={handleCheckboxChange} />
              <span className="checkBox">Switch to Weights</span>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default classNavbar;
