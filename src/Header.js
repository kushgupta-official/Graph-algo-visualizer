import React from 'react'
// import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const Header = () => {
    // const {location}=props;
    return (
      <Nav justify variant="pills" defaultActiveKey="/gav" className="bg-dark border border-light border-1" sticky="top">
      <Nav.Item>
        <Link to="/gav">
            <Nav.Link href="/gav">
                Path Finding Visualizer
            </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/mst">
            <Nav.Link href="/mst" eventKey="link-1">
            Minimum Spanning Tree
            </Nav.Link>
        </Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Link to="/gav">
            <Nav.Link href="/gav" eventKey="link-2">
                Topological Sorting
            </Nav.Link>
        </Link>
      </Nav.Item> */}
    </Nav>
    )
}

export default Header
