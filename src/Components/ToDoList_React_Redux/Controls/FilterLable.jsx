import React, { Component } from "react";

export default class FilterLable extends Component {
  render() {
    return (
      <div>
        <h5 className="mt-3">Nhãn: </h5>
        <div className="frontend mt-3 d-flex">
          <span style={{ backgroundColor: "green" }} />
          <p>Front End</p>
        </div>
        <div className="backend mt-3 d-flex">
          <span style={{ backgroundColor: "purple" }} />
          <p>Back End</p>
        </div>
        <div className="api mt-3 d-flex">
          <span style={{ backgroundColor: "#00a8ff" }} />
          <p>API</p>
        </div>
        <div className="issue mt-3 d-flex">
          <span style={{ backgroundColor: "red" }} />
          <p>Issue</p>
        </div>
      </div>
    );
  }
}
