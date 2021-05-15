import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex">
            {this.props.brand}
            <span className="badge rounded-pill bg-light text-dark m-1">
              {this.props.count}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
