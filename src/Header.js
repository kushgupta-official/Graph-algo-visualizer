import React from "react";
// import { NavLink } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const {location}=props;
  return (
    <>
      <Nav
        justify
        variant="pills"
        defaultActiveKey="/gav"
        className="navstyle"
        style={{ backgroundColor: "#262626" }}
        // sticky="top"
      >
        <Nav.Item>
          <Link to="/gav">
            <Nav.Link href="/gav" className="nav-link-style">
              Path Finding Visualizer
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/mst">
            <Nav.Link href="/mst" className="nav-link-style" eventKey="link-1">
              Minimum Spanning Tree
            </Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/TopologicalSorting">
            <Nav.Link
              href="/TopologicalSorting"
              className="nav-link-style"
              eventKey="link-2"
            >
              Topological Sorting
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
      {/* <ul className="nav nav-pills nav-justified bg-dark border-1">
        <li className="nav-item">
          <div className="nav-link" aria-current="page">
            Path Finding Visualizer
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">Minimum Spanning Tree</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active">Topological Sorting</div>
        </li>
      </ul> */}
    </>
  );
};

export default Header;
