import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Nav
        justify
        variant="pills"
        defaultActiveKey="/gav"
        className="navstyle"
        style={{ backgroundColor: "#262626" }}
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
    </>
  );
};

export default Header;
