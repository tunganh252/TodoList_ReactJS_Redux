import React, { Component } from "react";

export default class FilterPriority extends Component {
  render() {
    return (
      <div>
        <h5 className="mt-4">Độ ưu tiên: </h5>
        <div className="form-group">
          <select className="form-control" id="sel1">
            <option>Thấp</option>
            <option>Trung bình</option>
            <option>Cao</option>
          </select>
        </div>
      </div>
    );
  }
}
