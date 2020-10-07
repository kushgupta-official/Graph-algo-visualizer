import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.lol = this.lol.bind(this);
  }
  lol = (e) => {
    e.preventDefault();
    console.log("yoii");
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Graph Algo Visualizer</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <span className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Link
                </span>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={this.lol}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown link
                </span>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <span className="dropdown-item" href="#">
                    Action
                  </span>
                  <span className="dropdown-item" href="#">
                    Another action
                  </span>
                  <span className="dropdown-item" href="#">
                    Something else here
                  </span>
                </div>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </span>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div></div>
      </div>
    );
  }
}

export default Navbar;
