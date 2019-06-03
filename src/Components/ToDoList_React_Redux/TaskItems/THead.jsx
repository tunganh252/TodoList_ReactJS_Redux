import React, { Component } from "react";

export default class THead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Công Việc</th>
          <th scope="col">Nhãn</th>
          <th scope="col">Ưu tiên</th>
          <th scope="col">Người thực hiện</th>
          <th scope="col">Settings</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
    );
  }
}
