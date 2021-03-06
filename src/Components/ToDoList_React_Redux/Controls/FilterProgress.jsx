import React, { Component } from "react";

export default class FilterProgress extends Component {
  render() {
    return (
      <div>
        <h5 className="mt-3">Lọc:</h5>
        <div className="done mt-3 d-flex">
          <i className="fas fa-spinner mr-3" />
          <p>Đang tiến hành</p>
        </div>
        <div className="done mt-3 d-flex">
          <i className="fas fa-exclamation-triangle mr-3" />
          <p>Chưa thực hiện</p>
        </div>
        <div className="done mt-3 d-flex">
        <i className="fas fa-check-square mr-3"></i>
          <p>Hoàn thành</p>
        </div>
        <div className="cancel mt-3 d-flex">
          <i className="fas fa-trash-alt mr-3" />
          <p>Hủy bỏ</p>
        </div>
      </div>
    );
  }
}
