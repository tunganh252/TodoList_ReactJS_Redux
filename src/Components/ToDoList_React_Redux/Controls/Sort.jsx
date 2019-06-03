import React, { Component } from "react";

export default class Sort extends Component {
  render() {
    return (
      <div>
        <h5 className="mt-4">Sắp xếp task: </h5>
        <div className="form-group">
          <select className="form-control" id="sel1">
            <option>Từ A - Z</option>
            <option>Từ Z - A</option>
          </select>
        </div>
      </div>
    );
  }
}
