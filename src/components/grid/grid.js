import React, { Component } from "react";

import "./grid.css";

class Grid extends Component {
  state = {
    cellValues: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
  render() {
    return (
      <React.Fragment>
        <h2>
          {this.props.firstname} {this.props.surname}
        </h2>
        <div className="grids">
          {this.state.cellValues.map(cellValue => {
            return (
              <ul className={`grid-${cellValue}`} key={`key-${cellValue}`}>
                {this.state.cellValues.map(cellValue => (
                  <li key={cellValue}>{cellValue}</li>
                ))}
              </ul>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Grid.defaultProps = {
  firstname: "Ben",
  surname: "Smith"
};

export default Grid;
